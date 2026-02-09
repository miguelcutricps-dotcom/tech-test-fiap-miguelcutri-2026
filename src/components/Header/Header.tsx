"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        {/* Grupo: SOBRE (fundo) + título (frente), mesma largura */}
        <div className={styles.header__titleGroup}>
          <div
            className={`${styles.header__bgText} ${
              phase >= 1 ? styles["header__bgText--visible"] : ""
            }`}
            aria-hidden="true"
          >
            SOBRE
          </div>

          <h1 className={styles.header__title}>
            <span className={styles.header__titleLine}>
              <span
                className={`${styles.header__titleReveal} ${
                  phase >= 2 ? styles["header__titleReveal--visible"] : ""
                }`}
                style={{ paddingLeft: '48px', textAlign: 'center', marginLeft: '48px' }}
              >
                A melhor faculdade
              </span>
            </span>
            <span className={styles.header__titleLine}>
              <span
                className={`${styles.header__titleReveal} ${
                  phase >= 3 ? styles["header__titleReveal--visible"] : ""
                }`}
              >
                de tecnologia
              </span>
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
}
