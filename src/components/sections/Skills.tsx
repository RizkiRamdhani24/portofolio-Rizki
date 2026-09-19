"use client";

import { motion, useReducedMotion } from "motion/react";

const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

const skillGroups = [
  {
    title: "FRONTEND",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "BACKEND & DATA",
    items: ["Node.js", "SQL", "MySQL", "SQLite", "REST API", "Database"],
  },
  {
    title: "MOBILE & IOT",
    items: ["Flutter", "Dart", "ESP32", "C/C++", "IoT", "Robotics"],
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="page-container skills-inner">
        <motion.div
          className="skills-heading motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={revealTransition}
        >
          <p className="skills-index mono-label">03 / SKILLS</p>
          <h2 id="skills-title">TOOLS<br />& STACK</h2>
        </motion.div>

        <motion.div
          className="skills-rule motion-reveal"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
          aria-hidden="true"
        />

        <div className="skills-groups">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="skill-group motion-reveal"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : groupIndex * 0.1 + 0.12 }}
            >
              <p className="skill-group-title mono-label">{group.title}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
