import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faDownload,
  faEnvelope,
  faGlobe,
  faGraduationCap,
  faLanguage,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const contact = [
  { icon: faLocationDot, label: "Nanterre" },
  { icon: faEnvelope, label: "benabid.mehdi2009@gmail.com" },
  { icon: faPhone, label: "+33 6 25 10 00 94" },
  { icon: faGithub, label: "github.com/aissamehde09" },
];

const skills = [
  "HTML / CSS",
  "JavaScript",
  "Responsive Design",
  "React",
  "Node.js",
  "Python",
  "UX/UI Design",
  "Bases cybersécurité",
  "Git / GitHub",
  "Vercel / Railway",
];

const languages = ["Français", "Anglais technique"];

const projects = [
  {
    title: "To-Do List App",
    image: "/project-todo.svg",
    link: "https://to-do-list-vert-one.vercel.app/",
    points: [
      "Création et suppression de tâches",
      "Interface responsive",
      "Développement d’interfaces web interactives",
      "Déploiement avec Vercel",
    ],
  },
  {
    title: "Trouve Ton Artisan",
    image: "/project-artisan.svg",
    link: "https://trouve-ton-artisan-ab7z.vercel.app/",
    points: [
      "Frontend React",
      "Navigation SPA",
      "Interface responsive",
      "Intégration UI/UX d’applications web",
      "Déploiement Vercel",
    ],
  },
];

function ResumeSection({ icon, title, children }) {
  return (
    <section className="break-inside-avoid">
      <div className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2563EB] text-white shadow-[0_0_22px_rgba(37,99,235,0.28)]">
          <FontAwesomeIcon icon={icon} className="h-4 w-4" />
        </span>
        <h3 className="text-xl font-black uppercase tracking-tight text-[#0F172A]">
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
}

