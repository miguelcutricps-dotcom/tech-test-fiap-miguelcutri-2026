export interface Course {
  id: string;
  name: string;
  description?: string;
  /** Ex.: "REMOTO • LIVE" ou "REMOTO • LIVE + MULTIMÍDIA" — usado no mobile */
  modality?: string;
}

export interface CourseCategory {
  id: string;
  label: string;
  courses: Course[];
}

export const courseCategories: CourseCategory[] = [
  {
    id: "tecnologia",
    label: "Tecnologia",
    courses: [
      {
        id: "big-data-ecosystem",
        name: "Big Data Ecosystem",
        modality: "REMOTO • LIVE",
      },
      {
        id: "creating-dashboards-ai",
        name: "Creating Dashboards for BI",
        modality: "REMOTO • LIVE",
      },
      {
        id: "big-data-science-ml",
        name: "Big Data Science - Machine Learning & Data Mining",
        modality: "REMOTO • LIVE + MULTIMÍDIA",
      },
      {
        id: "storytelling",
        name: "Storytelling",
        modality: "REMOTO • LIVE + MULTIMÍDIA",
      },
    ],
  },
  {
    id: "inovacao",
    label: "Inovação",
    courses: [
      {
        id: "gestao-infraestrutura-ti",
        name: "Gestão de Infraestrutura de TI",
        modality: "REMOTO • LIVE",
      },
      {
        id: "gestao-projetos-ageis",
        name: "Gestão de Projetos Ágeis",
        modality: "REMOTO • LIVE",
      },
      {
        id: "design-thinking",
        name: "Design Thinking",
        modality: "REMOTO • LIVE",
      },
      {
        id: "leadership-transformation",
        name: "Leadership & Transformation",
        modality: "REMOTO • LIVE",
      },
    ],
  },
  {
    id: "negocios",
    label: "Negócios",
    courses: [
      {
        id: "business-intelligence",
        name: "Business Intelligence",
        modality: "REMOTO • LIVE",
      },
      {
        id: "marketing-digital",
        name: "Marketing Digital",
        modality: "REMOTO • LIVE",
      },
      {
        id: "gestao-financeira",
        name: "Gestão Financeira de Negócios",
        modality: "REMOTO • LIVE",
      },
      {
        id: "empreendedorismo-startups",
        name: "Empreendedorismo e Startups",
        modality: "REMOTO • LIVE",
      },
    ],
  },
];
