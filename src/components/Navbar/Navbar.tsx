"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Navegação principal">
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          {/* Desktop logo - hidden on mobile via CSS */}
          <span className={styles.navbar__logoDesktop}>
            <Image
              src="/assets/svgs/logo-fiap.svg"
              alt="FIAP"
              width={144}
              height={39}
              priority
            />
          </span>
          {/* Mobile logo - hidden on desktop via CSS */}
          <span className={styles.navbar__logoMobile}>
            <Image
              src="/assets/svgs/logo-fiap-mobile.svg"
              alt="FIAP"
              width={84}
              height={23}
              priority
            />
          </span>
        </div>
      </div>

      <div
        className={styles.navbar__progress}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de leitura da página"
      >
        <div
          className={styles.navbar__progressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
