import Layout from "../components/layout";
import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <div id="contact" className="container">
        <div className={styles.contact}>
          <h1 className="header">Contact</h1>

          <div>
            <h2 className={styles.contactSub}>Email</h2>
            <a
              href="n.vakirlis@pasteur.gr"
              className={`${styles.contactInfo} emailLink underline-hover-effect`}
            >
              n.vakirlis@pasteur.gr
            </a>

            <h2 className={styles.contactSub}>Telephone</h2>
            <a
              href="tel:210 64 78524"
              className={`${styles.contactInfo} emailLink underline-hover-effect`}
            >
              +30 210 64 78524
            </a>

            <h2 className={styles.contactSub}>Social</h2>
            <div className={styles.mediaContainer}>
              <div className={styles.mediaWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{ width: "20px" }}
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>

                <a
                  href="https://www.linkedin.com/in/nikolaos-vakirlis/"
                  target="_blank"
                  rel="noreferrer"
                  className="emailLink underline-hover-effect"
                >
                  nikolaos-vakirlis
                </a>
              </div>

              <div className={styles.mediaWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{ width: "20px" }}
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 247.4c14.5-30 54-85.8 90.7-113.3c26.5-19.9 69.3-35.2 69.3 13.7c0 9.8-5.6 82.1-8.9 93.8c-11.4 40.8-53 51.2-90 44.9c64.7 11 81.2 47.5 45.6 84c-67.5 69.3-97-17.4-104.6-39.6c0 0 0 0 0 0l-.3-.9c-.9-2.6-1.4-4.1-1.8-4.1s-.9 1.5-1.8 4.1c-.1 .3-.2 .6-.3 .9c0 0 0 0 0 0c-7.6 22.2-37.1 108.8-104.6 39.6c-35.5-36.5-19.1-73 45.6-84c-37 6.3-78.6-4.1-90-44.9c-3.3-11.7-8.9-84-8.9-93.8c0-48.9 42.9-33.5 69.3-13.7c36.7 27.5 76.2 83.4 90.7 113.3z" />
                </svg>

                <a
                  href="https://bsky.app/profile/vakirlis.bsky.social"
                  target="_blank"
                  rel="noreferrer"
                  className="emailLink underline-hover-effect"
                >
                  vakirlis.bsky.social
                </a>
              </div>
            </div>

            <h2 className={styles.contactSub}>Address</h2>
            <p>Hellenic Pasteur Institute</p>
            <p>
              <a
                href="https://maps.app.goo.gl/YdjgXWq4uXzW97gFA"
                target="_blank"
                rel="noreferrer"
                className="emailLink underline-hover-effect"
              >
                127 Vasilissis Sofias Avenue 115 21, Athens, Greece
              </a>
            </p>

            <p className={`${styles.contactInfo} ${styles.addressInfo}`}>
              We are located at the ground level of Building no. 3 at the
              Hellenic Pasteur Institute
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
