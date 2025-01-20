import styles from "./card.module.css";
import people from "../../content/people.json";

export default function Card() {
  return (
    <div className={styles.peopleContainer}>
      {people.map((person, index) => (
        <figure key={index} className={styles.card}>
          <div className={styles.imageFigure}>
            <img
              className={`${styles.image} ${styles.circle}`}
              src={person.photo}
              alt={person.name}
            />
          </div>

          <figcaption className={styles.cardText}>
            <div>
              <div className={styles.name}>
                <strong>{person.name}</strong>
              </div>
              <div>{person.title}</div>
              <div>{person.location}</div>
              <a
                href={`mailto:${person.email}`}
                className="emailLink underline-hover-effect"
              >
                {person.email}
              </a>
            </div>

            {person.CV && (
              <div className={styles.CV}>
                <a
                  href={person.CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="emailLink underline-hover-effect"
                >
                  CV
                </a>
              </div>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
