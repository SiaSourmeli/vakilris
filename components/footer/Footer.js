import styles from "./Footer.module.css";
import PasteurLogo from "../pasteurLogo";
import NetworkLogo from "../networkLogo";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className={styles.logoFooterContainer}>
          {/* <div className={styles.logoFooterContainer}> */}
            <div className={styles.logoFooter}>
              <PasteurLogo />
            </div>
            <div className={styles.logoFooter}>
              <NetworkLogo />
            </div>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
}
