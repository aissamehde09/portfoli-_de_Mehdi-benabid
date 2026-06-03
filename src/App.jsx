import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const update = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] hidden h-64 w-64 rounded-full bg-neon/[0.07] blur-[100px] lg:block"
      animate={{ x: position.x - 128, y: position.y - 128 }}
      transition={{ type: "spring", stiffness: 150, damping: 30, mass: 0.1 }}
    />
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div
      data-theme={theme}
      className="min-h-screen overflow-x-hidden bg-midnight font-sans text-ivory antialiased transition-colors duration-300"
    >
      <CursorGlow />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
