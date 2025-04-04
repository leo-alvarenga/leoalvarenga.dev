import nupessc from "../assets/NuPESSC_logo.png";
import vetta from "../assets/Vetta_logo.png";

import errorTaken from "../assets/error_taken.svg";

import inProgress from "../assets/in_progress.svg";

import notFoundGalaxy from "../assets/not_found_galaxy.svg";
import notFoundVoid from "../assets/not_found_void.svg";
import { Language } from "../config";

export const PAGE_TITLE_PREFFIX = "Leonardo Alvarenga";
export const DEFAULT_PAGE_TITLE = `${PAGE_TITLE_PREFFIX} - Frontend Software Engineer`;

export const DEFAULT_DATE_FORMAT = "MMMM, YYYY";

export const LANGUAGE_LABELS = {
  [Language.english]: "English 🇺🇸",
  [Language.portugues]: "Português 🇧🇷",
};

export const LANGUAGE_HINTS = {
  [Language.english]: "Switch to english",
  [Language.portugues]: "Trocar para português",
};

export const COMPANY_LOGOS = {
  vetta,
  nupessc,
};

export const STATUS_IMAGES = {
  ERROR: [errorTaken],
  IN_PROGRESS: [inProgress],
  NOT_FOUND: [notFoundGalaxy, notFoundVoid],
};

export const NAVBAR_LINKS = [
  {
    label: "home.title",
    baseHref: "/",
  },
];
