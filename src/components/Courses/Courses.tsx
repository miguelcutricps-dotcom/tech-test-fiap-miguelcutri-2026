"use client";

import { useState, useEffect, useRef } from "react";
import { courseCategories } from "@/data/courses";
import type { CourseCategory } from "@/data/courses";
import styles from "./Courses.module.scss";

export default function Courses() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  // Figma mobile: TECNOLOGIA aberto por padrão
  const [expandedCategoryMobile, setExpandedCategoryMobile] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setExpandedCourse(null);
  };

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const toggleCategoryMobile = (index: number) => {
    setExpandedCategoryMobile(expandedCategoryMobile === index ? null : index);
  };

  const currentCategory = courseCategories[activeTab];

  // Desktop: lista com expand/collapse por curso (descrição)
  const renderCourseList = (category: CourseCategory) => (
    <ul className={styles.courses__list}>
      {category.courses.map((course) => (
        <li key={course.id} className={styles.courses__item}>
          <button
            className={`${styles.courses__itemButton} ${
              expandedCourse === course.id
                ? styles["courses__itemButton--expanded"]
                : ""
            }`}
            onClick={() => toggleCourse(course.id)}
            aria-expanded={expandedCourse === course.id}
          >
            <span className={styles.courses__itemName}>{course.name}</span>
          </button>
          <div
            className={`${styles.courses__itemContent} ${
              expandedCourse === course.id
                ? styles["courses__itemContent--open"]
                : ""
            }`}
          >
            <p className={styles.courses__itemDescription}>
              {course.description ||
                "Saiba mais sobre este curso acessando o site da FIAP."}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );

  // Mobile — Figma: só accordion nas abas; lista simples (modalidade + nome), sem expand por curso
  const renderMobileCourseList = (category: CourseCategory) => (
    <ul className={styles.courses__mobileList}>
      {category.courses.map((course) => (
        <li key={course.id} className={styles.courses__mobileCourseItem}>
          <span className={styles.courses__mobileCourseModality}>
            {course.modality || "REMOTO • LIVE"}
          </span>
          <span className={styles.courses__mobileCourseName}>{course.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      ref={sectionRef}
      className={`${styles.courses} ${isVisible ? styles["courses--visible"] : ""}`}
      aria-label="Cursos"
      id="cursos"
    >
      <div className={styles.courses__container}>
        <div className={styles.courses__header}>
          <div className={styles.courses__headerLeft}>
            <h2 className={styles.courses__title}>Cursos</h2>
            <p className={styles.courses__subtitle}>Cursos de Curta Duração</p>
          </div>

          {/* Tabs — Desktop: alinhadas à direita; Mobile: escondidas (accordion no lugar) */}
          <div className={styles.courses__tabs} role="tablist">
            {courseCategories.map((category, index) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`panel-${category.id}`}
                className={`${styles.courses__tab} ${
                  activeTab === index ? styles["courses__tab--active"] : ""
                }`}
                onClick={() => handleTabChange(index)}
              >
                <span className={styles.courses__tabIcon}>
                  <span
                    className={`${styles.courses__tabIconRect} ${
                      activeTab === index ? styles["courses__tabIconRect--active"] : ""
                    }`}
                  />
                </span>
                <span className={styles.courses__tabLabel}>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: category heading + um painel */}
        <h3 className={styles.courses__categoryHeading}>
          {currentCategory.label}
        </h3>
        <div
          role="tabpanel"
          id={`panel-${currentCategory.id}`}
          className={styles.courses__panel}
        >
          {renderCourseList(currentCategory)}
        </div>

        {/* Mobile — Figma: accordion por categoria (TECNOLOGIA, INOVAÇÃO, NEGÓCIOS) */}
        <div className={styles.courses__mobileAccordion}>
          {courseCategories.map((category, index) => (
            <div
              key={category.id}
              className={`${styles.courses__mobileCategory} ${
                expandedCategoryMobile === index
                  ? styles["courses__mobileCategory--open"]
                  : ""
              }`}
            >
              <button
                type="button"
                className={styles.courses__mobileCategoryButton}
                onClick={() => toggleCategoryMobile(index)}
                aria-expanded={expandedCategoryMobile === index}
              >
                <span className={styles.courses__mobileCategoryLabel}>
                  {category.label}
                </span>
                <span className={styles.courses__mobileCategoryIcon}>
                  {expandedCategoryMobile === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.courses__mobileCategoryContent} ${
                  expandedCategoryMobile === index
                    ? styles["courses__mobileCategoryContent--open"]
                    : ""
                }`}
              >
                {renderMobileCourseList(category)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
