import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function GlowButton({
  href,
  children,
  icon: Icon,
  variant = "primary",
  download,
  type,
  className: customClassName = "",
}) {
  const styles =
    variant === "primary"
      ? "border-electric bg-electric text-white shadow-glow hover:bg-neon hover:shadow-glow-lg"
      : "border-white/12 bg-white/[0.04] text-ivory hover:border-neon/60 hover:bg-neon/10";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {Icon && <FontAwesomeIcon icon={Icon} className="relative z-10 h-4 w-4" aria-hidden="true" />}
      
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
    </>
  );

  const className = `focus-premium group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl border px-6 text-sm font-bold transition-all duration-300 ${styles} ${customClassName}`;

  if (type) {
    return (
      <motion.button
        type={type}
        className={className}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      download={download}
      className={className}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.a>
  );
}
