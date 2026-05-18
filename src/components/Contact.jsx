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
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading kicker="Contact" title="On peut en parler simplement.">
            Une question, un conseil, une opportunité ou un projet junior ?
            Écrivez-moi, je répondrai avec plaisir.
          </SectionHeading>

          <div className="grid gap-3">
            {contactLinks.map((item, index) => {
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="premium-card focus-premium group flex items-center gap-4 rounded-2xl p-4 transition hover:border-neon/40 hover:bg-neon/10"
                  initial={{ opacity: 0.9, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-neon/10 text-neon transition group-hover:bg-neon/20 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.2)]">
                    <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-ivory">{item.label}</span>
                    <span className="block truncate text-sm text-slate-400">{item.value}</span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.form
          className="premium-card relative rounded-3xl p-5 sm:p-7"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          onSubmit={handleSubmit}
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-electric/20 blur-3xl" />
          <div className="relative grid gap-5">
            <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Nom</span>
              <input className="form-field focus-premium" name="name" type="text" placeholder="Votre nom" required />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Email</span>
              <input className="form-field focus-premium" name="email" type="email" placeholder="Votre email" required />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Sujet</span>
              <input className="form-field focus-premium" name="subject" type="text" placeholder="Sujet de votre message" required />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Message</span>
              <textarea className="form-field focus-premium min-h-40 resize-y" name="message" placeholder="Votre message..." required />
            </label>
            <div>
              <GlowButton type="submit" icon={faPaperPlane}>
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </GlowButton>
            </div>
            {status === "success" && (
              <p className="rounded-2xl border border-neon/25 bg-neon/10 px-4 py-3 text-sm font-semibold text-neon">
                Message envoyé. Vérifie ta boîte Gmail.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-200">
                Le service d’envoi ne répond pas pour le moment. Réessaie dans quelques minutes.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
