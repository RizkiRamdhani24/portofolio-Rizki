"use client";

import { motion, useReducedMotion } from "motion/react";

const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

const channels = [
  {
    label: "Email",
    value: "ikiiTreasure@gmail.com",
    href: "mailto:ikiiTreasure@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/RizkiRamdhani24",
    href: "https://github.com/RizkiRamdhani24",
  },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-container contact-inner">
        <motion.div
          className="contact-heading motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={revealTransition}
        >
          <p className="contact-index mono-label">04 / CONTACT</p>
          <h2 id="contact-title">LET’S<br />BUILD.</h2>
        </motion.div>

        <motion.div
          className="contact-rule motion-reveal"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
          aria-hidden="true"
        />

        <motion.div
          className="contact-copy motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.14 }}
        >
          <p>
            Saya terbuka untuk kesempatan magang, kolaborasi project, dan diskusi mengenai pengembangan aplikasi serta teknologi yang bermanfaat.
          </p>
        </motion.div>

        <motion.div
          className="contact-actions motion-reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          {channels.map((channel) => (
            <div key={channel.label} className="contact-item">
              <span className="mono-label">{channel.label}</span>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`${channel.label}: ${channel.value}`}
              >
                <strong>{channel.value}</strong>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
