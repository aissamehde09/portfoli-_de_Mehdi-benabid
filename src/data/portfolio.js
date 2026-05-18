import {
  faCode,
  faDatabase,
  faEnvelope,
  faLocationDot,
  faPhone,
  faServer,
  faTerminal,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGitAlt, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "To-Do List App",
    description: "Une application simple pour organiser ses tâches, pensée pour rester claire sur mobile comme sur desktop.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://to-do-list-vert-one.vercel.app/",
    githubUrl: "https://github.com/aissamehde09",
    type: "todo",
  },
  {
    title: "Trouve Ton Artisan",
    description: "Un projet de mise en relation avec une interface directe pour chercher un artisan plus facilement.",
    stack: ["React", "Node.js", "MySQL"],
    liveUrl: "https://trouve-ton-artisan-ab7z.vercel.app/",
    githubUrl: "https://github.com/aissamehde09",
    type: "artisan",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: faCode,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 86 },
      { name: "JavaScript", level: 82 },
      { name: "React", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: faServer,
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 74 },
    ],
  },
  {
    title: "Database",
    icon: faDatabase,
    skills: [
      { name: "MongoDB", level: 76 },
      { name: "MySQL", level: 68 },
    ],
  },
  {
    title: "Outils",
    icon: faTerminal,
    skills: [
      { name: "Git", level: 84 },
      { name: "GitHub", level: 82 },
      { name: "Vercel", level: 80 },
      { name: "Railway", level: 70 },
      { name: "Figma", level: 72 },
    ],
  },
];

export const toolCards = [
  { label: "Git", icon: faGitAlt },
  { label: "GitHub", icon: faGithub },
  { label: "Vercel", image: "/brand-icons/vercel.svg" },
  { label: "Railway", icon: faTrain },
  { label: "Figma", icon: faFigma },
];

export const softSkills = [
  "Autonome",
  "Curieux",
  "Rigoureux",
  "Travail en équipe",
  "Bonne communication",
];

export const contactLinks = [
  {
    label: "Email",
    value: "benabid.mehdi2009@gmail.com",
    href: "mailto:benabid.mehdi2009@gmail.com",
    icon: faEnvelope,
  },
  {
    label: "Téléphone",
    value: "+33 6 25 10 00 94",
    href: "tel:+33625100094",
    icon: faPhone,
  },
  {
    label: "GitHub",
    value: "github.com/aissamehde09",
    href: "https://github.com/aissamehde09",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mehdi-benabid",
    href: "https://www.linkedin.com/in/mehdi-benabid",
    icon: faLinkedinIn,
  },
  {
    label: "Localisation",
    value: "Nanterre, France",
    href: "https://www.google.com/maps/search/?api=1&query=Nanterre%2C%20France",
    icon: faLocationDot,
  },
];
