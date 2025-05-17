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
        <Card
          photo={
            "https://ucarecdn.com/dd389d82-7fb6-4fce-9d26-23426b1de034/-/preview/1000x1000/-/quality/smart_retina/-/format/auto/"
          }
          name={"Your face here?"}
          title={
            "We are always seeking motivated candidates to apply for PhD and postdoctoral fellowships."
          }
        >
          <div>
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
          </div>
        </Card>
      </section>
    </Layout>
  );
}
