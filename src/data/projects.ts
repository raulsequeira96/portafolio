export type ProjectStatus = "active" | "in-development";

export interface PortfolioProject {
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  href?: string;
  previewImage?: string;
  accentFrom: string;
  accentTo: string;
}

export const projects: PortfolioProject[] = [
  {
    title: "MicroFrontend Colors",
    description:
      "App educativa sobre arquitectura MicroFrontend con Module Federation y un Color Picker desacoplado consumido por una app host.",
    stack: ["Webpack", "Module Federation", "React"],
    status: "active",
    href: "https://host-mf-colors-app.netlify.app/",
    previewImage: "/projects/microfrontend-color.png",
    accentFrom: "#06b6d4",
    accentTo: "#6366f1"
  },
  {
    title: "React Redux Tasks",
    description:
      "CRUD de tareas centrado en reducers sincronicos, acciones limpias y manejo de estado predecible en Redux.",
    stack: ["React", "Redux", "TypeScript"],
    status: "active",
    href: "https://react-redux-app-v1.netlify.app/",
    previewImage: "/projects/react-redux-tasks.png",
    accentFrom: "#22d3ee",
    accentTo: "#a855f7"
  },
  {
    title: "E-commerce Vanilla",
    description:
      "Tienda online construida con HTML5, CSS3 y JavaScript puro, enfocada en rendimiento y UX ligera.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "active",
    href: "https://fresquito-app.netlify.app/",
    previewImage: "/projects/ecommerce-vanilla.png",
    accentFrom: "#34d399",
    accentTo: "#06b6d4"
  },
  {
    title: "Cocktail Explorer",
    description:
      "Explorador de cocteles con filtros avanzados, busquedas por ingredientes y descubrimiento visual de recetas.",
    stack: ["React", "API Integration", "Filters UX"],
    status: "active",
    href: "https://cocktailstudio.netlify.app/",
    previewImage: "/projects/cocktail-explorer.png",
    accentFrom: "#f472b6",
    accentTo: "#f59e0b"
  },
  {
    title: "MicroFrontend Tasks",
    description:
      "Gestion de tareas modular basada en MicroFrontend, con dominios separados y despliegue independiente.",
    stack: ["MicroFrontend", "Module Federation", "Tasks"],
    status: "in-development",
    accentFrom: "#71717a",
    accentTo: "#3f3f46"
  },
  {
    title: "Club Members Manager",
    description:
      "Panel para administrar socios de club de futbol con altas, bajas, categorias y seguimiento administrativo.",
    stack: ["Dashboard", "CRUD", "Management"],
    status: "in-development",
    accentFrom: "#52525b",
    accentTo: "#27272a"
  }
];
