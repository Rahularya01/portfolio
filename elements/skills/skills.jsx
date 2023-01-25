import Image from "next/image";
import React from "react";
import styles from "./skills.module.scss";

const Skills = () => {
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
            <i class="ri-braces-line"></i> Frontend Developer
          </h3>

          <div className={styles.skills__info}>
            <div className={styles.skills__data}>
              <div className={styles.skills__blob}>
                {/* <Image src={} alt="Skills"/> */}
              </div>

              <h3 className={styles.skills__name}></h3>
              <span className={styles.skills__subtitle}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
