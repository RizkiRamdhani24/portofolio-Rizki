"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMotionValue, useSpring } from "motion/react";
import { SiCss, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { useEffect, useState, type PointerEvent } from "react";

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const revealOffset = 24;
  const [introProgress, setIntroProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const titleX = useSpring(useMotionValue(0), { stiffness: 160, damping: 22 });
  const titleY = useSpring(useMotionValue(0), { stiffness: 160, damping: 22 });
  const introIcons = [
    { label: "HTML5", Icon: SiHtml5, color: "#e34f26" },
    { label: "CSS3", Icon: SiCss, color: "#1572b6" },
    { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
    { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
    { label: "React", Icon: SiReact, color: "#61dafb" },
    { label: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  ];

  useEffect(() => {
    if (shouldReduceMotion) {
      const reducedMotionFrame = window.requestAnimationFrame(() => {
        setIntroProgress(100);
        setShowIntro(false);
      });

      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handlePointerMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    let animationFrame = 0;
    let hideTimer: number | undefined;
    const startTime = performance.now();
    const duration = 3600;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const nextProgress = Math.min(100, (elapsed / duration) * 100);
      setIntroProgress(nextProgress);

      if (nextProgress >= 100) {
        hideTimer = window.setTimeout(() => {
          document.body.style.overflow = previousOverflow;
          setShowIntro(false);
        }, 750);
        return;
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldReduceMotion]);

  function handlePointerMove(event: PointerEvent<HTMLHeadingElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    titleX.set(x * 5);
    titleY.set(y * 5);
  }

  function handlePointerLeave() {
    titleX.set(0);
    titleY.set(0);
  }

  return (
    <>
      {!showIntro && null}
      {showIntro ? (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: introProgress >= 100 ? 0 : 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="intro-shell"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="intro-label">WELCOME</p>
            <div className="intro-progress-row" aria-live="polite">
              <div className="intro-progress">
                <span>{Math.round(introProgress)}</span>
                <span>%</span>
              </div>

              <motion.div
                className="intro-code-lockup"
                aria-hidden="true"
                animate={{ rotate: introProgress >= 100 ? 180 : 0, scale: introProgress >= 100 ? 1.12 : 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="intro-code-main">&lt;/&gt;</span>
              </motion.div>
            </div>
            <div className="intro-bar" aria-hidden="true">
              <motion.span
                className="intro-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${introProgress}%` }}
                transition={{ duration: 0.12, ease: "linear" }}
              />
            </div>

            <div className="intro-icon-stage" aria-hidden="true">
              {introIcons.map(({ label, Icon, color }, index) => (
                <motion.span
                  key={label}
                  className="intro-language-icon"
                  initial={{ opacity: 0, y: 78, scale: 0.72, rotate: -12 }}
                  animate={{
                    opacity: introProgress >= 100 ? 0 : introProgress >= index * 14 ? 1 : 0,
                    y: introProgress >= 100 ? -115 - index * 8 : introProgress >= index * 14 ? 0 : 78,
                    scale: introProgress >= 100 ? 0.78 : introProgress >= index * 14 ? 1 : 0.72,
                    rotate: introProgress >= 100 ? 14 : 0,
                  }}
                  transition={{
                    duration: introProgress >= 100 ? 0.7 : 0.55,
                    delay: introProgress >= 100 ? index * 0.04 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  title={label}
                  style={{ color }}
                >
                  <Icon aria-hidden="true" />
                </motion.span>
              ))}
            </div>

            <p className="intro-meta">RIZKI RAMDHANI / CREATIVE DEVELOPER</p>
          </motion.div>
        </motion.div>
      ) : null}

      <section className="page-container hero" aria-labelledby="hero-title">
        <div className="hero-index mono-label">01 / INTRO</div>

        <div className="hero-title-wrap">
          <motion.h1
            className="hero-title motion-reveal"
            id="hero-title"
            initial={{ opacity: 0, y: revealOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
            style={{ x: titleX, y: titleY }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <motion.span
              initial={{ opacity: 0, y: "70%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.12 }}
            >
              INFORMATICS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: "70%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              STUDENT
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          className="hero-rule motion-reveal"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.18 }}
          aria-hidden="true"
        />

        <motion.div
          className="hero-identity motion-reveal"
          initial={{ opacity: 0, y: revealOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.24 }}
        >
          <p className="identity-name">RIZKI RAMDHANI</p>
          <p className="identity-role">FULL-STACK STUDENT</p>
          <p className="identity-note">S1 INFORMATIKA / SEMESTER 5 / UNIVERSITAS PGRI SEMARANG</p>
        </motion.div>

        <motion.div
          className="hero-statement motion-reveal"
          initial={{ opacity: 0, y: revealOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.32 }}
        >
          <p>I BUILD WEB, MOBILE</p>
          <p>AND IoT PROJECTS.</p>
        </motion.div>

        <motion.div
          className="hero-disciplines motion-reveal"
          initial={{ opacity: 0, y: revealOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.4 }}
        >
          <p>WEB DEVELOPMENT</p>
          <p>MOBILE APPLICATION</p>
          <p>IoT</p>
        </motion.div>

        <motion.div
          className="hero-preview motion-reveal"
          initial={{ opacity: 0, y: revealOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.46 }}
          aria-label="Project preview placeholder"
        >
          <span className="preview-index">FIELD NOTE / 001</span>
          <span className="preview-word">BUILD<br />/ TEST</span>
          <span className="preview-mark" aria-hidden="true">+</span>
        </motion.div>

        <motion.div
          className="hero-meta motion-reveal"
          initial={{ opacity: 0, y: revealOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.52 }}
        >
          <p>BASED IN INDONESIA</p>
          <p>2026</p>
        </motion.div>

        <motion.div
          className="scroll-cue mono-label motion-reveal"
          initial={{ opacity: 0, y: revealOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.58 }}
        >
          <span>SCROLL</span>
          <span className="scroll-arrow" aria-hidden="true">↓</span>
        </motion.div>
      </section>
    </>
  );
}