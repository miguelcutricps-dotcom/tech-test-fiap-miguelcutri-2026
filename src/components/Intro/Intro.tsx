"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Intro.module.scss";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageRevealed, setImageRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setImageRevealed(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.intro}
      aria-label="Introdução"
    >
      <div
        className={`${styles.intro__imageWrapper} ${
          imageRevealed ? styles["intro__imageWrapper--revealed"] : ""
        }`}
      >
        <div className={styles.intro__revealCurtain} />
        <div className={styles.intro__image}>
          <Image
            src="/assets/images/intro-person.png"
            alt="Pessoa estudando com fones de ouvido em ambiente moderno"
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
