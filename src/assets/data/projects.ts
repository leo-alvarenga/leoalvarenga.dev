import { Language } from "../../config";
import { TECH_MAP } from "./technologies";

export type ProjectDescription = Record<Language, string>;

export type ProjectStack = {
  color: string;
  label: string;
};

export enum ProjectStatus {
  active = "commons.active",
  archived = "commons.archived",
  inactive = "commons.inactive",
}

export enum ProjectTag {
  all = "commons.all",
  backend = "Back-end",
  command = "CLI",
  frontend = "Front-end",
  linux = "Linux",
}

export type Project = {
  description: ProjectDescription;
  icon: string;
  name: string;
  preview?: string;
  repo?: string;
  stack: ProjectStack[];
  status: ProjectStatus;
  tags: ProjectTag[];
};

export const PROJECT_STATUS_COLOR: Record<ProjectStatus, string> = {
  [ProjectStatus.active]: "green",
  [ProjectStatus.archived]: "yellow",
  [ProjectStatus.inactive]: "red",
};

export const PROJECT_STATUS_ICON: Record<ProjectStatus, string> = {
  [ProjectStatus.active]: `fa-solid fa-circle text-${PROJECT_STATUS_COLOR[ProjectStatus.active]}`,
  [ProjectStatus.archived]: `fa-solid fa-box-archive text-${PROJECT_STATUS_COLOR[ProjectStatus.archived]}`,
  [ProjectStatus.inactive]: `fa-solid fa-business-time  text-${PROJECT_STATUS_COLOR[ProjectStatus.inactive]}`,
};

export const PROJECTS: Project[] = [
  {
    description: {
      [Language.english]:
        "A small and dead simple web app template based on an API Rest built using Bun and ElysiaJS that serves static pages with internalization without overhead.",
      [Language.portugues]:
        "Um pequeno e simples template de aplicativo web baseado em uma API Rest, construído com Bun e ElysiaJS, que serve páginas estáticas com internacionalização sem complicações desnecessárias",
    },
    icon: "fa-solid fa-server",
    name: "bej",
    preview: "a",
    repo: "a",
    stack: [TECH_MAP.bun, TECH_MAP.ts],
    status: ProjectStatus.archived,
    tags: [ProjectTag.backend, ProjectTag.frontend],
  },
  {
    description: {
      [Language.english]:
        "Reworked version of my personal web page using SvelteKit (1.20)",
      [Language.portugues]:
        "Versão retrabalhada da minha página web pessoal utilizando SvelteKit (1.20)",
    },
    icon: "",
    name: "svelte-leoalvarenga.dev",
    preview: "",
    repo: "",
    stack: [
      TECH_MAP.svelte,
      TECH_MAP.sveltekit,
      TECH_MAP.tailwindcss,
      TECH_MAP.ts,
    ],
    status: ProjectStatus.inactive,
    tags: [ProjectTag.frontend],
  },
];

export const FEATURED_PROJECTS = [];

export const PROJECT_TAGS = [
  ProjectTag.all,
  ProjectTag.backend,
  ProjectTag.command,
  ProjectTag.frontend,
  ProjectTag.linux,
];
