import {
  Language,
  type TranslationFunction,
  type TranslationParams,
} from "./types";
import { DEFAULT_LANG, TRANSLATION_MAP } from "./utils";

export type UseTranslationParams = {
  language?: Language;
};

export function useTranslation({
  language = DEFAULT_LANG,
}: UseTranslationParams): { t: TranslationFunction } {
  const table = TRANSLATION_MAP[language];

  return {
    t: (key: string, params?: TranslationParams) => {
      try {
        let text = table[key];
        if (!text) throw "Not found";

        if (params) {
          for (const [key, val] of Object.entries(params)) {
            text = text.replace(`{{${key}}}`, val.toString());
          }
        }

        return text;
      } catch {
        return key;
      }
    },
  };
}
