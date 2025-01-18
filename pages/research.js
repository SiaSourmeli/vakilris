import styles from "../styles/Research.module.css";
import Layout from "../components/layout";
import publications from "../content/publications.json";

export default function Research() {
  return (
    <Layout>
      <div id="research" className="container">
        <div>
          <div>
            <h1 className="header">Research</h1>
            <div>
              <h2 className="subHeader">News and other lab activities </h2>
              <p>Content coming soon..</p>
            </div>
            <div>
              <h2 className="paddingTop subHeader">Publications</h2>
              <section>
                {publications.length > 0 ? (
                  publications.map((pub, index) => (
                    <div key={index} className={styles.publicationItem}>
                      <p>
                        <strong>{pub.authors}</strong> <br />
                        <em>{pub.title}</em>. 
                        <br></br>
                        {pub.journal}
                        {pub.volume && ` ${pub.volume}`}
                        {pub.pages && `, ${pub.pages}`} ({pub.year}).
                      </p>
                      {pub.doi && (
                        <div className={styles.doiContainer}>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
