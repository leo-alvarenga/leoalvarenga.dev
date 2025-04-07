import nupessc from "../assets/NuPESSC_logo.png";
import vetta from "../assets/Vetta_logo.png";

import errorTaken from "../assets/error_taken.svg";

import inProgressAstronaut from "../assets/in_progress_astronaut.svg";
import inProgressMoon from "../assets/in_progress_moon.svg";
import inProgressRelaunch from "../assets/in_progress_relaunch.svg";

import notFoundGalaxy from "../assets/not_found_galaxy.svg";
import notFoundVoid from "../assets/not_found_void.svg";
import { Language } from "../config";

export const PAGE_TITLE_PREFFIX = "Leonardo Alvarenga";
export const DEFAULT_PAGE_TITLE = `${PAGE_TITLE_PREFFIX} - Frontend Software Engineer`;

export const DEFAULT_DATE_FORMAT = "MMM, YYYY";

export const EMAIL_FOR_CONTACT = "leonardo.a.alvarenga@gmail.com";

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
  IN_PROGRESS: [inProgressAstronaut, inProgressMoon, inProgressRelaunch],
  NOT_FOUND: [notFoundGalaxy, notFoundVoid],
};

export const NAVBAR_LINKS = [
  {
    label: "home.title",
    baseHref: "/",
  },
  {
    label: "blog.title",
    baseHref: "/blog",
  },
];

export const HERO_HIGHLIGHTED_WORDS = [
  {
    style: "text-peach font-light font-petit-formal",
    word: "hero.word.beautiful",
  },
  {
    style: "text-blue italic font-anonymous", // add cursive or curly font
    word: "hero.word.personality",
  },
  {
    style: "text-maroon",
    word: "hero.word.responsive",
  },
];
