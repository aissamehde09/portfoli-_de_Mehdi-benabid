import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faRocket, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { Section } from "./Section";

const aboutCards = [
  {
    title: "Développement moderne",
    text: "J’utilise des technologies récentes pour créer des applications rapides, responsive et modernes.",
    icon: faCode,
  },
  {
    title: "Apprentissage continu",
    text: "Je développe régulièrement de nouveaux projets afin de progresser et découvrir de nouvelles technologies.",
    icon: faWandMagicSparkles,
  },
  {
    title: "Projets concrets",
    text: "J’apprends principalement à travers la pratique et la création d’applications réelles.",
    icon: faRocket,
  },
];

const stats = [
  { value: "2+", label: "projets réalisés" },
  { value: "React", label: "Node.js / MongoDB" },
  { value: "100%", label: "projets déployés" },
  { value: "∞", label: "motivation" },
];

const particles = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  left: `${12 + ((index * 29) % 76)}%`,
  top: `${10 + ((index * 23) % 72)}%`,
  delay: index * 0.2,
}));

export function About() {
  return (
    <Section id="apropos" className="py-24">
      <div className="absolute -left-24 top-32 h-80 w-80 rounded-full bg-electric/10 blur-3xl" />
      <div className="absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-neon/10 blur-3xl" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-neon">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
            À propos de moi
          </div>
          <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-ivory sm:text-4xl lg:text-5xl">
            Passionné par le développement web et la création d’applications modernes
          </h2>

          <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-slate-300">
            <p>
              Je suis Mehdi Benabid, développeur web junior en préparation d’une
              formation DWWM.
            </p>
            <p>
              J’aime créer des applications modernes, apprendre de nouvelles
              technologies et améliorer mes compétences à travers des projets
              concrets.
            </p>
            <p>
              Je travaille principalement avec React, Node.js et MongoDB pour
              développer des interfaces modernes et des applications web
              performantes.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {aboutCards.map((card, index) => (
              <motion.article
                key={card.title}
                className="premium-card group grid gap-4 rounded-2xl p-5 transition hover:border-neon/45 hover:bg-neon/[0.075] sm:grid-cols-[3.25rem_1fr]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                whileHover={{ x: 4 }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-neon/25 bg-electric/10 text-neon shadow-[0_0_24px_rgba(37,99,235,0.18)]">
                  <FontAwesomeIcon icon={card.icon} className="h-5 w-5" />
                </span>
                <span>
                  <h3 className="font-bold text-ivory">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.text}</p>
                </span>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[470px]"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/25 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.72, 0.45] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-8 rounded-full border border-neon/15" />
          <div className="absolute inset-0 bg-radial-grid bg-[length:28px_28px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute h-1 w-1 rounded-full bg-neon shadow-[0_0_14px_rgba(59,130,246,0.95)]"
              style={{ left: particle.left, top: particle.top }}
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.35, 0.8] }}
              transition={{ duration: 3.1, repeat: Infinity, delay: particle.delay }}
            />
          ))}

          <motion.div
            className="premium-card relative rounded-[1.8rem] p-3 shadow-glow"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/mehdi-photo.jpeg"
              alt="Portrait professionnel de Mehdi Benabid"
              className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-[50%_28%]"
            />
            <div className="pointer-events-none absolute inset-3 rounded-[1.35rem] bg-[linear-gradient(to_top,rgba(5,8,22,0.22),transparent_34%)]" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="premium-card mt-12 grid rounded-3xl sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="border-b border-white/10 px-6 py-7 text-center transition hover:bg-neon/[0.07] sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            whileHover={{ y: -3 }}
          >
            <p className="text-3xl font-black tabular-nums text-ivory">{stat.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
