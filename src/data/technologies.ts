export type Technology = {
  color: string;
  label: string;
};

export const TECH_MAP: Record<string, Technology> = {
  bun: {
    color: "#faefde",
    label: "Bun",
  },
  js: {
    color: "#f0da4f",
    label: "JavaScript",
  },
  svelte: {
    color: "#ff4000",
    label: "Svelte",
  },
  sveltekit: {
    color: "#ff2520",
    label: "SvelteKit",
  },
  tailwindcss: {
    color: "#39bef7",
    label: "TailwindCSS",
  },
  ts: {
    color: "#2e74bf",
    label: "TypeScript",
  },
  react: {
    color: "#58c3db",
    label: "React.js",
  },
  styledComponents: {
    color: "#8b56ba",
    label: "styled-components",
  },
  postgresql: {
    color: "#336791",
    label: "PostgreSQL",
  },
  bash: {
    color: "var(--color-green)",
    label: "Bash",
  },
  docker: {
    color: "#029cc7",
    label: "Docker",
  },
  k8s: {
    color: "rgb(50, 107, 230)",
    label: "Kubernetes",
  },
  azureDevOps: {
    color: "#0078d4",
    label: "Azure DevOps",
  },
  firebase: {
    color: "#ffa200",
    label: "Firebase",
  },
  nodejs: {
    color: "#5cad47",
    label: "Node.js",
  },
  express: {
    color: "#000000",
    label: "Express",
  },
  antd: {
    color: "#0078d4",
    label: "Antd",
  },
  storybook: {
    color: "#0078d4",
    label: "Storybook,js",
  },
};

export const TECHNOLOGIES = Object.values(TECH_MAP);
