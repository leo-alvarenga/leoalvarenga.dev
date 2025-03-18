export enum Language {
  english = "en-us",
  portugues = "pt-br",
}

type TranslationTable = Record<string, string>;

export type TranslationMap = Record<Language, TranslationTable>;

export type TranslationParams = Record<string, string | number>;
