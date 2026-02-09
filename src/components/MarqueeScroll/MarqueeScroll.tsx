"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MarqueeScroll.module.scss";

const LINE_1 = "SKILLS · CONHECIMENTO · SKILLS · CONHECIMENTO · ";
const LINE_2 = "MUITO ALÉM DOS TUTORIAIS · MUITO ALÉM DOS TUTORIAIS · ";

export default function MarqueeScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const sectionMiddle = rect.top + rect.height / 2;
          const viewportMiddle = windowHeight / 2;
          const offset = viewportMiddle - sectionMiddle;
          setTranslateX(offset * 0.3);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.marqueeScroll}
      aria-label="Texto decorativo"
    >
      <div className={styles.marqueeScroll__track}>
        {/* Linha 1: move para a esquerda com scroll */}
        <div
          className={styles.marqueeScroll__content}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <div className={styles.marqueeScroll__line}>
            <span className={styles.marqueeScroll__text}>
              {LINE_1}{LINE_1}{LINE_1}
            </span>
          </div>
        </div>

        {/* Linha 2: move para a direita com scroll (oposto) */}
        <div
          className={styles.marqueeScroll__content}
          style={{ transform: `translateX(${-translateX}px)` }}
        >
          <div className={styles.marqueeScroll__line}>
            <span className={styles.marqueeScroll__text}>
              {LINE_2}{LINE_2}{LINE_2}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
