import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { contactLinks } from "../data/portfolio";
import { GlowButton } from "./GlowButton";
import { Section, SectionHeading } from "./Section";

export function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/benabid.mehdi2009@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="pb-28">
      <div className="absolute bottom-8 left-0 h-80 w-80 rounded-full bg-neon/10 blur-3xl" />
      
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading kicker="Contact" title="Parlons de votre prochain projet.">
            Une question, un conseil, une opportunité ou un projet junior ?
            Écrivez-moi, je répondrai avec plaisir.
          </SectionHeading>

          <div className="mt-8 grid gap-3">
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="premium-card focus-premium group flex items-center gap-4 rounded-2xl p-4 transition hover:border-neon/50 hover:bg-neon/[0.08]"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric/15 to-neon/10 text-neon transition duration-300 group-hover:bg-neon group-hover:text-white group-hover:shadow-glow-sm">
                  <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-ivory">{item.value}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form
          className="premium-card relative rounded-3xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-electric/15 blur-3xl" />
          <div className="relative grid gap-6">
            <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Nom</span>
                <input className="form-field focus-premium" name="name" type="text" placeholder="Votre nom" required />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</span>
                <input className="form-field focus-premium" name="email" type="email" placeholder="Votre email" required />
              </label>
            </div>
            
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Sujet</span>
              <input className="form-field focus-premium" name="subject" type="text" placeholder="Sujet de votre message" required />
            </label>
            
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</span>
              <textarea className="form-field focus-premium min-h-40 resize-y" name="message" placeholder="Dites-moi tout..." required />
            </label>
            
            <div className="mt-2">
              <GlowButton type="submit" icon={faPaperPlane} className="w-full sm:w-auto">
                {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
              </GlowButton>
            </div>
            
            {status === "success" && (
              <motion.p 
                className="rounded-2xl border border-neon/30 bg-neon/10 px-4 py-3 text-sm font-bold text-neon-light backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                C'est envoyé ! Merci, je vous réponds très vite.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p 
                className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Oups, un petit problème technique. Réessayez dans un instant.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
