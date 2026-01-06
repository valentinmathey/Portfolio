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
  SiMysql,
  SiJest,
  SiPostman,
  SiDjango,
  SiNextdotjs,
  SiLinux,
  SiBootstrap,
  SiTailwindcss,
  SiJunit5,
  SiArduino,
  SiFlask,
  SiNestjs,
  SiOracle,
  SiSupabase,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGithubactions,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const iconFloatingVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [5, -5, 5],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechGroup = ({ title, items }) => (
  <motion.div 
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="mb-8 w-full max-w-5xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 backdrop-blur-sm"
  >
    <h4 className="w-full text-center text-xl font-semibold text-gray-400 mb-6">
      {title}
    </h4>
    <div className="flex flex-wrap items-center justify-center gap-6">
      {items.map(({ icon: Icon, color, name }, index) => {
        const controls = useAnimation();
        // Generate a random duration between 2 and 4 seconds for organic feel
        const duration = Math.random() * 2 + 2; 
        
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative flex flex-col items-center"
          >
             {/* Tooltip */}
             <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-800 px-2 py-1 text-sm text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-neutral-700 shadow-lg z-20">
              {name}
              <div className="absolute top-full left-1/2 -ml-1 border-4 border-transparent border-t-neutral-700"></div>
            </span>

            <motion.div
              variants={iconFloatingVariants(duration)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.15 }}
              onClick={() =>
                controls
                  .start({ rotate: 360, transition: { duration: 0.6 } })
                  .then(() => controls.set({ rotate: 0 }))
              }
              className="rounded-xl border-4 border-neutral-800 p-4 shadow-lg cursor-pointer bg-neutral-900/50"
            >
              <motion.div animate={controls}>
                <Icon className={`text-6xl sm:text-7xl mx-auto ${color}`} />
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

export const Tecnologies = () => {
  const { t } = useTranslation();

  const technologies = {
    frontend: [
      { icon: SiJavascript, color: "text-yellow-500", name: "JavaScript" },
      { icon: FaReact, color: "text-cyan-400", name: "React" },
      { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
      { icon: BiLogoHtml5, color: "text-orange-500", name: "HTML5" },
      { icon: FaCss3Alt, color: "text-blue-600", name: "CSS3" },
      { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind CSS" },
      { icon: SiBootstrap, color: "text-purple-600", name: "Bootstrap" },
    ],
    backend: [
      { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
      { icon: FaNodeJs, color: "text-green-400", name: "Node.js" },
      { icon: SiNestjs, color: "text-red-500", name: "NestJS" },
      { icon: FaJava, color: "text-red-500", name: "Java" },
      { icon: SiSpringboot, color: "text-green-600", name: "Spring Boot" },
    ],
    databases: [
      { icon: BiLogoPostgresql, color: "text-sky-700", name: "PostgreSQL" },
      { icon: SiMysql, color: "text-blue-500", name: "MySQL" },
      { icon: SiOracle, color: "text-red-600", name: "Oracle" },
      { icon: SiSupabase, color: "text-emerald-500", name: "Supabase" },
    ],
    infrastructure: [
      { icon: FaDocker, color: "text-blue-500", name: "Docker" },
      { icon: SiLinux, color: "text-yellow-400", name: "Linux" },
      { icon: SiAmazonwebservices, color: "text-orange-500", name: "AWS" },
      { icon: SiGooglecloud, color: "text-blue-400", name: "Google Cloud" },
      { icon: SiGithubactions, color: "text-white", name: "GitHub Actions" },
    ],
    tools: [
      { icon: FaGitAlt, color: "text-orange-600", name: "Git" },
      { icon: FaGithub, color: "text-white", name: "GitHub" },
      { icon: SiPostman, color: "text-orange-500", name: "Postman" },
      { icon: SiJest, color: "text-red-500", name: "Jest" },
      { icon: SiJunit5, color: "text-green-500", name: "JUnit 5" },
      { icon: SiArduino, color: "text-blue-500", name: "Arduino" },
    ],
  };

  const learning = [
    { icon: FaPython, color: "text-yellow-500", name: "Python" },
    { icon: SiDjango, color: "text-green-600", name: "Django" },
    { icon: SiFlask, color: "text-gray-500", name: "Flask" },
  ];

  return (
    <section
      id={t("technologies.id")}
      className="border-b border-neutral-800 pb-24 px-4"
    >
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
      <p className="text-center text-md text-gray-400 mb-10">
        {t("technologies.tapToRotate")}
      </p>

      <TechGroup title="Frontend" items={technologies.frontend} />
      <TechGroup title="Backend" items={technologies.backend} />
      <TechGroup title="Databases" items={technologies.databases} />
      <TechGroup title="Infrastructure" items={technologies.infrastructure} />
      <TechGroup title="Tools" items={technologies.tools} />

      <h3 className="text-center text-2xl font-semibold text-gray-300 mt-16 mb-6">
        {t("technologies.learningShort")}
      </h3>

      {/* Reusing TechGroup logic for Learning section but manually or via TechGroup if I want consistency */}
      {/* Since learning is just a simple list, let's just use TechGroup component for it too to get the styling! */}
      <TechGroup title="" items={learning} />
      
    </section>
  );
};
