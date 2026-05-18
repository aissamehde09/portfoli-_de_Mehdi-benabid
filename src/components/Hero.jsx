import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faComment,
  faDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const particles = Array.from({ length: 7 }, (_, index) => ({
  id: index,
  left: `${12 + ((index * 23) % 76)}%`,
  top: `${18 + ((index * 31) % 58)}%`,
  delay: index * 0.18,
}));

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 pt-20">
      <img
        src="/hero-code-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[58%_50%]"
      />
      <div className="absolute inset-0 bg-[#020617]/18" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.86)_33%,rgba(2,6,23,0.20)_67%,rgba(2,6,23,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(37,99,235,0.20),transparent_28%),radial-gradient(circle_at_76%_58%,rgba(37,99,235,0.08),transparent_30%)]" />
      <motion.div
        className="absolute left-[8%] top-[28%] h-72 w-72 rounded-full bg-neon/[0.13] blur-3xl"
        animate={{ x: [0, 34, 0], y: [0, -18, 0], opacity: [0.38, 0.68, 0.38] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-neon shadow-[0_0_16px_rgba(59,130,246,0.95)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: particle.delay }}
        />
      ))}

      <div className="relative mx-auto flex min-h-[calc(100dvh-5rem)] max-w-7xl flex-col justify-center px-5 pb-20 sm:px-8 lg:px-10">
        <div className="flex min-h-[calc(100dvh-7rem)] items-center">
          <motion.div
            className="z-10 max-w-2xl pb-10"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-neon">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-neon/10 text-neon">
                <FontAwesomeIcon icon={faCode} className="h-4 w-4" />
              </span>
              Développeur web junior
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.13] tracking-tight text-ivory sm:text-6xl lg:text-[4.65rem]">
              Je crée des expériences web{" "}
              <span className="font-extrabold text-electric drop-shadow-[0_0_22px_rgba(37,99,235,0.48)]">
                modernes
              </span>
              .
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-slate-300">
              Je développe des applications web modernes et performantes avec
              des technologies récentes.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#projets"
                className="focus-premium shine-link inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-electric bg-electric px-7 text-base font-semibold text-white shadow-glow transition hover:bg-neon"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
              >
                Voir mes projets
                <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#contact"
                className="focus-premium shine-link inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-neon/60 bg-white/[0.035] px-7 text-base font-semibold text-ivory transition hover:bg-neon/10 hover:shadow-[0_0_34px_rgba(37,99,235,0.18)]"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
              >
                Me contacter
                <FontAwesomeIcon icon={faComment} className="h-5 w-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="/cv-mehdi-benabid.pdf"
                download
                className="focus-premium shine-link inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-neon/60 bg-white/[0.035] px-7 text-base font-semibold text-ivory transition hover:bg-neon/10 hover:shadow-[0_0_34px_rgba(37,99,235,0.18)]"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faDownload} className="h-5 w-5" aria-hidden="true" />
                Télécharger CV
              </motion.a>
            </div>

            <div className="mt-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                Retrouvez-moi sur
              </p>
              <div className="flex items-center gap-6 text-slate-300">
              <motion.a href="https://github.com/aissamehde09" target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-premium rounded-full transition hover:text-neon" whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.055] backdrop-blur-md transition hover:border-neon/50 hover:shadow-[0_0_26px_rgba(59,130,246,0.24)]">
                  <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                </span>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/mehdi-benabid" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-premium rounded-full transition hover:text-neon" whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.055] backdrop-blur-md transition hover:border-neon/50 hover:shadow-[0_0_26px_rgba(59,130,246,0.24)]">
                  <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
                </span>
              </motion.a>
              <motion.a href="mailto:benabid.mehdi2009@gmail.com" aria-label="Email" className="focus-premium rounded-full transition hover:text-neon" whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.055] backdrop-blur-md transition hover:border-neon/50 hover:shadow-[0_0_26px_rgba(59,130,246,0.24)]">
                  <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
                </span>
              </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
