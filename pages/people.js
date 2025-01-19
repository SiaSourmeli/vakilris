import Layout from "../components/layout";
import Card from "../components/card";
import styles from "../styles/people.module.css";

export default function People() {
  return (
    <Layout>
      <div id="people" className="container">
        <h1 className="header">People</h1>
        <Card />
      </div>

      <hr className={styles.hr}></hr>
      <section className={styles.joinUsContainer}>
        <h2>Your face here?</h2>
        <p>
          We are always seeking motivated candidates to apply for PhD and
          postdoctoral fellowships.
        </p>
        <p>
          Interested candidates should get in contact with Dr. Vakirlis via
          email at{" "}
          <a href="mailto:n.vakirlis@pasteur.gr">n.vakirlis@pasteur.gr</a> and{" "}
          <a href="mailto:vakirlisnikos@gmail.com">vakirlisnikos@gmail.com</a>{" "}
          or on Bluesky (
          <a
            href="https://bsky.app/profile/vakirlis.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vakirlis.bsky.social
          </a>
          ).
        </p>
      </section>
    </Layout>
  );
}
