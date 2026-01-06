import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMAGES } from "../constants";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import "./Projects.css";

export const Projects = () => {

    const { t } = useTranslation();

    return (
        <section id={t("projects.id")} className="border-b border-neutral-900 pb-16">
            {/* Título */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="my-10 text-center text-4xl font-bold"
            >
                {t("projects.title")}
            </motion.h2>

            {/* Swiper de Proyectos */}
            <div className="relative w-full py-10 px-4 md:px-8 max-w-7xl mx-auto">
                <Swiper
                    grabCursor={true}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    pagination={{
                        el: ".swiper-pagination-custom",
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper !pb-14"
                >

                    {t("projects.items", { returnObjects: true }).map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 100 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0px 10px 30px -10px rgba(168, 85, 247, 0.4)"
                                }}
                                className="group flex flex-col justify-between items-center h-[580px] w-full bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 text-center mx-auto hover:border-purple-500/50 transition-colors duration-300"
                            >
                                {/* Imagen */}
                                <div className="w-full mb-6 overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={IMAGES.PROJECTS[project.imageIndex]}
                                        alt={project.title}
                                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Título */}
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-3">
                                    {project.title}
                                </h3>

                                {/* Descripción */}
                                <p className="text-gray-400 text-sm leading-relaxed h-20 overflow-hidden line-clamp-3 mb-4">
                                    {project.description}
                                </p>

                                {/* Tecnologías */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-neutral-800 px-3 py-1 text-xs text-purple-300 rounded-full border border-neutral-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Botones */}
                                <div className="flex justify-center gap-4 mt-auto w-full">
                                    <motion.a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 font-medium group/btn"
                                    >
                                        <FaCode className="group-hover/btn:scale-110 transition-transform" /> {t("projects.buttons.code")}
                                    </motion.a>

                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600/10 border border-purple-500/50 text-purple-300 rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 font-medium group/btn"
                                    >
                                        <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" /> {t("projects.buttons.demo")}
                                    </motion.a>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                 
               {/* Custom Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-10 hidden md:flex justify-between px-2 pointer-events-none">
                     <button className="swiper-button-prev-custom pointer-events-auto bg-neutral-900/80 hover:bg-purple-600 text-white p-3 rounded-full border border-neutral-700 hover:border-purple-500 transition-all duration-300 shadow-xl backdrop-blur-sm -ml-4 lg:-ml-12 group">
                        <BiChevronLeft className="text-3xl group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="swiper-button-next-custom pointer-events-auto bg-neutral-900/80 hover:bg-purple-600 text-white p-3 rounded-full border border-neutral-700 hover:border-purple-500 transition-all duration-300 shadow-xl backdrop-blur-sm -mr-4 lg:-mr-12 group">
                         <BiChevronRight className="text-3xl group-hover:scale-110 transition-transform" />
                    </button>
                </div>
                 <div className="swiper-pagination-custom flex justify-center mt-6"></div>
            </div>
        </section>
    );
};
