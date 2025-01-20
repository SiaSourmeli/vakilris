import styles from "../styles/Funding.module.css";
import Layout from "../components/layout";
import funding from "../content/funding.json";

export default function Funding() {
  return (
    <Layout>
      <div id="research" className="container">
        <h1 className="header">Funding</h1>

        <section>
          {funding.length > 0 ? (
            funding.map((fund, index) => (
              <div key={index} className={styles.fundingItem}>
                <div className={styles.textWrap}>
                  <p>
                    <strong>{fund.years}</strong>
                    <br />
                  </p>
                  <p>{fund.description}.</p>
                </div>
                <div className={styles.logoWrap}>
                  {fund.logo && (
                    <img
                      src={fund.logo}
                      className={styles.fundersLogo}
                      alt={`Logo for ${fund.title}`}
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading Funding...</p>
          )}
        </section>
      </div>
    </Layout>
  );
}
