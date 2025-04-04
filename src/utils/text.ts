import { DEFAULT_LANG, Language } from "../config";

export type TranslatableText = string | Record<Language | string, string>;

export function translatableTextToString(
  text: TranslatableText,
  lang = DEFAULT_LANG,
) {
  try {
    return typeof text === "string" ? text : text[lang] || "";
  } catch {
    return "";
  }
}
