import { BiLogoPostgresql, BiLogoHtml5 } from "react-icons/bi";
import {
    FaCss3Alt,
    FaJava,
    FaNodeJs,
    FaReact,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaPython,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiSpringboot,
    SiC,
    SiMysql,
    SiJest,
    SiPostman,
    SiDjango,
    SiNextdotjs,
    SiLinux,
    SiBootstrap,
    SiTailwindcss,
    SiJunit5,
    SiHaskell,
    SiArduino,
    SiFlask,
    SiNestjs,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconVariants = (duration, index) => ({
    initial: { y: 0 },
    animate: {
        y: [15, -15, 10, -10],
        transition: {
            duration: duration,
            delay: index * 0.1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

export const Tecnologies = () => {
    const { t } = useTranslation();

    const technologies = [
        { icon: SiJavascript, color: "text-yellow-500" },
        { icon: SiTypescript, color: "text-blue-500" },
        { icon: FaReact, color: "text-cyan-400" },
        { icon: SiNextdotjs, color: "text-white" },
        { icon: BiLogoHtml5, color: "text-orange-500" },
        { icon: FaCss3Alt, color: "text-blue-600" },
        { icon: SiBootstrap, color: "text-purple-600" },
        { icon: SiTailwindcss, color: "text-cyan-400" },
        { icon: FaNodeJs, color: "text-green-400" },
        { icon: FaJava, color: "text-red-500" },
        { icon: SiSpringboot, color: "text-green-600" },
        { icon: SiC, color: "text-blue-400" },
        { icon: SiMysql, color: "text-blue-500" },
        { icon: BiLogoPostgresql, color: "text-sky-700" },
        { icon: FaDocker, color: "text-blue-500" },
        { icon: SiLinux, color: "text-yellow-400" },
        { icon: FaGitAlt, color: "text-orange-600" },
        { icon: FaGithub, color: "text-white" },
        { icon: SiJest, color: "text-red-500" },
        { icon: SiJunit5, color: "text-green-500" },
        { icon: SiPostman, color: "text-orange-500" },
        { icon: SiHaskell, color: "text-purple-600" },
        { icon: SiArduino, color: "text-blue-500" },
    ];

    const learning = [
        { icon: FaPython, color: "text-yellow-500" },
        { icon: SiDjango, color: "text-green-600" },
        { icon: SiFlask, color: "text-gray-600" },
        { icon: SiNestjs, color: "text-red-500" },
    ];

    const handleClick = async (controls) => {
        await controls.start({ rotate: 1080, transition: { duration: 0.8 } });
        controls.set({ rotate: 0 });
    };

    return (
        <section id={t("technologies.id")} className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="my-10 text-center text-4xl font-bold text-gray-200"
            >
                {t("technologies.title")}
            </motion.h2>

            <h3 className="text-center text-2xl font-semibold text-gray-300 mb-2">
                {t("technologies.using")}
            </h3>
            <p className="text-center text-md text-gray-400 mb-6">
                {t("technologies.tapToRotate")}
            </p>
            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {technologies.map(({ icon: Icon, color }, index) => {
                    const controls = useAnimation();
                    return (
                        <motion.div
                            key={index}
                            variants={iconVariants(3, index)}
                            initial="initial"
                            animate="animate"
                            whileHover={{ scale: 1.2 }}
                            onClick={() => handleClick(controls)}
                            className="rounded-xl border-4 border-neutral-800 p-4 shadow-lg transition-transform cursor-pointer"
                        >
                            <motion.div animate={controls}>
                                <Icon className={`text-6xl sm:text-7xl mx-auto ${color}`} />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>

            <h3 className="text-center text-2xl font-semibold text-gray-300 mt-10 mb-6">
                {t("technologies.learningShort")}
            </h3>
            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {learning.map(({ icon: Icon, color }, index) => {
                    const controls = useAnimation();
                    return (
                        <motion.div
                            key={index}
                            variants={iconVariants(3, index)}
                            initial="initial"
                            animate="animate"
                            whileHover={{ scale: 1.2 }}
                            onClick={() => handleClick(controls)}
                            className="rounded-xl border-4 border-neutral-800 p-4 shadow-lg transition-transform cursor-pointer"
                        >
                            <motion.div animate={controls}>
                                <Icon className={`text-6xl sm:text-7xl mx-auto ${color}`} />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};
