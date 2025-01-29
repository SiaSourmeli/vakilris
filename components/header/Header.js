"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Button from "../burgerButton";
import Logo from "../logo";
import Image from "next/image";
import Link from "next/link";

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
      <nav>
        <div className={`${styles.headerContainer} container`}>
          <div>
            <Link href="/">
              {/* <Logo width="150px" /> */}
              <Image
                src="https://ucarecdn.com/7b26b6b4-2214-4359-9843-b3571d79eff8/-/preview/999x334/"
                alt="logo"
                width={150}
                height={50}
              />
            </Link>
          </div>

          <div
            className={`${styles.navMenu} ${
              menuOpen ? styles.navMenuOpen : ""
            }`}
          >
            <ul>
              <li>
                <a href="/" className={styles.navLink}>
                  About
                </a>
              </li>

              <li>
                <a href="research" className={styles.navLink}>
                  Research
                </a>
              </li>

              <li>
                <a href="publications" className={styles.navLink}>
                  Publications
                </a>
              </li>

              <li>
                <a href="people" className={styles.navLink}>
                  People
                </a>
              </li>

              <li>
                <a href="news" className={styles.navLink}>
                  News
                </a>
              </li>

              <li>
                <a href="funding" className={styles.navLink}>
                  Funding
                </a>
              </li>

              <li>
                <a href="contact" className={styles.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Button active={menuOpen} onClick={handleMenuClick} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
