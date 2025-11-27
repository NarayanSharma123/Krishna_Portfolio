import React from "react";
import { motion } from "framer-motion";

const CV_PATH = "/Krishna CV.pdf";
const PROFILE_IMG = "/krishna.jpg";

const projects = [
  {
    id: 1,
    title: "Residential Complex Design",
    desc: "Concept, space planning and materials selection for a 24-unit residential complex.",
    tech: ["AutoCAD", "3d Max", "Site Planning"],
  },
  {
    id: 2,
    title: "Community Center Renovation",
    desc: "Adaptive re-use design that improved accessibility and natural ventilation.",
    tech: ["Sustainable Design", "Construction Management"],
  },
  {
    id: 3,
    title: "Campus Masterplan",
    desc: "Masterplanning and pedestrian-first circulation strategy for an educational campus.",
    tech: ["Urban Design", "Site Analysis"],
  },
];

export default function KrishnaPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="sticky top-0 z-40 bg-slate-900/70 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={PROFILE_IMG}
              alt="Krishna"
              className="w-10 h-10 rounded-full object-cover border-2 border-teal-400"
            />
            <div>
              <div className="text-sm font-bold">Krishna Kumar</div>
              <div className="text-xs text-slate-300">Architect</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a className="hover:text-teal-400" href="#about">
              About
            </a>
            <a className="hover:text-teal-400" href="#projects">
              Projects
            </a>
            <a className="hover:text-teal-400" href="#skills">
              Skills
            </a>
            <a className="hover:text-teal-400" href="#contact">
              Contact
            </a>
            <a
              href={CV_PATH}
              download
              className="ml-3 rounded-full px-4 py-2 bg-teal-500 text-white text-sm shadow hover:brightness-110"
            >
              Download CV
            </a>
          </div>

          <div className="md:hidden">
            <MobileMenu cv={CV_PATH} />
          </div>
        </div>
      </nav>

      <header
        id="home"
        className="max-w-6xl mx-auto px-5 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-teal-400"
          >
            Krishna Kumar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 max-w-xl"
          >
            Architect specializing in sustainable design, spatial planning, and
            modern construction management.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg px-4 py-2 bg-teal-500 text-white hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href={CV_PATH}
              download
              className="rounded-lg px-4 py-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition"
            >
              Download CV
            </a>
          </div>
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

      <main className="max-w-6xl mx-auto px-5 py-14">
        <section
          id="about"
          className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700"
        >
          <h2 className="text-xl font-semibold text-teal-400">
            Professional Summary
          </h2>
          <p className="mt-3 text-slate-300">
            Passionate architect focused on functional, modern, and sustainable
            structures with experience in planning, 3D modeling, and site
            supervision.
          </p>
        </section>

        <section id="projects" className="mt-12">
          <h2 className="text-xl font-semibold text-teal-400">
            Selected Projects
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="bg-slate-800/60 p-5 rounded-2xl shadow border border-slate-700"
              >
                <h4 className="font-semibold text-white">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full border text-slate-300 border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
            <h3 className="font-medium text-teal-400">Experience</h3>
            <p className="mt-2 text-slate-300">
              Internship experience in residential & commercial architecture.
            </p>
          </div>

          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
            <h3 className="font-medium text-teal-400">Tools & Technologies</h3>
            <div className="mt-3 flex flex-wrap gap-3 text-slate-300">
              {["AutoCAD", "3d Max", "Photoshop", "MS Office"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-slate-600 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-12 bg-slate-800/60 p-6 rounded-2xl border border-slate-700"
        >
          <h3 className="font-medium text-teal-400">Contact</h3>
          <p className="mt-2 text-slate-300">
            Phone:{" "}
            <a href="tel:+917357452785" className="text-teal-400">
              +91 7357452785
            </a>
          </p>
          <p className="mt-2 text-slate-300">
            Email:{" "}
            <a href="mailto:krishna@example.com" className="text-teal-400">
              krishna@example.com
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-700 py-6 bg-slate-900 text-center text-slate-400">
        © {new Date().getFullYear()} Krishna Kumar — Architect
      </footer>
    </div>
  );
}

function MobileMenu({ cv }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md border border-slate-600 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-3">
          <a className="block py-2 text-slate-300" href="#about">
            About
          </a>
          <a className="block py-2 text-slate-300" href="#projects">
            Projects
          </a>
          <a className="block py-2 text-slate-300" href="#skills">
            Skills
          </a>
          <a className="block py-2 text-slate-300" href="#contact">
            Contact
          </a>

          <a
            className="block py-2 mt-2 text-center bg-teal-500 text-black rounded"
            href={cv}
            download
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
}
