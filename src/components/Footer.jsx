import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { navItems } from "../data/portfolio";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040814] px-5 py-16 sm:px-8 lg:px-10">
      {/* Decorative top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-6">
          <a href="#accueil" className="group inline-flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-neon/20 blur-lg transition duration-300 group-hover:bg-neon/40" />
              <img src="/mb-logo.svg" alt="Logo MB" className="relative h-12 w-12 rounded-xl object-contain shadow-glow-sm" />
            </div>
            <span className="text-base font-black uppercase tracking-[0.2em] text-ivory">
              Mehdi Benabid
            </span>
          </a>
          <p className="max-w-md text-sm leading-8 text-slate-400">
            Développeur web junior passionné par les interfaces modernes. 
            Je construis des expériences fluides et accessibles en utilisant 
            les meilleures technologies actuelles.
          </p>
          <div className="flex gap-4">
            {[
              { href: "https://github.com/aissamehde09", icon: faGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/mehdi-benabid", icon: faLinkedinIn, label: "LinkedIn" },
              { href: "mailto:benabid.mehdi2009@gmail.com", icon: faEnvelope, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-neon/50 hover:bg-neon/10 hover:text-neon hover:shadow-glow-sm"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-ivory">
            Navigation
          </h2>
          <nav className="mt-8 grid gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit text-sm font-medium text-slate-400 transition hover:translate-x-1 hover:text-neon"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-ivory">
            Contact Direct
          </h2>
          <div className="mt-8 grid gap-5 text-sm text-slate-400">
            <a 
              href="mailto:benabid.mehdi2009@gmail.com" 
              className="group flex items-center gap-3 transition hover:text-neon"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-neon group-hover:bg-neon/10 transition">
                <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5" />
              </span>
              benabid.mehdi2009@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-neon">
                <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5" />
              </span>
              Nanterre, France
            </div>
          </div>
          
          <motion.a
            href="#accueil"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 transition hover:border-neon/50 hover:bg-neon/10 hover:text-neon hover:shadow-glow-sm"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            Retour en haut
            <FontAwesomeIcon icon={faArrowUp} className="h-3 w-3" />
          </motion.a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mehdi Benabid. Tous droits réservés.</p>
        <p className="flex items-center gap-2">
          Propulsé par <span className="text-neon-light">React</span> & <span className="text-neon-light">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
