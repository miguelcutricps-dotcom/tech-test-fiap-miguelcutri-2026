"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { faqItems } from "@/data/faq";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = useCallback(
    (id: string) => {
      if (!isMobile) {
        setActiveItem(id);
      }
    },
    [isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setActiveItem(null);
    }
  }, [isMobile]);

  const handleClick = useCallback(
    (id: string) => {
      if (isMobile) {
        setActiveItem(activeItem === id ? null : id);
      }
    },
    [isMobile, activeItem]
  );

  return (
    <section
      ref={sectionRef}
      className={`${styles.faq} ${isVisible ? styles["faq--visible"] : ""}`}
      aria-label="Perguntas frequentes"
      id="faq"
    >
      <div className={styles.faq__container}>
        <div className={styles.faq__header}>
          <h2 className={styles.faq__title}>FAQ</h2>
          <p className={styles.faq__subtitle}>Dúvidas Frequentes</p>
        </div>

        <div className={styles.faq__grid}>
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.faq__item} ${
                activeItem === item.id ? styles["faq__item--active"] : ""
              }`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: isVisible ? `${index * 0.08}s` : "0s" }}
            >
              <button
                className={styles.faq__question}
                onClick={() => handleClick(item.id)}
                aria-expanded={activeItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className={styles.faq__questionText}>
                  {item.question}
                </span>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                className={`${styles.faq__answer} ${
                  activeItem === item.id ? styles["faq__answer--open"] : ""
                }`}
                role="region"
              >
                <p className={styles.faq__answerText}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
