import React from 'react';
import styles from './Left.module.css';

function Left() {
  return (
    <div className={styles.sectionBlock}>
      <div className={styles.aboutPageDiv}>
        <p className={styles.sectionLabel}>About Us</p>
        <h1>
          Tooltool is a showcase platform where tools and designers come
          together. That is why our name is not a singular “tool” but
          “tooltool,” a plural form that reflects community. The tools we share
          include a series of graphics, typography, patterns, effects, and more.
          Whether you’re here to play or to spark ideas for your next project,
          you’re always welcome! And if you’re a designer building your own
          tools, we’d love to showcase your work. Join our showcase and
          community of designers shaping the next design era!
        </h1>
      </div>

      <div className={styles.aboutPageDiv}>
        <p className={styles.sectionLabel}>Our Mission</p>
        <h1>
          A new design era has arrived! Graphics are now easily created by code,
          with designers building tools with the help of LLMs. While generating
          visuals has never been easier, it takes another step of curation,
          design thinking, and craft to turn these tools into branding and
          real-world projects. At Tooltool, our mission is to showcase creative
          code-based tools in action, inspiring designers as they implement them
          for their future projects.
        </h1>
      </div>
    </div>
  );
}

export default Left;
