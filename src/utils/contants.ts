import errorTaken from "../assets/error_taken.svg";

import inProgress from "../assets/in_progress.svg";

import notFound404 from "../assets/not_found_404.svg";
import notFoundVoid from "../assets/not_found_void.svg";
import notFoundWoman from "../assets/not_found_woman.svg";
import { Language } from "../config";

export const PAGE_TITLE_PREFFIX = "Leonardo Alvarenga";
export const DEFAULT_PAGE_TITLE = `${PAGE_TITLE_PREFFIX} - Frontend Software Engineer`;

export const LANGUAGE_LABELS = {
  [Language.english]: "English 🇺🇸",
  [Language.portugues]: "Português 🇧🇷",
};

export const LANGUAGE_HINTS = {
  [Language.english]: "Switch to english",
  [Language.portugues]: "Trocar para português",
};

export const STATUS_IMAGES = {
  ERROR: [errorTaken],
  IN_PROGRESS: [inProgress],
  NOT_FOUND: [notFound404, notFoundVoid, notFoundWoman],
};

export const NAVBAR_LINKS = [
  {
    label: "home.title",
    baseHref: "/",
  },
];
