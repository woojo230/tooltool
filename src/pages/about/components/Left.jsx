import React from 'react';
import styles from './Left.module.css';

function Left() {
  return (
    <div className={styles.sectionBlock}>
      <div className={styles.aboutPageDiv}>
        <p className={styles.sectionLabel}>ABOUT US</p>
        <h1>
          We design—and we build tools for brands.
          <br />
          <br />
          Tooltool is a design studio and platform created by a designer couple
          from South Korea based in United States. We support each other but
          also thrive on friendly competition. In fact, Tooltool began as a
          playful bet: whose tool will get the most likes?
        </h1>
      </div>

      <div className={styles.aboutPageDiv}>
        <p className={styles.sectionLabel}>OUR MISSION</p>
        <h1>
          As designers, we've learned that creating beautiful work is essential,
          but maintaining consistency within established design systems can be
          challenging and labor intensive. That's why we built Tooltool: to make
          it simple and efficent for anyone who needs a design assets for their
          brands.
        </h1>
      </div>
    </div>
  );
}

export default Left;
