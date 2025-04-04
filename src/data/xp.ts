import { TECH_MAP, type Technology } from "./technologies";
import type { COMPANY_LOGOS, TranslatableText } from "../utils";

export type CompanyLogo = keyof typeof COMPANY_LOGOS;

export type Company = {
  name: TranslatableText;
  logo: CompanyLogo;
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

export const experience: Xp[] = [
  {
    position: {
      [Language.english]: "Software Developer",
      [Language.portugues]: "Desenvolvedor de Software",
    },
    start: "2023-03",
    description: {
      [Language.english]:
        "Active role in the Viridis NG development team, being responsible for the implementation of new features, API integrations, bug fixing and performance optimizations in the frontend using a stack composed of React, TypeScript, Styled components and Postgresql. Also responsible for bug fixing in one of the project’s REST APIs, using Node.js and Express",
      [Language.portugues]:
        "Papel ativo na equipe de desenvolvimento do Viridis NG, sendo responsável pela implementação de novos recursos, integrações de API, correção de bugs e otimizações de desempenho no frontend utilizando uma stack composta por React, TypeScript, Styled components e PostgreSQL. Também responsável pela correção de bugs em uma das APIs REST do projeto, utilizando Node.js e Express",
    },
    stack: [
      TECH_MAP.ts,
      TECH_MAP.react,
      TECH_MAP.styledComponents,
      TECH_MAP.postgresql,
      TECH_MAP.bash,
    ],
    company: {
      name: "Vetta",
      page: "https://vetta.digital",
      logo: "vetta",
      location: {
        [Language.english]: "Belo Horizonte, Brazil",
        [Language.portugues]: "Belo Horizonte, MG",
      },
    },
  },
  {
    position: {
      [Language.english]: "Intern Software Developer",
      [Language.portugues]: "Desenvolvedor de Software Estagiário",
    },
    start: "2022-10",
    end: "2023-02",
    description: {
      [Language.english]:
        "Active role in the Viridis NG development team where I was responsible for the implementation of new features, API integrations and bug fixing in the frontend using a stack composed of React, TypeScript, Styled components and Postgresql",
      [Language.portugues]:
        "Papel ativo na equipe de desenvolvimento do Viridis NG, onde fui responsável pela implementação de novos recursos, integrações de API e correção de bugs no frontend utilizando uma stack composta por React, TypeScript, Styled components e PostgreSQL",
    },
    stack: [
      TECH_MAP.ts,
      TECH_MAP.react,
      TECH_MAP.styledComponents,
      TECH_MAP.postgresql,
      TECH_MAP.bash,
    ],
    company: {
      name: "Vetta",
      page: "https://vetta.digital",
      logo: "vetta",
      location: {
        [Language.english]: "Belo Horizonte, Brazil",
        [Language.portugues]: "Belo Horizonte, MG",
      },
    },
  },
  {
    position: {
      [Language.english]: "Intern DevOps Engineer",
      [Language.portugues]: "Analista DevOps Estagiário",
    },
    start: "2022-03",
    end: "2022-10",
    description: {
      [Language.english]:
        "Pivotal role in ensuring high availability of internal services hosted using Kubernetes and Docker compose, as well as in IT governance and access control. Occasionally responsible for the provisioning of demo and development environments for different products in Kubernetes clusters, giving feedback and handling DevOps tasks involving international teams when necessary",
      [Language.portugues]:
        "Papel fundamental na garantia da alta disponibilidade dos serviços internos hospedados usando Kubernetes e Docker Compose, assim como na governança de TI e controle de acesso. Ocasionalmente responsável pelo provisionamento de ambientes de demonstração e desenvolvimento para diferentes produtos em clusters Kubernetes, dando feedback e lidando com tarefas de DevOps envolvendo equipes internacionais quando necessário",
    },
    stack: [TECH_MAP.bash, TECH_MAP.docker, TECH_MAP.k8s, TECH_MAP.azureDevOps],
    company: {
      name: "Vetta",
      page: "https://vetta.digital",
      logo: "vetta",
      location: {
        [Language.english]: "Belo Horizonte, Brazil",
        [Language.portugues]: "Belo Horizonte, MG",
      },
    },
  },
  {
    position: {
      [Language.english]: "Scientific Initiation",
      [Language.portugues]: "Iniciação Cientifica",
    },
    start: "2021-03",
    end: "2022-9",
    description: {
      [Language.english]:
        "Scientific Initiation (Undergraduate Research), occasionally acting as QA Analyst and working mostly in the management, as Scrum Master and PO, and infrastructure, as a mix of DevOps Analyst and DB Admin in a MVP of a web app aimed at providing a virtual laboratory and learning environment developed by the NuPESSC research group",
      [Language.portugues]:
        "Iniciação Cientifica, ocasionalmente atuando como Analista de QA e trabalhando majoritariamente na gerência como Scrum Master e PO, e na infraestrutura, como um mix de Analista DevOps Analyst e DB Admin em um MVP de um web app focado em prover laboratórios e ambientes de aprendizado virtuais desenvolvido pelo NuPESSC",
    },
    stack: [
      TECH_MAP.bash,
      TECH_MAP.docker,
      TECH_MAP.firebase,
      TECH_MAP.ts,
      TECH_MAP.js,
    ],
    company: {
      name: "UFV (NuPESSC)",
      page: "http://nupessc.caf.ufv.br",
      logo: "nupessc",
      location: {
        [Language.english]: "Florestal, Brazil",
        [Language.portugues]: "Florestal, MG",
      },
    },
  },
];
