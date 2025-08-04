import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import hamburger from '../../assets/header_hamburger.svg';
import style from './Header.module.css';
import { useState, useEffect, useCallback } from 'react';

// Navigation utility functions
export const gotoHome = (navigation) => navigation('/home');
export const gotoCaseStudy = (navigation) => navigation('/case-study');
export const About = (navigation) => navigation('/about');

// Menu state constants
const MENU_STATES = {
  CLOSED: 'closed',
  OPENING: 'opening',
  OPEN: 'open',
  CLOSING: 'closing',
};

// Responsive breakpoint
const MOBILE_BREAKPOINT = 768;

// Animation dimensions
const DIMENSIONS = {
  mobile: {
    width: 152,
    collapsed: 78,
    expanded: 165,
  },
  desktop: {
    collapsed: 207,
    expanded: 489,
    height: 52,
  },
};

function Header() {
  const navigation = useNavigate();
  const [menuState, setMenuState] = useState(MENU_STATES.CLOSED);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  // Mobile detection with cleanup
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Menu state helpers
  const isMenuVisible =
    menuState === MENU_STATES.OPENING || menuState === MENU_STATES.OPEN;
  const isMenuExpanded =
    menuState === MENU_STATES.OPEN || menuState === MENU_STATES.OPENING;

  // Event handlers
  const handleHamburgerClick = useCallback(() => {
    setMenuState((prevState) => {
      switch (prevState) {
        case MENU_STATES.CLOSED:
          return MENU_STATES.OPENING;
        case MENU_STATES.OPEN:
          return MENU_STATES.CLOSING;
        default:
          return prevState;
      }
    });
  }, []);

  const handleTransitionEnd = useCallback(() => {
    setMenuState((prevState) => {
      switch (prevState) {
        case MENU_STATES.OPENING:
          return MENU_STATES.OPEN;
        case MENU_STATES.CLOSING:
          return MENU_STATES.CLOSED;
        default:
          return prevState;
      }
    });
  }, []);

  // Style calculations
  const getHeaderStyle = () => {
    if (isMobile) {
      return {
        width: `${DIMENSIONS.mobile.width}px`,
        height: isMenuExpanded
          ? `${DIMENSIONS.mobile.expanded}px`
          : `${DIMENSIONS.mobile.collapsed}px`,
      };
    }

    return {
      width: isMenuExpanded
        ? `${DIMENSIONS.desktop.expanded}px`
        : `${DIMENSIONS.desktop.collapsed}px`,
      height: `${DIMENSIONS.desktop.height}px`,
    };
  };

  const getInsideStyle = () => {
    const baseStyle = {
      opacity: isMenuVisible ? 1 : 0,
      transition: 'opacity 0.4s ease-in-out',
    };

    if (isMobile) {
      return {
        ...baseStyle,
        display: menuState === MENU_STATES.CLOSED ? 'none' : 'flex',
      };
    }

    return {
      ...baseStyle,
      pointerEvents: isMenuVisible ? 'auto' : 'none',
      display: menuState === MENU_STATES.CLOSED ? 'none' : 'flex',
    };
  };

  return (
    <header>
      <div className={style.headerContainer}>
        <div
          className={style.header}
          style={getHeaderStyle()}
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
              <img src={hamburger} alt="menu" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
