import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });

  return (
    <section
      id={t("experience.id")}
      className="border-b border-neutral-900 pb-24"
    >
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-16 text-center text-4xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
      >
        {t("experience.title")}
      </motion.h2>

      {/* Desktop timeline container */}
      <div className="relative mx-auto max-w-5xl px-4">
        {/* Timeline line – desktop only */}
        <div className="hidden md:block absolute left-12 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-transparent" />

        <div className="flex flex-col gap-16">
          {items.map((exp, index) => {
            const isCurrent = ["actual", "present", "atual"].some(keyword => exp.year.toLowerCase().includes(keyword));

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex group"
              >
                {/* Timeline dot – desktop only */}
                <div
                    className={`hidden md:flex absolute left-8 top-12 -translate-x-1/2 z-10 items-center justify-center transition-all duration-500 ${
                        isCurrent ? "scale-110" : "group-hover:scale-110"
                    }`}
                >
                    <div className={`w-4 h-4 rounded-full ${isCurrent ? "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" : "bg-neutral-800 border-2 border-purple-500/50 group-hover:border-purple-500 group-hover:bg-purple-500"}`} />
                </div>


                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 10px 30px -10px rgba(168, 85, 247, 0.2)",
                  }}
                  className={`w-full rounded-2xl bg-neutral-900/50 backdrop-blur-sm p-8 md:ml-20 border transition-all duration-300 ${
                    isCurrent
                      ? "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                      : "border-neutral-800 hover:border-purple-500/30 hover:bg-neutral-900/80"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                      {/* Role & Company */}
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {exp.role}
                        </h3>
                        {exp.company && (
                            <p className="text-lg text-purple-300/80 font-medium mt-1">{exp.company}</p>
                        )}
                      </div>

                      {/* Year Badge */}
                      <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap ${
                          isCurrent 
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
                          : "bg-neutral-800 text-gray-400 border border-neutral-700 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-colors"
                      }`}>
                        {exp.year}
                      </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 font-light text-base text-justify">
                    {exp.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2.5">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-800/80 text-gray-300 border border-neutral-700/50 transition-colors duration-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/10 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
