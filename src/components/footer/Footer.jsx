import { useEffect, useState } from 'react';
import tooltoolFooter from '../../assets/footer/Vector.svg';
import tooltoolSmallFooter from '../../assets/footer/smallVector.svg';
import style from './Footer.module.css';

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={style.footerWrapper}>
      <img
        src={isMobile ? tooltoolSmallFooter : tooltoolFooter}
        alt=""
        className={style.footerContainer}
      />
      <div className={style.innerContainer}>
        {isMobile ? (
          <>
            <p>©tooltool 2025</p>
          </>
        ) : (
          <>
            <p>©tooltool 2025</p>
            <p>Custom Design Tool Archive</p>
            <p>@tooltool.design</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
