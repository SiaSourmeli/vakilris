import Layout from "../components/layout";
import styles from "../styles/news.module.css";
import { getEntries } from "../library/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NewsImage from "../components/news-image";

export async function getStaticProps() {
  const news = await getEntries("news", {
    order: "-fields.date", // newest first
  });
  return {
    props: {
      news,
    },
  };
}

export default function News({ news }) {
  return (
    <Layout>
      <div id="news">
        <h1 className="header">News and other lab activities </h1>

        <section >
          {news.map((entry) => (
            <div key={entry.sys.id} className={styles.card}>
              <div className={styles.content}>
                <h3 className={styles.date}>
                  {new Date(entry.fields.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                <h2 className={styles.title}>{entry.fields.title}</h2>
                <NewsImage entry={entry} />
                <div className={styles.text}>
                  {documentToReactComponents(entry.fields.text)}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section >
          {news.map((entry) => (
            <div key={entry.sys.id} className={styles.card}>
              <div className={styles.content}>
                <NewsImage entry={entry} />
                <h2 className={styles.title}>{entry.fields.title}</h2>
                <h3 className={styles.date}>
                  {new Date(entry.fields.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                <div className={styles.text}>
                  {documentToReactComponents(entry.fields.text)}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}