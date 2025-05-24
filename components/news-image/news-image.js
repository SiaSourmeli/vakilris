import styles from "../../styles/news.module.css";

export default function NewsImage({ entry }) {
  const imageUrl = `https:${entry.fields.newsImage.fields.file.url}`;
  const alt = entry.fields.title || "News image";

  const isPortrait =
    entry.fields.newsImage.fields.file.details.image.height >
    entry.fields.newsImage.fields.file.details.image.width;

  return (
    <div
      className={`${styles.imageWrapper} ${
        isPortrait === "portrait" ? styles.portrait : styles.landscape
      }`}
    >
      <img src={imageUrl} alt={alt} className={styles.image} />
    </div>
  );
}
