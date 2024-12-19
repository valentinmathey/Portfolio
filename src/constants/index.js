// Importar imágenes de proyectos
import project1 from "../assets/images/projects/project-1.webp";
import project2 from "../assets/images/projects/project-2.webp";
import project3 from "../assets/images/projects/project-3.webp";
import project4 from "../assets/images/projects/project-4.webp";
import project5 from "../assets/images/projects/project-5.webp";

// Importar imágenes personales y logo
import profilePic from "../assets/images/profile/valentinMatheyProfile.webp";
import logo from "../assets/images/profile/valentinMatheyLogo.png";

// Importar documentos
import cv from "../assets/pdf/CV - Valentin Mathey.pdf";

/** ===================== IMÁGENES ===================== **/
export const IMAGES = {
  PROFILE: profilePic,
  LOGO: logo,
  PROJECTS: [project1, project2, project3, project4, project5],
};

/** ===================== DOCUMENTOS ===================== **/
export const FILES = {
  CV: cv,
};

/** ===================== ENLACES EXTERNOS ===================== **/
export const LINKS = {
  GITHUB: "https://github.com/valentinmathey",
  LINKEDIN: "https://www.linkedin.com/in/valentin-mathey/",
  EMAIL: "matheyvalentin1@gmail.com",
};

/** ===================== CONTENIDO DEL HERO ===================== **/
//export const HERO_CONTENT = `Impulsando ideas y soluciones innovadoras en el desarrollo de software.`;
export const HERO_CONTENT = ``;

/** ===================== SOBRE MÍ ===================== **/
export const ABOUT_TEXT = `
<section>
  <p>
    Soy estudiante de cuarto año de 
    <strong class="highlight-purple">Ingeniería en Sistemas</strong> 
    en la <strong class="highlight-purple">Universidad Tecnológica Nacional</strong>.
  </p>
  <p class="mt-4">
    Desde muy chico me apasionó la 
    <strong class="highlight-pink">programación</strong>. Comencé explorando 
    <strong class="highlight-pink">C#</strong> para crear mis propios videojuegos, lo cual me introdujo en el mundo del 
    <strong class="highlight-purple">desarrollo de software</strong>.
  </p>
  <p class="mt-4">
    Hoy en día, aplico 
    <strong class="highlight-purple">Java</strong>, 
    <strong class="highlight-purple">JavaScript</strong>, 
    <strong class="highlight-purple">React</strong> y 
    <strong class="highlight-purple">Spring Boot</strong> 
    para crear soluciones escalables y eficientes, siempre siguiendo 
    <strong class="highlight-pink">buenas prácticas</strong> y 
    <strong class="highlight-pink">patrones de diseño</strong>.
  </p>
</section>
`;

/** ===================== EXPERIENCIAS ===================== **/
export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Líder Técnico",
    company: "Egg",
    description: `Lideré un proyecto de desarrollo de software con metodologías ágiles, organizando la estructura del proyecto y revisando el código. Coordiné un equipo multifuncional (backend, frontend, scrum master, y agile delivery manager) para crear una web app que facilita la oferta, contratación y evaluación de servicios.`,
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JavaScript", "HTML", "CSS"],
  },
];

/** ===================== PROYECTOS ===================== **/
export const PROJECTS = [
  {
    title: "Heroes App",
    image: IMAGES.PROJECTS[0],
    description:
      "Explora héroes de DC y Marvel con sus alter egos, primeras apariciones y editoriales en una plataforma visual e interactiva.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux"],
    codeLink: `${LINKS.GITHUB}/HeroesApp`,
    demoLink: "https://heroes-app-dev.vercel.app/",
  },
  {
    title: "Weather App",
    image: IMAGES.PROJECTS[1],
    description:
      "Consulta el clima de cualquier ciudad con datos precisos y actualizados en tiempo real, en una interfaz moderna y sencilla.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    codeLink: `${LINKS.GITHUB}/MUI-Exercises`,
    demoLink: "https://weather-app-dev-51.vercel.app/",
  },
  {
    title: "ToDo List",
    image: IMAGES.PROJECTS[2],
    description:
      "Organiza tus tareas diarias de manera eficiente con una aplicación intuitiva para agregar, eliminar y gestionar pendientes.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    codeLink: `${LINKS.GITHUB}/AprendiendoTypeScript`,
    demoLink: "https://to-do-dev-b.vercel.app/",
  },
  {
    title: "E-commerce",
    image: IMAGES.PROJECTS[3],
    description:
      "Carga, modifica y elimina productos fácilmente con una barra de búsqueda y categorías organizadas para explorar el catálogo.",
    technologies: ["HTML", "CSS", "JavaScript"],
    codeLink: `${LINKS.GITHUB}/DesarrolloSoftware`,
    demoLink: "https://ecommerce-restaurante-dev.vercel.app/",
  },
  {
    title: "Rick and Morty API",
    image: IMAGES.PROJECTS[4],
    description:
      "Descubre y filtra personajes de Rick and Morty con un diseño interactivo de cartas y paginación eficiente.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    codeLink: `${LINKS.GITHUB}/RickAndMorty-React-Exercises`,
    demoLink: "https://rick-and-morty-react-exercises.vercel.app/",
  },
];

/** ===================== CONTACTO ===================== **/
export const CONTACT = {
  address: "Lujan de Cuyo, Mendoza, Argentina",
  phoneNo: "+54 9 261 215 9084",
  email: LINKS.EMAIL,
};