import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navItems } from "../data/portfolio";

export function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#accueil");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);
      const current = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 140);

      if (current) setActive(`#${current.id}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);
  const themeIcon = theme === "dark" ? faSun : faMoon;
  const themeLabel = theme === "dark" ? "Activer le mode jour" : "Activer le mode nuit";

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#050816]/78 shadow-[0_18px_80px_rgba(2,6,23,0.42)] backdrop-blur-2xl"
          : "border-white/5 bg-[#050816]/25 backdrop-blur-xl"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <motion.a
          href="#accueil"
          className="focus-premium group flex items-center gap-3 rounded-xl"
          onClick={close}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src="/mb-logo.svg"
            alt="Logo MB"
            className="h-9 w-9 rounded-lg object-contain drop-shadow-[0_0_22px_rgba(59,130,246,0.38)] transition duration-300 group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.75)]"
          />
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-ivory transition group-hover:text-white">
            Mehdi Benabid
          </span>
        </motion.a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-premium relative rounded-xl px-3.5 py-2 text-xs font-semibold transition duration-300 ${
                active === item.href
                  ? "bg-neon/10 text-neon shadow-[inset_0_0_0_1px_rgba(59,130,246,0.14)]"
                  : "text-slate-300 hover:bg-white/[0.045] hover:text-white hover:shadow-[0_0_28px_rgba(37,99,235,0.12)]"
              }`}
            >
              {item.label}
              {active === item.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-x-5 -bottom-2 h-px bg-neon shadow-[0_0_18px_rgba(59,130,246,0.95)]"
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={onToggleTheme}
            className="focus-premium grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.045] text-slate-300 transition hover:border-neon/50 hover:bg-neon/10 hover:text-neon"
          >
            <FontAwesomeIcon icon={themeIcon} className="h-4 w-4" />
          </button>
          <a
            href="/cv-mehdi-benabid.pdf"
            download
            className="focus-premium shine-link inline-flex h-9 items-center gap-2 rounded-xl border border-electric/50 bg-electric/10 px-3 text-xs font-semibold text-neon transition hover:bg-electric/20 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]"
          >
            <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
            Télécharger CV
          </a>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="focus-premium grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-ivory md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-white/10 bg-[#050816]/95 px-5 py-4 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                    active === item.href
                      ? "bg-electric/15 text-neon"
                      : "text-slate-300 hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/cv-mehdi-benabid.pdf"
                download
                onClick={close}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-electric/50 bg-electric/10 px-4 py-3 text-sm font-semibold text-neon"
              >
                <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                Télécharger CV
              </a>
              <button
                type="button"
                onClick={onToggleTheme}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-neon/50 hover:text-neon"
              >
                <FontAwesomeIcon icon={themeIcon} className="h-4 w-4" />
                {theme === "dark" ? "Mode jour" : "Mode nuit"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
