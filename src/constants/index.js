// Importar imágenes de proyectos
import project1 from "../assets/images/projects/project-1.webp";
import project2 from "../assets/images/projects/project-2.webp";
import project3 from "../assets/images/projects/project-3.webp";
import project4 from "../assets/images/projects/project-4.webp";
import project5 from "../assets/images/projects/project-5.webp";
import project6 from "../assets/images/projects/project-6.webp";
import project7 from "../assets/images/projects/project-7.webp";
import project8 from "../assets/images/projects/project-8.webp";
import project9 from "../assets/images/projects/project-9.webp";

// Importar imágenes personales y logo
import profilePic from "../assets/images/profile/valentinMatheyProfile.webp";
import logo from "../assets/images/profile/valentinMatheyLogo.png";

// Importar imágenes de banderas
import argentinaFlag from "../assets/images/flags/argentina.png";
import usaFlag from "../assets/images/flags/usa.png";
import brasilFlag from "../assets/images/flags/brasil.png";

// Importar documentos
import cv from "../assets/pdf/CV - Valentin Mathey.pdf";

/** ===================== IMÁGENES ===================== **/
export const IMAGES = {
  PROFILE: profilePic,
  LOGO: logo,
  PROJECTS: [project1, project2, project3, project4, project5, project6, project7, project8, project9],
  FLAGS: {
    ARGENTINA: argentinaFlag,
    USA: usaFlag,
    BRASIL: brasilFlag
  },
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


/** ===================== CONTACTO ===================== **/
export const CONTACT = {
  address: "Lujan de Cuyo, Mendoza, Argentina",
  phoneNo: "+54 9 261 215 9084",
  email: LINKS.EMAIL,
};