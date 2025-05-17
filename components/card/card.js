import styles from "./card.module.css";

export default function Card({
  name,
  email,
  title,
  location,
  image,
  CV,
  children,
}) {
  return (
    <figure className={styles.card}>
      {image?.fields?.file?.url && (
        <div className={styles.imageFigure}>
          <img
            className={`${styles.image} ${styles.circle}`}
            src={`https:${image.fields.file.url}`}
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

          {CV?.fields?.file?.url && (
            <div className={styles.CV}>
              <a
                href={`https:${CV.fields.file.url}`}
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