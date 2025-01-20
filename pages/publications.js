import styles from "../styles/publications.module.css";
import Layout from "../components/layout";
import publications from "../content/publications.json";

export default function Publications() {
  return (
    <Layout>
      <div id="publications">
        <h1 className="header">Publications</h1>

        <section>
          {publications.length > 0 ? (
            publications.map((pub, index) => (
              <div key={index} className={styles.publicationItem}>
                <p>
                  <strong>{pub.authors}</strong> <br />
                  <em>{pub.title}</em>.<br></br>
                  {pub.journal}
                  {pub.volume && ` ${pub.volume}`}
                  {pub.pages && `, ${pub.pages}`} ({pub.year}).
                </p>
                {pub.doi && (
                  <div>
                    <span>DOI: </span>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.doi}
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
