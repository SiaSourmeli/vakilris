"use client";
import { useEffect, useState } from "react";
import styles from './Header.module.css'
import Button from  '../burgerButton';
// import Theme from "../theme";
// import Logo from "../logo";

const Header = () => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });
  const [hideHeader, setHideHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((lastState) => {
        return {
          y: window.scrollY,
          lastY: lastState.y,
        };
      });

      if (!menuOpen && window.scrollY > 250) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollData.y > 250 && scrollData.y - scrollData.lastY > 0) {
      // scrollData.y - scrollData last > 0  this means we are scrolling UP
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  }, [scrollData]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${hideHeader ? styles.slideUp : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.headerContainer}>
          <div className={styles.logoHeader}>
            <a href= ''>
              {/* <Logo /> */}
            </a>
          </div>

          <div
            className={`${styles.navMenu} ${
              menuOpen ? styles.navMenuOpen : ""
            }`}
          >
            <ul>
              <li>
                <a href="about" className={styles.navLink}>
                  About
                </a>
              </li>

              <li>
                <a href="team" className={styles.navLink}>
                  Team
                </a>
              </li>

              <li>
                <a href="research" className={styles.navLink}>
                  Research
                </a>
              </li>

              <li>
                <a href="contact" className={styles.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <Theme /> */}
          <Button active={menuOpen} onClick={handleMenuClick} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
