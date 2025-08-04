import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import hamburger from '../../assets/header_hamburger.svg';
import style from './Header.module.css';
import { useState, useRef, useEffect } from 'react';

export function gotoHome(navigation) {
  navigation('/home');
}
export function gotoCaseStudy(navigation) {
  navigation('/case-study');
}
export function About(navigation) {
  navigation('/about');
}

function Header() {
  const navigation = useNavigate();
  const [ishamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);

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
    if (ishamburgerClicked) setHideMenu(true);
  };

  const handleHamburgerClick = () => {
    if (ishamburgerClicked) {
      setIsHamburgerClicked(false);
      setHideMenu(false);
    } else {
      setIsHamburgerClicked(true);
    }
  };

  // 모바일에서의 스타일 계산
  const getHeaderStyle = () => {
    if (isMobile) {
      return {
        width: '152px',
        height: ishamburgerClicked ? '78px' : '165px',
      };
    } else {
      return {
        width: ishamburgerClicked ? '207px' : '489px',
        height: '52px',
      };
    }
  };

  const getInsideStyle = () => {
    if (isMobile) {
      return {
        opacity: ishamburgerClicked ? 0 : 1,
        transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
        display: hideMenu ? 'none' : 'flex',
      };
    } else {
      return {
        opacity: ishamburgerClicked ? 0 : 1,
        pointerEvents: ishamburgerClicked ? 'none' : 'auto',
        transition: 'opacity 0.4s',
        display: hideMenu ? 'none' : 'flex',
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
