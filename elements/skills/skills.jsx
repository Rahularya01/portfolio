import Image from "next/image";
import React from "react";
import styles from "./skills.module.scss";
// Front end images
import html from "../../assets/img/html-1.svg";
import css from "../../assets/img/css-3.svg";
import javascript from "../../assets/img/logo-javascript.svg";
import react from "../../assets/img/react-2.svg";
import vue from "../../assets/img/vue-2.svg";
// Backend Images
import node from "../../assets/img/nodejs-1.svg";
import mongodb from "../../assets/img/mongodb-icon-1.svg";
import django from "../../assets/img/django.svg";
import sql from "../../assets/img/sql.svg";

const Skills = () => {
  const frontendSkills = [
    {
      img: html,
      title: "HTML",
      subtitle: "Advanced",
    },
    {
      img: css,
      title: "CSS",
      subtitle: "Advanced",
    },
    {
      img: javascript,
      title: "JavaScript",
      subtitle: "Advanced",
    },
    {
      img: react,
      title: "React",
      subtitle: "Advanced",
    },
    {
      img: vue,
      title: "Vue",
      subtitle: "Advanced",
    },
  ];

  const backend = [
    {
      img: node,
      title: "NodeJS",
      subtitle: "Advanced",
    },
    {
      img: django,
      title: "Django",
      subtitle: "Basic",
    },
    {
      img: mongodb,
      title: "MongoDB",
      subtitle: "Intermediate",
    },
    {
      img: sql,
      title: "SQL",
      subtitle: "Basic",
    },
  ];
  return (
    <section
      className={`${styles.skills} section`}
      id="skills">
      <h2 className={`section__title`}>Skills</h2>
      <span className={`section__subtitle`}>My favorite skills</span>

      <div
        className={`${styles.skills__container} container grid section__border`}>
        {/* Skill 1 */}
        <div className={styles.skills__content}>
          <h3 className={styles.skills__title}>
            <i className="ri-braces-line"></i> Frontend Development
          </h3>

          <div className={styles.skills__info}>
            {frontendSkills.map((item, index) => (
              <div
                className={styles.skills__data}
                key={index}>
                <div className={styles.skills__blob}>
                  <Image
                    src={item.img}
                    alt="Skills"
                  />
                </div>

                <h3 className={styles.skills__name}>{item.title}</h3>
                <span className={styles.skills__subtitle}>{item.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Skill 2 */}
        <div className={styles.skills__content}>
          <h3 className={styles.skills__title}>
            <i className="ri-database-2-fill"></i> Backend Development
          </h3>

          <div className={styles.skills__info}>
            {backend.map((item, index) => (
              <div
                className={styles.skills__data}
                key={index}>
                <div className={styles.skills__blob}>
                  <Image
                    src={item.img}
                    alt="Skills"
                  />
                </div>

                <h3 className={styles.skills__name}>{item.title}</h3>
                <span className={styles.skills__subtitle}>{item.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
