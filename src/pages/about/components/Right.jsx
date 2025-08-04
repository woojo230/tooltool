import React from 'react';
import styles from './Right.module.css';

function Right() {
  return (
    <div className={styles.sectionBlock}>
      <div className={styles.aboutPageDiv}>
        <p className={styles.sectionLabel}>CONTACT US</p>
        <div className={styles.contactGrid}>
          <div className={styles.contactGroup}>
            <p>Email</p>
            <p>
              <a href="mailto:sean001212q@gmail.com">sean001212q@gmail.com</a>
            </p>

            <p>Instagram</p>
            <p>
              <a
                href="https://instagram.com/tooltool.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tooltool.design
              </a>
            </p>
          </div>

          <p className={styles.textGap}></p>

          <p className={styles.sectionLabel}>Our Team</p>
          <div className={`${styles.contactGroup} ${styles.designerSection}`}>
            <p>Designers&nbsp;</p>
            <p>
              <a
                href="https://instagram.com/susu_sean"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sean Kim
              </a>
            </p>

            <p></p>
            <p>
              <a
                href="https://instagram.com/there4_go"
                target="_blank"
                rel="noopener noreferrer"
              >
                Angela Park
              </a>
            </p>
            <p></p>
          </div>
          <p></p>
          <div className={`${styles.contactGroup} ${styles.designerSection}`}>
            <p>Developer</p>
            <p>
              <a
                href="https://instagram.com/woojung_230"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aaron Woo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
