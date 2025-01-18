import styles from "../styles/Research.module.css";
import Layout from "../components/layout";
import funding from "../content/funding.json";

export default function Funding() {
  return (
    <Layout>
      <div id="research" className="container">
        <div>
          <h1 className="header">Funding</h1>
          <div>
            <section>
              {funding.length > 0 ? (
                funding.map((fund, index) => (
                  <div key={index} className={styles.publicationItem}>
                    <p>
                      <strong>{fund.years}</strong>
                      <br />
                    </p>
                    <p>{fund.description}.</p>
                  </div>
                ))
              ) : (
                <p>Loading publications...</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
