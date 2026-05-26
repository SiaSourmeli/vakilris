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
  }, [menuOpen]);

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

  const handleLinkClick = () => {
    setMenuOpen(false);
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
                <Link
                  href="/"
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/people"
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  People
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/funding"
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  Funding
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
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
