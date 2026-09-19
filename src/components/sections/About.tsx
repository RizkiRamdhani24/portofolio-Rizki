"use client";

import { motion, useReducedMotion, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent } from "react";

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

const interests = [
  "WEB DEVELOPMENT",
  "FULL-STACK DEVELOPMENT",
  "DATABASE",
  "INTERNET OF THINGS (IoT)",
];

const tickerItems = ["CODE", "DEBUG", "BUILD", "TEST", "LEARN"];

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const cardX = useSpring(useMotionValue(0), { stiffness: 150, damping: 22 });
  const cardY = useSpring(useMotionValue(0), { stiffness: 150, damping: 22 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    cardX.set(x * 5);
    cardY.set(y * 5);
  }

  function handlePointerLeave() {
    cardX.set(0);
    cardY.set(0);
  }

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <span className="about-ghost-number" aria-hidden="true">02</span>
      <span className="technical-mark technical-mark-top" aria-hidden="true" />
      <span className="technical-mark technical-mark-bottom" aria-hidden="true" />

      <div className="page-container about-inner">
        <motion.div
          className="about-heading motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={revealTransition}
        >
          <p className="about-index mono-label">02 / ABOUT</p>
          <h2 id="about-title">ABOUT<br />ME</h2>
        </motion.div>

        <motion.div
          className="about-rule motion-reveal"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: 0.08 }}
          aria-hidden="true"
        />

        <motion.div
          className="about-copy motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: 0.14 }}
        >
          <p>
            Saya adalah mahasiswa S1 Informatika semester 5 di Universitas PGRI Semarang yang sedang fokus pada pengembangan aplikasi web, mobile, dan sistem berbasis data.
          </p>
          <p>
            Saya tertarik pada proses mengubah ide menjadi produk yang bermanfaat dan mudah dipahami. Dalam proses belajar, saya mengeksplorasi full-stack development, database, serta integrasi perangkat seperti IoT.
          </p>
          <p>
            Saat ini saya terus membangun kemampuan dalam menulis kode yang rapi, memahami arsitektur aplikasi, dan menyelesaikan masalah secara praktis dalam setiap project yang saya buat.
          </p>
        </motion.div>

        <motion.div
          className="about-focus motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: 0.22 }}
          style={{ x: cardX, y: cardY }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <p className="focus-label mono-label">CURRENT FOCUS / 2026</p>
          <p className="focus-title">BUILDING<br />WITH PURPOSE.</p>
          <span className="focus-crosshair" aria-hidden="true">+</span>
        </motion.div>

        <motion.div
          className="about-interests motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: 0.3 }}
        >
          <p className="mono-label">AREAS OF INTEREST</p>
          <ol>
            {interests.map((interest, index) => (
              <li key={interest}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{interest}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          className="about-education motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: 0.38 }}
        >
          <p className="mono-label">EDUCATION</p>
          <p className="education-degree">S1 INFORMATIKA</p>
          <p className="education-school">UNIVERSITAS PGRI SEMARANG</p>
          <p className="education-semester">SEMESTER 5</p>
        </motion.div>
      </div>

      <div className="about-ticker" aria-label="Learning process keywords">
        <motion.div
          className="ticker-track"
          animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        >
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <b aria-hidden="true">+</b>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}