import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "../data/portfolio";
import { Section, SectionHeading } from "./Section";

function ProjectPreview({ type }) {
  if (type === "artisan") {
    return (
      <img
        src="/project-artisan.svg"
        alt="Capture du projet Trouve Ton Artisan"
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
    );
  }

  return (
    <img
      src="/project-todo.svg"
      alt="Capture du projet To-Do List App"
      className="h-full w-full object-cover object-top"
      loading="lazy"
    />
  );
}

export function Projects() {
  return (
    <Section id="projets" className="pt-24">
      <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
      <SectionHeading kicker="Projets récents" title="Ce que j'ai construit">
        Deux projets qui m'ont permis de pratiquer le front, le back, la base de
        données et le déploiement.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="premium-card group rounded-3xl p-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotateX: 1.2, rotateY: index % 2 === 0 ? -1.2 : 1.2 }}
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-neon/20 blur-3xl" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#050816]/45">
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectPreview type={project.type} />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/40 via-transparent to-transparent" />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir ${project.title}`}
                className="focus-premium absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-[#050816]/70 text-white backdrop-blur-md transition hover:border-neon/55 hover:bg-neon/20 hover:text-neon hover:shadow-glow-sm"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="relative p-3">
              <h3 className="mt-3 text-xl font-bold text-ivory">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neon/25 bg-gradient-to-r from-neon/15 to-electric/10 px-3 py-1 text-xs font-semibold text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-premium inline-flex items-center gap-2 rounded-lg text-sm font-bold text-neon transition hover:text-white"
                >
                  Voir projet
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" />
                </a>
                <span className="h-4 w-px bg-white/15" />
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-premium inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-slate-400 transition hover:text-white"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="premium-card mt-8 flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.55)" }}
      >
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-electric/25 to-neon/10 text-neon shadow-glow-sm">
            <FontAwesomeIcon icon={faRocket} className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-bold text-ivory">Un projet en tête ?</h3>
            <p className="mt-0.5 text-sm text-slate-400">Je suis ouvert aux collaborations et nouvelles idées.</p>
          </div>
        </div>
        <a
          href="#contact"
          className="focus-premium shine-link inline-flex h-11 items-center justify-center rounded-xl border border-neon/40 bg-neon/[0.07] px-6 text-sm font-bold text-ivory transition hover:bg-neon/15 hover:border-neon/65"
        >
          Me contacter
        </a>
      </motion.div>
    </Section>
  );
}
