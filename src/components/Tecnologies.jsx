import { BiLogoPostgresql, BiLogoHtml5 } from "react-icons/bi";
import { FaCss3Alt, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiSpringboot, SiC, SiMysql } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

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
    const icons = [
        { icon: SiJavascript, color: "text-yellow-500" },
        { icon: SiTypescript, color: "text-blue-500" },
        { icon: FaReact, color: "text-cyan-400" },
        { icon: BiLogoHtml5, color: "text-orange-500" },
        { icon: FaCss3Alt, color: "text-blue-600" },
        { icon: FaNodeJs, color: "text-green-400" },
        { icon: FaJava, color: "text-red-500" },
        { icon: SiSpringboot, color: "text-green-600" },
        { icon: SiC, color: "text-blue-400" },
        { icon: SiMysql, color: "text-blue-500" },
        { icon: BiLogoPostgresql, color: "text-sky-700" },
    ];

    const handleClick = async (controls) => {
        await controls.start({ rotate: 1080, transition: { duration: 0.8 } });
        controls.set({ rotate: 0 });
    };

    return (
        <section id="tecnologias" className="border-b border-neutral-800 pb-24">
            {/* Título */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="my-10 text-center text-4xl font-bold text-gray-200"
            >
                Tecnologías
            </motion.h2>

            {/* Íconos */}
            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {icons.map(({ icon: Icon, color }, index) => {
                    const controls = useAnimation();

                    return (
                        <motion.div
                            key={index}
                            variants={iconVariants(3, index)}
                            initial="initial"
                            animate="animate"
                            whileHover={{
                                scale: 1.2,
                            }}
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
