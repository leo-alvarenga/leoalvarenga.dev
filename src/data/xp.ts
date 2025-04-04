import type { Technology } from "./technologies";
import nupessc from "../assets/NuPESSC_logo.png";
import vetta from "../assets/Vetta_logo.png";
import type { TranslatableText } from "../utils";

export type Company = {
  name: TranslatableText;
  logo: string;
  page: string;
  location: TranslatableText;
};

export type Xp = {
  company: Company;
  description: TranslatableText;
  position: TranslatableText;
  stack: Technology[];

  start: string;
  end?: string;
};

export const experience = [
  {
    name: "data.experience.vetta.frontend.name",
    time: "2023, Mar - current",
    info: "data.experience.vetta.frontend.info",
    stack: ["TypeScript", "React", "styled-components", "Postgresql", "Bash"],
    place: {
      name: "Vetta",
      page: "https://vetta.digital",
      icon: vetta,
      location: "Belo Horizonte, Brazil",
    },
  },
  {
    name: "data.experience.vetta.internFrontend.name",
    time: "2022, Oct - 2023, Mar",
    info: "data.experience.vetta.internFrontend.info",
    stack: ["TypeScript", "React", "styled-components", "Postgresql", "Bash"],
    place: {
      name: "Vetta",
      page: "https://vetta.digital",
      icon: vetta,
      location: "Belo Horizonte, Brazil",
    },
  },
  {
    name: "data.experience.vetta.internDevOps.name",
    time: "2022, Mar - 2022, Oct",
    info: "data.experience.vetta.internDevOps.info",
    stack: ["Bash", "Linux", "Docker", "Kubernetes", "Azure DevOps"],
    place: {
      name: "Vetta",
      page: "https://vetta.digital",
      icon: vetta,
      location: "Belo Horizonte, Brazil",
    },
  },
  {
    name: "data.experience.ufv.ic.title",
    time: "2021, Oct - 2022, Sep",
    info: "data.experience.ufv.ic.info",
    stack: [
      "Firestore",
      "Cloud Functions",
      "Scrum",
      "Agile",
      "TypeScript",
      "JavaScript",
    ],
    place: {
      name: "UFV (NuPESSC)",
      page: "http://nupessc.caf.ufv.br",
      icon: nupessc,
      location: "Florestal, Brazil",
    },
  },
];
