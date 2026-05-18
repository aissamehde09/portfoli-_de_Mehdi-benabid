import { motion } from "framer-motion";

export function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 ${className}`}
      initial={false}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ kicker, title, children }) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-neon">
        <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
        {kicker}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-ivory sm:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{children}</p>}
    </div>
    
  );
}
