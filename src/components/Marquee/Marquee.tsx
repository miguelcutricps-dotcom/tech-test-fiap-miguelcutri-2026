"use client";

import styles from "./Marquee.module.scss";

const LINE_1 = "CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO. ";
const LINE_2 = "TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. ";

export default function Marquee() {
  return (
    <section className={styles.marquee} aria-label="Texto em destaque">
      {/* Linha 1: move da direita para a esquerda */}
      <div className={styles.marquee__row}>
        <div className={styles.marquee__track} data-direction="left">
          {[...Array(8)].map((_, i) => (
            <span key={i} className={styles.marquee__text}>
              {LINE_1}
            </span>
          ))}
        </div>
      </div>

      {/* Linha 2: move da esquerda para a direita */}
      <div className={styles.marquee__row}>
        <div className={styles.marquee__track} data-direction="right">
          {[...Array(8)].map((_, i) => (
            <span key={i} className={styles.marquee__text}>
              {LINE_2}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
