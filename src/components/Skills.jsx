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
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className={`premium-card rounded-3xl p-5 ${groupIndex === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, borderColor: "rgba(59,130,246,0.4)" }}
            >
              <div className="mb-5 flex items-center gap-3">
                <motion.span
                  className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric/20 to-neon/10 text-neon shadow-[inset_0_0_0_1px_rgba(59,130,246,0.2)]"
                  whileHover={{ rotate: -8, scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={group.icon} className="h-4.5 w-4.5" />
                </motion.span>
                <h3 className="font-bold text-ivory">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">{skill.name}</span>
                      <motion.span
                        className="font-mono text-neon-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.08 + skillIndex * 0.06 + 0.4 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                      <motion.div
                        className="shimmer-bar h-full rounded-full bg-gradient-to-r from-neon-dim via-electric to-neon shadow-[0_0_12px_rgba(59,130,246,0.55)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: [0.22, 1, 0.36, 1],
                          delay: groupIndex * 0.08 + skillIndex * 0.06,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5">
          {/* Favorite tools */}
          <motion.div
            className="premium-card rounded-3xl p-5"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="mb-5 font-bold text-ivory">Outils favoris</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {toolCards.map((tool, idx) => (
                <motion.div
                  key={tool.label}
                  className="group flex min-h-[108px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.08] bg-[#071121]/70 p-4 text-center transition"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4, backgroundColor: "rgba(37, 99, 235, 0.12)", borderColor: "rgba(59,130,246,0.38)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white transition duration-300 group-hover:scale-105 group-hover:shadow-glow-sm">
                    {tool.image ? (
                      <img src={tool.image} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
                    ) : (
                      <FontAwesomeIcon icon={tool.icon} className="h-5 w-5 text-[#0f172a]" />
                    )}
                  </span>
                  <p className="text-center text-xs font-semibold leading-none text-slate-300">
                    {tool.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            className="premium-card rounded-3xl p-5"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="mb-5 font-bold text-ivory">Soft skills</h3>
            <div className="space-y-3">
              {softSkills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-3 text-sm text-slate-300"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4 shrink-0 text-neon" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
