"use client";

import { useEffect, useRef, useCallback } from "react";
import styles from "./WaterEffect.module.scss";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  life: number;
  maxLife: number;
  gravity: number;
}

interface WavePoint {
  x: number;
  y: number;
  originalY: number;
  speed: number;
  amplitude: number;
  offset: number;
}

// Textos dos cursos que aparecem no grid inferior (conforme Figma)
const GRID_LABELS = [
  { label: "DESENVOLVIMENTO SERVERLESS", col: 0 },
  { label: "COPA VIZ", col: 1 },
  { label: "CYBER HACKING", col: 2 },
  { label: "//WEB HACKING", col: 3 },
  { label: "CURSOS", col: 4 },
];

export default function WaterEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const wavesRef = useRef<WavePoint[]>([]);
  const animationRef = useRef<number>(0);
  const scrollProgressRef = useRef(0);
  const timeRef = useRef(0);

  const initWaves = useCallback((canvasWidth: number, canvasHeight: number) => {
    const points: WavePoint[] = [];
    const count = Math.ceil(canvasWidth / 6) + 1;
    for (let i = 0; i < count; i++) {
      points.push({
        x: (i / (count - 1)) * canvasWidth,
        y: canvasHeight * 0.5,
        originalY: canvasHeight * 0.5,
        speed: 0.015 + Math.random() * 0.015,
        amplitude: 20 + Math.random() * 30,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return points;
  }, []);

  const createSplashParticle = useCallback(
    (canvasWidth: number, canvasHeight: number, progress: number): Particle => {
      const centerX = canvasWidth * (0.3 + Math.random() * 0.4);
      const baseY = canvasHeight * 0.45;
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
      const speed = (2 + Math.random() * 5) * (0.3 + progress * 0.7);

      return {
        x: centerX + (Math.random() - 0.5) * canvasWidth * 0.35,
        y: baseY + (Math.random() - 0.5) * 50,
        vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
        vy: Math.sin(angle) * speed,
        radius: 0.3 + Math.random() * 2.5 * progress,
        opacity: 0.2 + Math.random() * 0.6,
        life: 0,
        maxLife: 60 + Math.random() * 100,
        gravity: 0.025 + Math.random() * 0.025,
      };
    },
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      if (rect.top > windowHeight) {
        scrollProgressRef.current = 0;
      } else if (rect.bottom < 0) {
        scrollProgressRef.current = 1;
      } else {
        scrollProgressRef.current = Math.max(
          0,
          Math.min(1, 1 - (rect.top + sectionHeight) / (windowHeight + sectionHeight))
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.scale(dpr, dpr);
      wavesRef.current = initWaves(parent.clientWidth, parent.clientHeight);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    particlesRef.current = Array.from({ length: 250 }, () =>
      createSplashParticle(canvas.clientWidth, canvas.clientHeight, 0.5)
    );

    const animate = () => {
      if (!ctx || !canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);
      timeRef.current += 1;

      const progress = scrollProgressRef.current;

      // Desenhar ondas
      const waves = wavesRef.current;
      if (waves.length > 0) {
        waves.forEach((point) => {
          point.y =
            point.originalY +
            Math.sin(timeRef.current * point.speed + point.offset) *
              point.amplitude * (0.3 + progress * 0.7);
        });

        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let i = 0; i < waves.length; i++) {
          if (i === 0) {
            ctx.lineTo(waves[i].x, waves[i].y);
          } else {
            const cpx = (waves[i - 1].x + waves[i].x) / 2;
            ctx.bezierCurveTo(cpx, waves[i - 1].y, cpx, waves[i].y, waves[i].x, waves[i].y);
          }
        }
        ctx.lineTo(w, h);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, h * 0.3, 0, h);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.015 + progress * 0.025})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${0.003 + progress * 0.008})`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Desenhar partículas
      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.life++;

        const lifeRatio = p.life / p.maxLife;
        let alpha = p.opacity * progress;
        if (lifeRatio < 0.1) alpha *= lifeRatio / 0.1;
        else if (lifeRatio > 0.7) alpha *= (1 - lifeRatio) / 0.3;

        if (alpha > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        }

        if (p.life >= p.maxLife || p.y > h + 20 || p.x < -20 || p.x > w + 20) {
          particlesRef.current[i] = createSplashParticle(w, h, progress);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initWaves, createSplashParticle]);

  return (
    <section
      ref={sectionRef}
      className={styles.waterEffect}
      aria-hidden="true"
    >
      {/* Grid lines horizontais (conforme Figma) */}
      <div className={styles.waterEffect__gridLines}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.waterEffect__gridLine} />
        ))}
      </div>

      {/* Canvas com partículas */}
      <div className={styles.waterEffect__canvasWrapper}>
        <canvas ref={canvasRef} className={styles.waterEffect__canvas} />
      </div>

      {/* Número decorativo "06" */}
      <div className={styles.waterEffect__number}>
        <span>06</span>
      </div>

      {/* Círculo decorativo (canto direito) */}
      <div className={styles.waterEffect__circle} />

      {/* Labels de cursos no grid inferior */}
      <div className={styles.waterEffect__labels}>
        {GRID_LABELS.map((item) => (
          <span key={item.label} className={styles.waterEffect__label}>
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
