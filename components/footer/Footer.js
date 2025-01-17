import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.footerContainer}>
        <div className={styles.logoFooterContainer}>
          <a href="/" className={styles.logoFooter} aria-label="">
            {/* <Logo /> */}
            Home
          </a>
        </div>

        <ul className={styles.footerBlock}>
          <li className={styles.listItem}>
            <a
              href="research"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              Research
            </a>
          </li>

          <li className={styles.listItem}>
            <a
              href="people"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              People
            </a>
          </li>

          <li className={styles.listItem}>
            <a
              href="contact"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className={styles.footerBlock}>
          <li>
            <h3 className={styles.footerHeader}>Location</h3>
          </li>

          <li className={styles.listItem}>
            <div className={styles.locationWrap}>
              <svg
                className={styles.locationPin}
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 297 297"
              >
                <path d="M148.5 0A111 111 0 0 0 37.7 110.8c0 91 99.8 179.9 104 183.6a10.2 10.2 0 0 0 13.6 0c4.2-3.7 104-92.6 104-183.6A111 111 0 0 0 148.5 0zm0 272.7c-22-21.4-90.2-93-90.2-161.9a90.4 90.4 0 0 1 180.4 0c0 68.9-68.2 140.5-90.2 161.9z" />
                <path d="M148.5 59.2a51.5 51.5 0 0 0-51.3 51.6c0 28.5 23 51.6 51.3 51.6a51.5 51.5 0 0 0 51.3-51.6c0-28.5-23-51.6-51.3-51.6zm0 82.7a31 31 0 0 1-30.8-31.1 31 31 0 0 1 30.8-31.1 31 31 0 0 1 30.8 31.1 31 31 0 0 1-30.8 31.1z" />
              </svg>
              <a
                // href="https://maps.app.goo.gl/U9KhNbdZDH87ZqpS8"
                target="_blank"
                rel="noreferrer"
                className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
              >
                location
              </a>
            </div>
          </li>
        </ul>

        <ul className={styles.footerBlock}>
          <li>
            <h3 className={styles.footerHeader}>Contact</h3>
          </li>
          <li className={styles.listItem}>
            <a
              // href="mailto:laz.papanikos@gmail.com"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              mail?
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
