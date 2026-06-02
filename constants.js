export const METADATA = {
  author: "Hugo DENIS",
  title: "Portfolio | Hugo DENIS",
  description:
    "Hugo DENIS est un étudiant en BTS SIO SISR chez Deal Software, passionné par l'informatique et les réseaux.",
  siteUrl: "",
  twitterHandle: "",
  keywords: [
    "Hugo DENIS",
    "BTS SIO SISR",
    "Informatique",
    "Portfolio",
    "Deal Software",
  ].join(", "),
  image:
    "",
  language: "Français",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Projets",
    ref: "projects",
  },
  {
    name: "Expérience",
    ref: "work",
  },
];

export const TYPED_STRINGS = [
  "Étudiant en BTS SIO SISR",
  "Passionné d'informatique",
  "Alternant chez Deal Software",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:hugodenis.pro1@gmail.com",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/hugo.dn_/",
  },
];

export const SKILLS = {
  languagesAndTools: [],
  librariesAndFrameworks: [],
  databases: [],
  other: [],
};

export const PROJECTS = [
  {
    name: "Pyramide Party",
    imageKey: "pyramide", // placeholder
    description: "Site web pyramideparty.fr",
    gradient: ["#FF69B4", "#FFB6C1"],
    url: "https://pyramideparty.fr",
    tech: ["Web", "Réseau"],
  },
  {
    name: "Mirix",
    imageKey: "mirix", // placeholder
    description: "Site web mirix.fr",
    gradient: ["#1976D2", "#1565C0"],
    url: "https://mirix.fr",
    tech: ["Web", "Réseau"],
  },
];

export const WORK_CONTENTS = {
  DEAL_SOFTWARE: [
    {
      title: "Deal Software",
      description:
        "Actuellement en alternance chez Deal Software dans le cadre de mon BTS SIO option SISR.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Alternance - BTS SIO SISR
        </div>
      ),
    },
    {
      title: "Missions",
      description:
        "En tant qu'étudiant en SISR, j'interviens sur la maintenance des infrastructures, l'administration système et réseau, et le support aux utilisateurs pour garantir le bon fonctionnement des services de Deal Software.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Administration Système & Réseau
        </div>
      ),
    },
  ],
};

export const GTAG = "";
