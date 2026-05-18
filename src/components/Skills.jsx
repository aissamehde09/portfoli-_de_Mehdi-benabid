import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { skillGroups, softSkills, toolCards } from "../data/portfolio";
import { Section, SectionHeading } from "./Section";

export function Skills() {
  return (
    <Section id="competences">
      <SectionHeading kicker="Compétences" title="Une stack solide pour créer des interfaces rapides.">
        Des compétences orientées projet, avec une progression continue sur les
        outils de développement modernes.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            return (
              <motion.div
                key={group.title}
                className={`premium-card rounded-3xl p-5 ${groupIndex === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                initial={{ opacity: 0.9, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
                whileHover={{ y: -5, borderColor: "rgba(59,130,246,0.38)" }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <motion.span
                    className="grid h-10 w-10 place-items-center rounded-xl bg-neon/10 text-neon shadow-[inset_0_0_0_1px_rgba(59,130,246,0.16)]"
                    whileHover={{ rotate: -6, scale: 1.08 }}
                  >
                    <FontAwesomeIcon icon={group.icon} className="h-5 w-5" />
                  </motion.span>
                  <h3 className="font-bold text-ivory">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-blue-100">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-electric to-neon shadow-[0_0_18px_rgba(59,130,246,0.65)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-5">
          <motion.div
            className="premium-card rounded-3xl p-5"
            initial={{ opacity: 0.9, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 font-bold text-ivory">Outils favoris</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {toolCards.map((tool) => (
                <motion.div
                  key={tool.label}
                  className="group flex min-h-[112px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#071121]/70 p-4 text-center transition"
                  whileHover={{ y: -4, backgroundColor: "rgba(37, 99, 235, 0.14)", borderColor: "rgba(59,130,246,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white text-[#071121] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_26px_rgba(59,130,246,0.25)]">
                    {tool.image ? (
                      <img src={tool.image} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
                    ) : (
                      <FontAwesomeIcon icon={tool.icon} className="h-6 w-6" />
                    )}
                  </span>
                  <p className="text-center text-xs font-semibold leading-none text-slate-300">
                    {tool.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="premium-card rounded-3xl p-5"
            initial={{ opacity: 0.9, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-5 font-bold text-ivory">Soft skills</h3>
            <div className="space-y-3">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-sm text-slate-300">
                  <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4 text-neon" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
