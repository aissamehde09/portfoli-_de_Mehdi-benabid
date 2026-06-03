import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(37,99,235,0.22),transparent_28%),radial-gradient(circle_at_76%_58%,rgba(37,99,235,0.10),transparent_30%)]" />
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
            {/* Badge */}
            <motion.p
              className="mb-7 flex w-fit items-center gap-3 rounded-full border border-neon/20 bg-neon/[0.08] px-4 py-2 text-sm font-semibold text-neon backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55 }}
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-neon/20 text-neon">
                <FontAwesomeIcon icon={faCode} className="h-3 w-3" />
              </span>
              Développeur web junior
            </motion.p>

            {/* Heading */}
            <motion.h1
              className="max-w-3xl text-5xl font-extrabold leading-[1.1] tracking-tight text-ivory sm:text-6xl lg:text-[4.75rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Je crée des expériences web{" "}
              <span className="text-gradient font-black drop-shadow-[0_0_28px_rgba(59,130,246,0.45)]">
                modernes
              </span>
              .
            </motion.h1>

            {/* Divider line */}
            <motion.div
              className="mt-6 h-[2px] w-16 rounded-full bg-gradient-neon-h"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              style={{ transformOrigin: "left" }}
              transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              className="mt-5 max-w-xl text-lg leading-8 text-slate-300"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.65 }}
            >
              Je développe des applications web modernes et performantes avec
              des technologies récentes.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="mt-9 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
            >
              <motion.a
                href="#projets"
                className="focus-premium shine-link inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-electric bg-electric px-7 text-base font-bold text-white shadow-glow transition hover:bg-neon hover:shadow-glow-lg"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
              >
                Voir mes projets
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#contact"
                className="focus-premium shine-link inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-neon/50 bg-white/[0.04] px-7 text-base font-semibold text-ivory transition hover:border-neon/80 hover:bg-neon/10 hover:shadow-[0_0_34px_rgba(37,99,235,0.18)]"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
              >
                Me contacter
                <FontAwesomeIcon icon={faComment} className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="/CV_Mehdi_Benabid.pdf"
                download
                className="focus-premium shine-link inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.035] px-7 text-base font-semibold text-ivory transition hover:border-white/30 hover:bg-white/[0.07]"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
              >
                <FontAwesomeIcon icon={faDownload} className="h-4 w-4" aria-hidden="true" />
                Télécharger CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52, duration: 0.6 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Retrouvez-moi sur
              </p>
              <div className="flex items-center gap-4 text-slate-300">
                {[
                  { href: "https://github.com/aissamehde09", label: "GitHub", icon: faGithub },
                  { href: "https://www.linkedin.com/in/mehdi-benabid", label: "LinkedIn", icon: faLinkedinIn },
                  { href: "mailto:benabid.mehdi2009@gmail.com", label: "Email", icon: faEnvelope },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={social.label}
                    className="focus-premium group rounded-full transition"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.055] backdrop-blur-md transition duration-300 group-hover:border-neon/55 group-hover:bg-neon/10 group-hover:shadow-glow-sm group-hover:text-neon">
                      <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 backdrop-blur-md"
        >
          <FontAwesomeIcon icon={faChevronDown} className="h-3.5 w-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
