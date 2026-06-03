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
    <div className="mb-12 max-w-2xl">
      <motion.div
        className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-neon"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
        {kicker}
      </motion.div>
      <motion.h2
        className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.06 }}
      >
        {title}
      </motion.h2>
      {/* Gradient divider */}
      <motion.div
        className="section-divider"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.55, delay: 0.18 }}
      />
      {children && (
        <motion.p
          className="mt-4 text-sm leading-7 text-slate-400 sm:text-base"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          {children}
        </motion.p>
      )}
    </div>
  );
}
