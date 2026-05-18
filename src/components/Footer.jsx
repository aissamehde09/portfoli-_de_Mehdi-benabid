import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { navItems } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040814] px-5 py-12 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/70 to-transparent" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.8fr_0.8fr]">
        <div>
          <a href="#accueil" className="inline-flex items-center gap-3">
            <img src="/mb-logo.svg" alt="Logo MB" className="h-12 w-12 object-contain" />
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-ivory">
              Mehdi Benabid
            </span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Développeur web junior. Je construis des interfaces claires,
            responsive et faciles à utiliser, avec l’envie de progresser sur de
            vrais projets.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://github.com/aissamehde09"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-neon/50 hover:text-neon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/mehdi-benabid"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-neon/50 hover:text-neon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="mailto:benabid.mehdi2009@gmail.com"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-neon/50 hover:text-neon"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ivory">
            Navigation
          </h2>
          <nav className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition hover:text-neon"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ivory">
            Contact
          </h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            <a href="mailto:benabid.mehdi2009@gmail.com" className="transition hover:text-neon">
              benabid.mehdi2009@gmail.com
            </a>
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-neon" />
              Nanterre, France
            </span>
          </div>
          <a
            href="#accueil"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-neon/50 hover:text-neon"
          >
            Retour en haut
            <FontAwesomeIcon icon={faArrowUp} className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mehdi Benabid. Tous droits réservés.</p>
        <p>Portfolio développé avec React, Vite et Tailwind CSS.</p>
      </div>
    </footer>
  );
}
