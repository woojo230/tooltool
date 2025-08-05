import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import hamburger from '../../assets/header_hamburger.svg';
import style from './Header.module.css';
import { useState, useRef, useEffect } from 'react';
import useIframeStore from '../../store/useIframStore';

function Header() {
  const navigation = useNavigate();
  const [ishamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const headerRef = useRef(null);
  const closeIframe = useIframeStore((state) => state.closeIframe);

  const closeMenu = () => {
    setIsHamburgerClicked(false);
  };

  const gotoHome = (navigation) => {
    closeIframe();
    navigation('/home');
    closeMenu();
  };

  const gotoCaseStudy = (navigation) => {
    closeIframe();
    navigation('/case-study');
    closeMenu();
  };

  const About = (navigation) => {
    closeIframe();
    navigation('/about');
    closeMenu();
  };

  // 모바일 환경 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTransitionEnd = () => {
    if (!ishamburgerClicked) {
      setHideMenu(true);
    }
  };

  const handleHamburgerClick = () => {
    if (ishamburgerClicked) {
      setIsHamburgerClicked(false);
    } else {
      setIsHamburgerClicked(true);
      setHideMenu(false);
    }
  };

  // 모바일에서의 스타일 계산
  const getHeaderStyle = () => {
    if (isMobile) {
      return {
        width: '152px',
        height: ishamburgerClicked ? '165px' : '80px',
      };
    } else {
      return {
        width: ishamburgerClicked ? '489px' : '207px',
        height: '52px',
      };
    }
  };

  const getInsideStyle = () => {
    if (isMobile) {
      return {
        opacity: ishamburgerClicked ? 1 : 0,
        transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
        display: ishamburgerClicked || !hideMenu ? 'flex' : 'none',
      };
    } else {
      return {
        opacity: ishamburgerClicked ? 1 : 0,
        pointerEvents: ishamburgerClicked ? 'auto' : 'none',
        transition: 'opacity 0.4s',
        display: ishamburgerClicked || !hideMenu ? 'flex' : 'none',
      };
    }
  };

  return (
    <header>
      <div className={style.headerContainer}>
        <div
          className={style.header}
          style={getHeaderStyle()}
          ref={headerRef}
          onTransitionEnd={handleTransitionEnd}
        >
          <div
            className={style.headerLogo}
            onClick={() => gotoHome(navigation)}
          >
            <img src={logo} alt="tooltool" />
          </div>

          <div className={style.inside} style={getInsideStyle()}>
            <ul>
              <li
                className={style.headerItem}
                onClick={() => gotoCaseStudy(navigation)}
              >
                <a>case study</a>
              </li>
              <li
                className={style.headerItem}
                onClick={() => About(navigation)}
              >
                <a>about us</a>
              </li>
            </ul>
          </div>

          <div className={style.headerButton} onClick={handleHamburgerClick}>
            <span className={style.hamburger}>
              <img src={hamburger} alt="..." />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
