"use client";

import { motion, useReducedMotion } from "motion/react";

const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

const projects = [
  {
    title: "TOKO KITA",
    type: "POS APPLICATION",
    year: "2025",
    image: encodeURI("/images/projects/toko-kita/Cuplikan layar 2026-09-16 123425.png"),
    description:
      "Aplikasi POS untuk penjualan sembako yang dirancang agar proses transaksi, pencatatan stok, dan pengelolaan data lebih cepat serta efisien.",
    stack: ["FLUTTER", "DART", "SQLITE"],
  },
  {
    title: "WISATAJATENG",
    type: "TRAVEL WEBSITE",
    year: "2025",
    href: "https://wisata-amber.vercel.app/",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description:
      "Website private trip dan family vacation planner yang membantu pengguna mengeksplorasi destinasi wisata serta merencanakan perjalanan dengan tampilan yang lebih menarik dan terstruktur.",
    stack: ["NEXT.JS", "TYPE SCRIPT", "MYSQL"],
  },
  {
    title: "CLEANBOT",
    type: "IOT SYSTEM",
    year: "2026",
    image: "/images/projects/cleanbot/preview.png",
    description:
      "Sistem IoT robot vacuum berbasis ESP32 yang menggabungkan kontrol otomatis, sensor, dan mekanisme pembersihan sederhana untuk kebutuhan rumah tangga.",
    stack: ["ESP32", "C++", "IOT"],
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="projects-section" id="work" aria-labelledby="projects-title">
      <div className="page-container projects-inner">
        <motion.div
          className="projects-heading motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={revealTransition}
        >
          <p className="projects-index mono-label">03 / WORK</p>
          <h2 id="projects-title">
            SELECTED
            <br />
            PROJECTS
          </h2>
        </motion.div>

        <motion.div
          className="projects-rule motion-reveal"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
          aria-hidden="true"
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card motion-reveal"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : index * 0.12 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, rotateX: 1.5, rotateY: index % 2 === 0 ? -1.5 : 1.5 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            >
              <div
                className="project-visual"
                style={{ backgroundImage: `url(${project.image})` }}
                role="img"
                aria-label={`${project.title} project preview`}
              >
                <span className="project-visual-label mono-label">PROJECT / {String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="project-card-head">
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-year mono-label">{project.year}</span>
              </div>

              <div className="project-card-body">
                <p className="project-type mono-label">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.href ? (
                  <a
                    className="project-link mono-label"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW LIVE PROJECT <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>

              <ul className="project-stack" aria-label={`${project.title} technology stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
