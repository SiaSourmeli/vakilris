import Layout from "../components/layout";
import Card from "../components/card";
import styles from "../styles/people.module.css";
import people from "../content/people.json";

export default function People() {
  return (
    <Layout>
      <div id="people">
        <h1 className="header">People</h1>
        <div className={styles.peopleContainer}>
          {people.map((person, index) => (
            <Card key={index} {...person} />
          ))}
        </div>
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
          <a
            href="mailto:n.vakirlis@pasteur.gr"
            className="emailLink underline-hover-effect"
          >
            n.vakirlis@pasteur.gr
          </a>{" "}
          and{" "}
          <a
            href="mailto:vakirlisnikos@gmail.com"
            className="emailLink underline-hover-effect"
          >
            vakirlisnikos@gmail.com
          </a>{" "}
          or on Bluesky (
          <a
            href="https://bsky.app/profile/vakirlis.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="emailLink underline-hover-effect"
          >
            @vakirlis.bsky.social
          </a>
          ).
        </p>
      </section>
    </Layout>
  );
}
