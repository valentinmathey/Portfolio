import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";
import project5 from "../assets/images/projects/project-5.jpg";
import profilePic from "../assets/images/profile/valentinMatheyProfile.jpg";
import logo from "../assets/images/profile/valentinMatheyLogo.png";
import cv from "../assets/pdf/CV - Valentin Mathey.pdf";

// Rutas de imágenes
export const IMAGES = {
  PROFILE: profilePic,
  LOGO: logo,
  PROJECTS: [project1, project2, project3, project4, project5],
};

// Rutas de archivos
export const FILES = {
  CV: cv
};

// Links externos centralizados
export const LINKS = {
  GITHUB: "https://github.com/valentinmathey",
  LINKEDIN: "https://www.linkedin.com/in/valentin-mathey/",
  EMAIL: "matheyvalentin1@gmail.com",
};

//export const HERO_CONTENT = `Impulsando ideas y soluciones innovadoras en el desarrollo de software`;
export const HERO_CONTENT = ``;

export const ABOUT_TEXT = `
<p>
  Soy estudiante de cuarto año de 
  <span class="text-purple-500 font-medium">Ingeniería en Sistemas</span> 
  en la <span class="text-purple-500 font-medium">Universidad Tecnológica Nacional</span>.
</p>

<p class="mt-4">
  Desde muy chico me apasionó la 
  <span class="text-pink-500 font-medium">programación</span>. Comencé explorando 
  <span class="text-pink-500 font-medium">C#</span> para crear mis propios videojuegos, lo cual me introdujo en el mundo del 
  <span class="text-purple-500 font-medium">desarrollo de software</span>.
</p>

<p class="mt-4">
  Con el tiempo, descubrí mi interés por el 
  <span class="text-pink-500 font-medium">backend</span> y el 
  <span class="text-pink-500 font-medium">desarrollo web</span>, donde me especializo actualmente.
</p>

<p class="mt-4">
  Hoy en día, aplico 
  <span class="text-purple-500 font-medium">Java</span>, 
  <span class="text-purple-500 font-medium">JavaScript</span>, 
  <span class="text-purple-500 font-medium">React</span> y 
  <span class="text-purple-500 font-medium">Spring Boot</span> 
  para crear soluciones escalables y eficientes, siempre siguiendo 
  <span class="text-pink-500 font-medium">buenas prácticas</span> y 
  <span class="text-pink-500 font-medium">patrones de diseño</span>.
</p>

<p class="mt-4">
  Me destaco por mi 
  <span class="font-medium text-pink-500">responsabilidad</span>, 
  <span class="font-medium text-pink-500">disciplina</span> 
  y 
  <span class="font-medium text-pink-500">capacidad de trabajo en equipo</span>.
</p>
`;


export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Líder Técnico",
    company: "Egg",
    description: `Lideré un proyecto de desarrollo de software con metodologías ágiles, organizando la estructura del proyecto y revisando el código. Coordiné un equipo multifuncional (backend, frontend, scrum master, y agile delivery manager) para crear una web app que facilita la oferta, contratación y evaluación de servicios.`,
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JavaScript", "Html", "Css"],
  },
];

export const PROJECTS = [
  {
    title: "Heroes App",
    image: IMAGES.PROJECTS[0],
    description:
      "Explora héroes de DC y Marvel con sus alter egos, primeras apariciones y editoriales en una plataforma visual e interactiva",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux"],
    codeLink: "https://github.com/valentinmathey/HeroesApp",
    demoLink: "https://heroes-app-dev.vercel.app/"
  },
  {
    title: "Weather App",
    image: IMAGES.PROJECTS[1],
    description:
      "Consulta el clima de cualquier ciudad con datos precisos y actualizados en tiempo real, en una interfaz moderna y sencilla",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    codeLink: "https://github.com/valentinmathey/MUI-Exercises",
    demoLink: "https://weather-app-dev-51.vercel.app/"
  },
  {
    title: "ToDo List",
    image: IMAGES.PROJECTS[2],
    description:
      "Organiza tus tareas diarias de manera eficiente con una aplicación intuitiva para agregar, eliminar y gestionar pendientes",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    codeLink: "https://github.com/valentinmathey/AprendiendoTypeScript",
    demoLink: "https://to-do-dev-b.vercel.app/"
  },
  {
    title: "E-commerce",
    image: IMAGES.PROJECTS[3],
    description:
      "Carga, modifica y elimina productos fácilmente con una barra de búsqueda y categorías organizadas para explorar el catálogo",
    technologies: ["HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/valentinmathey/DesarrolloSoftware",
    demoLink: "https://ecommerce-restaurante-dev.vercel.app/"
  },
  {
    title: "Rick and Morty API",
    image: IMAGES.PROJECTS[4],
    description:
      "Descubre y filtra personajes de Rick and Morty con un diseño interactivo de cartas y paginación eficiente",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    codeLink: "https://github.com/valentinmathey/RickAndMorty-React-Exercises",
    demoLink: "https://rick-and-morty-react-exercises.vercel.app/"
  },
];

export const CONTACT = {
  address: "Lujan de Cuyo, Mendoza, Argentina",
  phoneNo: "+54 9 261 215 9084",
  email: LINKS.EMAIL,
};
