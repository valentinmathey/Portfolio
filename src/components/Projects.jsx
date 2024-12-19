import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMAGES } from "../constants";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
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
            <div className="relative w-full py-10">
                <Swiper
                    grabCursor={true}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1280: { slidesPerView: 4, spaceBetween: 25 },
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
                    className="mySwiper"
                >

                    {t("projects.items", { returnObjects: true }).map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 100 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 0px 10px rgb(236 72 153 / 0.4)"
                                }}
                                className="flex flex-col justify-between items-center h-[550px] w-[320px] bg-neutral-900/80 rounded-lg shadow-xl p-6 my-6 text-center mx-auto"
                            >
                                {/* Imagen */}
                                <div className="w-full mb-4">
                                    <img
                                        src={IMAGES.PROJECTS[project.imageIndex]}
                                        alt={project.title}
                                        className="w-full h-52 object-cover rounded-lg"
                                    />
                                </div>

                                {/* Título */}
                                <h3 className="text-lg font-semibold text-purple-500 mb-2">
                                    {project.title}
                                </h3>

                                {/* Descripción */}
                                <p className="text-white text-sm leading-tight h-20 overflow-hidden">
                                    {project.description}
                                </p>

                                {/* Tecnologías */}
                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-pink-800/20 px-3 py-1 text-xs text-pink-400 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Botones */}
                                <div className="flex justify-center gap-4 mt-auto">
                                    <motion.a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition duration-300"
                                    >
                                        <FaCode /> {t("projects.buttons.code")} {/* Botón dinámico */}
                                    </motion.a>

                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition duration-300"
                                    >
                                        <FaExternalLinkAlt /> {t("projects.buttons.demo")} {/* Botón dinámico */}
                                    </motion.a>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Custom Navigation Buttons */}
            <div className="flex justify-between items-center mt-4 px-4">
                <div className="swiper-button-prev-custom text-3xl cursor-pointer">
                    &larr;
                </div>
                <div className="swiper-pagination-custom flex justify-center align-middle"></div>
                <div className="swiper-button-next-custom text-3xl cursor-pointer">
                    &rarr;
                </div>
            </div>
        </section>
    );
};
