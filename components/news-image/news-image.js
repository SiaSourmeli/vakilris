import { useRef } from 'react';
import { useImageOrientation } from '../../hooks/use-image-orientation';
import styles from '../../styles/news.module.css';

export default function NewsImage({ entry }) {
  const imageRef = useRef(null);
  const orientation = useImageOrientation(imageRef);

  const imageUrl = `https:${entry.fields.newsImage.fields.file.url}`;
  const alt = entry.fields.title || 'News image';

  return (
    <div
      className={`${styles.imageWrapper} ${
        orientation === 'portrait' ? styles.portrait : styles.landscape
      }`}
    >
      <img
        ref={imageRef}
        src={imageUrl}
        alt={alt}
        className={styles.image}
      />
    </div>
  );
}