import React from 'react';
import style from './about.module.css';
import Right from './components/Right';
import Left from './components/Left';

function About() {
  return (
    <div className={style.pageWrapper}>
      <div className={style.aboutWrapper}>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default About;
