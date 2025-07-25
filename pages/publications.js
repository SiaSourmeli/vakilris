import styles from "../styles/publications.module.css";
import Layout from "../components/layout";
import { getEntries } from "../library/contentful";

export async function getStaticProps() {
  const publications = await getEntries("publications");
  return {
    props: {
      publications,
    },
  };
}

export default function Publications({ publications }) {
  return (
    <Layout>
      <div id="publications">
        <h1 className="header">Publications</h1>

        <section>
          {(!publications || publications.length === 0) && (
            <p>Content coming soon...</p>
          )}

          {publications.length > 0 ? (
            publications.map((pub, index) => (
              <div key={index} className={styles.publicationItem}>
                <p>
                  <strong>{pub.fields.authors}</strong> <br />
                  <em>{pub.fields.title}</em>.<br></br>
                  {pub.fields.journal}
                  {pub.fields.volume && ` ${pub.fields.volume}`}
                  {pub.fields.pages && `, ${pub.fields.pages}`} ({pub.fields.year}).
                </p>
                {pub.fields.doi && (
                  <div>
                    <span>DOI: </span>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.fields.doi}
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>Loading publications...</p>
          )}
        </section>
      </div>
    </Layout>
  );
}
