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
        <div className="header">
          <h1>Publications</h1>
          <div className={styles.subTitle}>
            <h4 style={{ fontWeight: 600 }}>Full Publications list available on</h4>
            <a
              href="https://scholar.google.gr/citations?user=72rh-ZsAAAAJ&hl=en&fbclid=IwY2xjawOCaRlleHRuA2FlbQIxMABicmlkETFESnBhZUNUVE4wUkVkM3hJc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHt81G8FWMiTg2uRIuumbL_uWnLrP3JYniqAchCKvPlyld382jgnsMVyA_I2i_aem_fwQqXrGalZRlq8ANqk7JAA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Google Scholar
            </a>
          </div>
        </div>

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
                  {pub.fields.pages && `, ${pub.fields.pages}`} (
                  {pub.fields.year}).
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
