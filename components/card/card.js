import styles from "./card.module.css";

export default function Card({
  name,
  email,
  title,
  location,
  image,
  cv,
  children,
}) {
  return (
    <figure className={styles.card}>
      {image && (
        <div className={styles.imageFigure}>
          <img
            className={`${styles.image} ${styles.circle}`}
            src={`https:${image.url}`}
            alt={name}
          />
        </div>
      )}

      <figcaption className={styles.cardText}>
        <div>
          <div className={styles.name}>
            <strong>{name}</strong>
          </div>
          <div>{title}</div>

          {location && <div>{location}</div>}

          {email && (
            <div>
              <a
                href={`mailto:${email}`}
                className="emailLink underline-hover-effect"
              >
                {email}
              </a>
            </div>
          )}

          {cv && (
            <div className={styles.CV}>
              <a
                href={`https:${cv.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="emailLink underline-hover-effect"
              >
                CV
              </a>
            </div>
          )}

          {children}
        </div>
      </figcaption>
    </figure>
  );
}
