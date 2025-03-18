import enUs from "./translations/en_us.json";
import ptBr from "./translations/pt_br.json";
import { Language, type TranslationMap } from "./types";

export const DEFAULT_LANG = Language.english;

export const TRANSLATION_MAP: TranslationMap = {
  [Language.english]: enUs,
  [Language.portugues]: ptBr,
};

export function getLangFromUrl(url: URL): [Language, string] {
  const [, lang, ...rest] = url?.pathname.split("/");

  const isDefault = lang !== Language.portugues;
  const path = "".concat(isDefault ? lang : "", ...rest);

  return [isDefault ? Language.english : Language.portugues, path];
}

export function getAltUrl(url: URL, targetLanguage: Language, path?: string) {
  const [lang, currentPath] = getLangFromUrl(url);

  let resultPath = (path || currentPath).replace(`/${lang}`, "");

  if (targetLanguage === Language.english) {
    return resultPath || "/";
  }

  return `/${targetLanguage}`.concat(resultPath);
}