export function Resume() {
  const resumeRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  const exportGeneratedPdf = async () => {
    if (!resumeRef.current || isExporting) return;
    setIsExporting(true);

    const html2pdf = (await import("html2pdf.js")).default;
    await html2pdf()
      .set({
        margin: 0,
        filename: "CV_Mehdi_Benabid.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      })
      .from(resumeRef.current)
      .save();

    setIsExporting(false);
  };

  return (
    <section id="cv" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-electric/10 blur-3xl" />
      <div className="relative mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-neon">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
            CV développeur web
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ivory sm:text-4xl">
            CV moderne, prêt pour un stage développeur web junior.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Une version web lisible du CV, avec téléchargement direct du PDF et export automatique.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <motion.a
            href="/CV_Mehdi_Benabid.pdf"
            download="CV_Mehdi_Benabid.pdf"
            className="focus-premium shine-link inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-electric bg-electric px-5 text-sm font-bold text-white shadow-glow transition hover:bg-neon"
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
            Télécharger CV
          </motion.a>
          <motion.button
            type="button"
            onClick={exportGeneratedPdf}
            className="focus-premium shine-link inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-neon/40 bg-white/[0.045] px-5 text-sm font-bold text-ivory transition hover:bg-neon/10"
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
            {isExporting ? "Export..." : "Exporter PDF"}
          </motion.button>
        </div>
      </div>

      <motion.div
        className="relative overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-panel backdrop-blur-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65 }}
      >
        <article
          ref={resumeRef}
          className="resume-a4 mx-auto grid h-[1122px] w-[794px] grid-cols-[230px_1fr] overflow-hidden bg-white text-[#0F172A] shadow-2xl"
        >
          <aside className="bg-[radial-gradient(circle_at_30%_10%,rgba(37,99,235,0.28),transparent_35%),linear-gradient(180deg,#0F172A,#07111F)] px-6 py-8 text-[#F8FAFC]">
            <div className="text-center">
              <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-[#2563EB] bg-slate-200 shadow-[0_0_34px_rgba(37,99,235,0.45)]">
                <img
                  src="/mehdi-photo.jpeg"
                  alt="Portrait de Mehdi Benabid"
                  className="h-full w-full object-cover object-[50%_26%]"
                />
              </div>
              <h1 className="mt-5 text-[2rem] font-black leading-none tracking-tight">
                MEHDI
                <span className="block text-[#2563EB]">BENABID</span>
              </h1>
              <div className="mx-auto mt-4 h-px w-40 bg-slate-300/80" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.08em]">
                Développeur Web Junior
              </p>
              <div className="mx-auto mt-3 h-px w-40 bg-slate-300/80" />
            </div>

            <div className="mt-8 space-y-6 text-center">
              <div>
                <h2 className="resume-sidebar-title mb-4 inline-flex min-w-40 items-center justify-center gap-2 rounded-full border border-[#2563EB] px-4 py-2 text-sm font-black uppercase shadow-[0_0_18px_rgba(37,99,235,0.26)]">
                  <FontAwesomeIcon icon={faUser} className="text-[#60A5FA]" />
                  Contact
                </h2>
                <div className="mx-auto max-w-[190px] space-y-4 text-center text-[12px] leading-5 text-slate-200">
                  {contact.map((item) => (
                    <div key={item.label}>
                      <FontAwesomeIcon icon={item.icon} className="mb-1 h-4 w-4 text-[#60A5FA]" />
                      <span className="block break-all">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="resume-sidebar-title mb-4 inline-flex min-w-40 items-center justify-center gap-2 rounded-full border border-[#2563EB] px-4 py-2 text-sm font-black uppercase shadow-[0_0_18px_rgba(37,99,235,0.26)]">
                  <FontAwesomeIcon icon={faLanguage} className="text-[#60A5FA]" />
                  Langues
                </h2>
                <div className="space-y-3 text-center text-sm text-slate-200">
                  {languages.map((language) => (
                    <p key={language}>
                      {language}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="resume-sidebar-title mb-4 inline-flex min-w-40 items-center justify-center gap-2 rounded-full border border-[#2563EB] px-4 py-2 text-sm font-black uppercase shadow-[0_0_18px_rgba(37,99,235,0.26)]">
                  <FontAwesomeIcon icon={faGlobe} className="text-[#60A5FA]" />
                  Atouts
                </h2>
                <div className="space-y-3 text-center text-sm text-slate-200">
                  {["Développement web", "Technologies modernes", "UI/UX Design", "Intelligence Artificielle", "Cybersécurité", "Veille tech"].map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-5 px-7 py-7 text-[12px] leading-[1.42]">
            <ResumeSection icon={faUser} title="Profil">
              <p>
                Développeur web junior actuellement en formation RNCP Développeur Web au
                Centre Européen de Formation (CEF Learning).
              </p>
              <p className="mt-2">
                Je développe des projets web modernes afin de renforcer mes compétences en
                frontend, backend, UX/UI et algorithmique à travers des applications
                concrètes et des projets personnels déployés en ligne.
              </p>
            </ResumeSection>

            <ResumeSection icon={faGraduationCap} title="Formation">
              <h4 className="text-base font-black">Développeur Web - Titre RNCP (en cours)</h4>
              <p className="font-semibold text-[#2563EB]">Centre Européen de Formation - CEF Learning</p>
              <p className="text-slate-600">2025 - 2026</p>
              <div className="mt-3 grid gap-2 border-l border-slate-300 pl-4">
                <p><strong>Parcours validés :</strong> Développeur Web Junior, Développeur Web Avancé, Parcours Expert (en cours)</p>
                <p><strong>Modules complémentaires :</strong> Concepteur Développeur d’Applications, UX Design, Intelligence Artificielle, Cybersécurité</p>
                <p><strong>Formation complémentaire :</strong> Python & Algorithmique (présentiel)</p>
              </div>
            </ResumeSection>

            <ResumeSection icon={faCode} title="Compétences techniques">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-semibold">
                    {skill}
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection icon={faBriefcase} title="Projets réalisés">
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.title} className="grid grid-cols-[160px_1fr] gap-5 border-b border-slate-200 pb-4 last:border-b-0">
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                      <img src={project.image} alt={`Aperçu ${project.title}`} className="h-24 w-full object-cover object-top" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#2563EB]">{project.title}</h4>
                      <ul className="mt-1 list-disc pl-4">
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <a href={project.link} className="mt-2 inline-block break-all text-xs font-semibold text-[#2563EB]">
                        {project.link}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>
          </main>
        </article>
      </motion.div>
    </section>
  );
}
