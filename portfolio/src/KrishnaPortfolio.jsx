import React, { useState } from "react";
import { motion } from "framer-motion";

const CV_PATH = "/Krishna CV.pdf";
const PROFILE_IMG = "/krishna.jpg";

export default function KrishnaPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={PROFILE_IMG}
              alt="KK"
              className="w-10 h-10 rounded-full border-2 border-teal-400"
            />
            <div>
              <h1 className="text-sm font-bold">Krishna Kumar</h1>
              <p className="text-xs text-slate-400">Architectural Drafter</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-teal-400">
              About
            </a>
            <a href="#expertise" className="hover:text-teal-400">
              Expertise
            </a>
            <a href="#services" className="hover:text-teal-400">
              Services
            </a>
            <a href="#projects" className="hover:text-teal-400">
              Projects
            </a>
            <a href="#experience" className="hover:text-teal-400">
              Experience
            </a>
            <a href="#workflow" className="hover:text-teal-400">
              Workflow
            </a>
            <a href="#contact" className="hover:text-teal-400">
              Contact
            </a>
            <a
              href={CV_PATH}
              download
              className="bg-teal-500 text-white px-4 py-2 rounded-full shadow hover:brightness-110"
            >
              Download CV
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
            >
              <span
                className={`block h-0.5 w-full bg-white transition-all ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="absolute top-16 right-4 w-64 bg-slate-800/90 rounded-xl border border-slate-700 shadow-lg p-6 flex flex-col gap-4"
          >
            <a
              href="#about"
              className="hover:text-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#expertise"
              className="hover:text-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              Expertise
            </a>
            <a
              href="#services"
              className="hover:text-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#workflow"
              className="hover:text-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              Workflow
            </a>
            <a
              href="#contact"
              className="hover:text-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href={CV_PATH}
              download
              className="bg-teal-500 text-white px-4 py-2 rounded-full shadow hover:brightness-110 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
          </motion.div>
        )}
      </nav>

      <header className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl font-extrabold text-teal-400 leading-tight"
          >
            Krishna Kumar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-5 text-lg text-slate-300 max-w-xl leading-relaxed"
          >
            Architectural Drafter & Planning Specialist with hands-on experience
            in residential layouts, elevation concepts, drafting, and real-world
            site exposure. Known for accuracy, clean planning, and fast
            delivery.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15, duration: 0.6 },
              },
            }}
          >
            <motion.a
              href="#contact"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.07 }}
              className="px-5 py-3 bg-teal-500 rounded-lg text-white"
            >
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.07 }}
              className="px-5 py-3 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-black"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl bg-slate-800 border border-slate-700"
          >
            <img
              src={PROFILE_IMG}
              alt="Krishna"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        <section
          id="about"
          className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-teal-400">About Me</h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            I am a trained Architectural Drafter with strong technical command
            over AutoCAD and residential planning. Over the last 1.5 years, I’ve
            worked with coaching institutes, assisted clients with project-based
            drafting, and gained architectural exposure in Delhi. My focus is
            clean design, logical room planning, and practical drafting
            execution that matches real-site requirements.
          </p>
        </section>

        <section id="expertise" className="mt-16">
          <h2 className="text-2xl font-semibold text-teal-400">
            Core Expertise
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Residential Floor Planning",
              "Elevation Concept Designing",
              "Site Layout Development",
              "2D Drafting & Detailing",
              "Basic 3D Understanding",
              "Space Optimization Planning",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-teal-400 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mt-16">
          <h2 className="text-2xl font-semibold text-teal-400">
            Services I Provide
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "2D AutoCAD Drafting",
              "Floor Plan Development",
              "Elevation Layout Draft",
              "Site & Landscape Planning",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/60 rounded-xl border border-slate-700 hover:border-teal-400 transition"
              >
                <h4 className="text-lg font-medium text-white">{item}</h4>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-16">
          <h2 className="text-2xl font-semibold text-teal-400">
            Selected Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              {
                t: "Residential Floor Plan (G+1)",
                d: "Complete zoning, ventilation alignment, and 2D drafting.",
              },
              {
                t: "Modern Elevation Proposal",
                d: "Clean geometry-based elevation with material concepts.",
              },
              {
                t: "3BHK House Planning",
                d: "Balanced planning with dining, lobby & balcony integration.",
              },
              {
                t: "Site Layout & Pathways Design",
                d: "Structured site pathways with logical open spaces.",
              },
              {
                t: "Custom Plot Planning",
                d: "Plan made for real clients based on exact plot sizes.",
              },
              {
                t: "Exterior Concept Drafting",
                d: "Base concept for modern exterior look.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-teal-400 transition"
              >
                <h4 className="text-lg font-semibold text-white">{p.t}</h4>
                <p className="text-sm text-slate-300 mt-2">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mt-16 bg-slate-800/60 p-8 rounded-2xl border border-slate-700"
        >
          <h2 className="text-2xl font-semibold text-teal-400">Experience</h2>
          <ul className="mt-4 text-slate-300 space-y-3 text-lg">
            <li>
              • <b>Architectural CAD Trainee / Draftsman</b> — CAD Index
              Institute, Kuchaman City (1.5 Years)
            </li>
            <li>• Drafted multiple residential plans for real clients.</li>
            <li>• Architectural exposure at Delhi coaching sites.</li>
            <li>
              • Hands-on experience in practical workflow & planning accuracy.
            </li>
          </ul>
        </section>

        <section id="workflow" className="mt-16">
          <h2 className="text-2xl font-semibold text-teal-400">
            My Working Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              "1. Requirement Understanding",
              "2. Base Sketch / Layout",
              "3. AutoCAD Drafting",
              "4. Final Review & Output",
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/60 rounded-xl border border-slate-700 text-center hover:border-teal-400"
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-20 bg-slate-800/60 p-8 rounded-2xl border border-slate-700"
        >
          <h2 className="text-2xl font-semibold text-teal-400">Contact</h2>
          <p className="mt-4 text-lg text-slate-300">
            Phone:{" "}
            <a href="https://wa.me/+917357452785" className="text-teal-400">
              +91 7357452785
            </a>
          </p>
          <p className="mt-2 text-lg text-slate-300">
            Email:{" "}
            <a
              href="mailto:krishnasharmajikinsariya01@gmail.com"
              className="text-teal-400"
            >
              krishnasharmajikinsariya01@gmail.com
            </a>
          </p>
          <p className="mt-2 text-lg text-slate-300">
            Address: Kinsariya, Prabatsar, Rajasthan, India
          </p>
        </section>
      </main>

      <footer className="bg-slate-900 py-6 text-center text-slate-500 border-t border-slate-700">
        © {new Date().getFullYear()} Krishna Kumar — Architectural Drafter
      </footer>
    </div>
  );
}
