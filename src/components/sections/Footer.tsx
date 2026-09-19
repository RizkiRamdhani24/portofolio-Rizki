"use client";

import {
  SiCplusplus,
  SiCss,
  SiDart,
  SiEspressif,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";

type Technology = {
  label: string;
  icon: IconType;
};

const technologies: Technology[] = [
  { label: "Dart", icon: SiDart },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "SQL", icon: SiMysql },
  { label: "HTML", icon: SiHtml5 },
  { label: "CSS", icon: SiCss },
  { label: "C/C++", icon: SiCplusplus },
  { label: "Flutter", icon: SiFlutter },
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "SQLite", icon: SiSqlite },
  { label: "MySQL", icon: SiMysql },
  { label: "Leaflet", icon: SiLeaflet },
  { label: "ESP32", icon: SiEspressif },
];

const marqueeItems = [...technologies, ...technologies];

const footerReveal = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <span className="footer-corner footer-corner-top-left" aria-hidden="true" />
      <span className="footer-corner footer-corner-top-right" aria-hidden="true" />
      <span className="footer-corner footer-corner-bottom-left" aria-hidden="true" />
      <span className="footer-corner footer-corner-bottom-right" aria-hidden="true" />

      <div className="page-container footer-inner">
        <motion.div
          className="footer-stack-label motion-reveal"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={footerReveal}
        >
          <span aria-hidden="true" />
          <p>STACK I WORK WITH</p>
        </motion.div>
      </div>

      <div className="footer-marquee" aria-label="Technology stack">
        <motion.div
          className="footer-marquee-track"
          animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 42, ease: "linear", repeat: Infinity }}
        >
          {marqueeItems.map(({ label, icon: Icon }, index) => (
            <div className="footer-tech-item" key={`${label}-${index}`}>
              <Icon className="footer-tech-icon" aria-hidden="true" />
              <span className="footer-tech-name">{label}</span>
              <span className="footer-tech-separator" aria-hidden="true">+</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="page-container footer-bottom">
        <motion.div
          className="footer-rule motion-reveal"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...footerReveal, delay: 0.1 }}
          aria-hidden="true"
        />

        <motion.div
          className="footer-identity motion-reveal"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...footerReveal, delay: 0.16 }}
        >
          <h2 id="footer-title">RIZKI RAMDHANI</h2>
          <p>INFORMATICS STUDENT — SEMARANG, INDONESIA</p>
        </motion.div>

        <motion.div
          className="footer-meta mono-label motion-reveal"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...footerReveal, delay: 0.22 }}
        >
          <p>© 2026 RIZKI RAMDHANI</p>
          <p>BUILT WITH NEXT.JS &amp; MOTION</p>
        </motion.div>
      </div>
    </footer>
  );
}