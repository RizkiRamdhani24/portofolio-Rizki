"use client";

import Link from "next/link";
import { useState, type PointerEvent } from "react";

const navigationItems = [
  { number: "01", label: "WORK", href: "#work" },
  { number: "02", label: "ABOUT", href: "#about" },
  { number: "03", label: "SKILLS", href: "#skills" },
  { number: "04", label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>, href: string) {
    if (event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--magnetic-x", `${x * 5}px`);
    event.currentTarget.style.setProperty("--magnetic-y", `${y * 5}px`);
    setActiveLink(href);
  }

  function handlePointerLeave(event: PointerEvent<HTMLAnchorElement>) {
    event.currentTarget.style.setProperty("--magnetic-x", "0px");
    event.currentTarget.style.setProperty("--magnetic-y", "0px");
    setActiveLink(null);
  }

  return (
    <header className="site-header">
      <nav className="page-container site-nav" aria-label="Main navigation">
        <Link className="site-name" href="/" aria-label="Go to homepage">
          RIZKI RAMDHANI
        </Link>

        <div className="nav-links">
          {navigationItems.map((item) => (
            <Link
              className={`nav-link${activeLink === item.href ? " is-active" : ""}`}
              href={item.href}
              key={item.number}
              onPointerMove={(event) => handlePointerMove(event, item.href)}
              onPointerLeave={handlePointerLeave}
            >
              <span className="nav-number">{item.number}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <span className="nav-year">2026</span>
      </nav>
    </header>
  );
}