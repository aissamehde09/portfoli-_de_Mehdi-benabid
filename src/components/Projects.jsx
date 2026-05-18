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
      <SectionHeading kicker="Projets récents" title="Ce que j’ai construit">
        Deux projets qui m’ont permis de pratiquer le front, le back, la base de
        données et le déploiement.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="premium-card group rounded-3xl p-4"
            initial={{ opacity: 0.9, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -8, rotateX: 1.2, rotateY: index % 2 === 0 ? -1.2 : 1.2, borderColor: "rgba(59,130,246,0.42)" }}
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-neon/20 blur-3xl" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#050816]/45">
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.045 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectPreview type={project.type} />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/30 via-transparent to-white/[0.025] opacity-60" />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir ${project.title}`}
                className="focus-premium absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-[#050816]/70 text-white backdrop-blur-md transition hover:border-neon/45 hover:text-neon hover:shadow-[0_0_24px_rgba(59,130,246,0.28)]"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
              </a>
            </div>
            <div className="relative p-3">
              <h3 className="mt-3 text-xl font-bold text-ivory">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-xs font-semibold text-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="focus-premium rounded-lg inline-flex items-center gap-2 text-sm font-semibold text-neon transition hover:text-white">
                  Voir projet <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="focus-premium rounded-lg inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
                  GitHub <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
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
        whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.65)" }}
      >
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-neon/15 text-neon">
            <FontAwesomeIcon icon={faRocket} className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-bold text-ivory">Un projet en tête ?</h3>
            <p className="mt-1 text-sm text-slate-400">Je suis ouvert aux collaborations et nouvelles idées.</p>
          </div>
        </div>
        <a href="#contact" className="focus-premium shine-link inline-flex h-11 items-center justify-center rounded-xl border border-neon/40 px-5 text-sm font-bold text-ivory transition hover:bg-neon/15">
          Me contacter
        </a>
      </motion.div>
    </Section>
  );
}
