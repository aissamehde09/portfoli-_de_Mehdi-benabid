import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function GlowButton({
  href,
  children,
  icon: Icon,
  variant = "primary",
  download,
  type,
}) {
  const styles =
    variant === "primary"
      ? "border-electric bg-electric text-white shadow-glow hover:bg-neon"
      : "border-white/12 bg-white/[0.04] text-ivory hover:border-neon/60 hover:bg-neon/10";

  const content = (
    <>
      <span>{children}</span>
      {Icon && <FontAwesomeIcon icon={Icon} className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  const className = `focus-premium shine-link group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl border px-5 text-sm font-semibold transition ${styles}`;

  if (type) {
    return (
      <motion.button
        type={type}
        className={className}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      download={download}
      className={className}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      {content}
    </motion.a>
  );
}
