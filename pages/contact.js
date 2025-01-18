import Layout from "../components/layout";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <div id="contact" className={`${styles.contactContainer} container`}>
        <div className={styles.contact}>
          <div>
            <h1 className="header">Contact</h1>

            <div>
              <h2 className={styles.contactSub}>Email</h2>
              <a
                href="n.vakirlis@pasteur.gr"
                className={`${styles.contactInfo} underline-hover-effect`}
              >
                n.vakirlis@pasteur.gr
              </a>

              <h2 className={styles.contactSub}>Telephone</h2>
              <a
                href="tel:210 64 78524"
                className={`${styles.contactInfo} underline-hover-effect`}
              >
                +30 210 64 78524
              </a>

              <h2 className={styles.contactSub}>Address</h2>
              <p className={styles.contactInfo}>
                We are located at the ground level of Building no. 3 at the
                Hellenic Pasteur Institute
                <strong>Hellenic Pasteur Institute</strong> 127 Vasilissis
                Sofias Avenue 115 21, Athens, Greece
              </p>

              <div className={styles.buttonWrap}>
                <a
                  href="https://maps.app.goo.gl/YdjgXWq4uXzW97gFA"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
