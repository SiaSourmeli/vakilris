import styles from "./card.module.css";
import people from "../../content/people.json";

export default function Card() {
  return (
    <div className={styles.peopleContainer}>
      {people.map((person, index) => (
        <figure key={index} className={styles.card}>
          <a rel="noopener" target="_blank" className={styles.imageFigure} href={person.email}>
            <img
              className={`${styles.image} ${styles.circle}`}
              src={person.photo}
              alt={person.name}
            />
          </a>

          
            <figcaption className={styles.cardText}>
              <div>
                <div className={styles.name}>{person.name}</div>
                <div>{person.title}</div>
                <div>{person.email}</div>
              </div>

              <div className={styles.CV}>
                <a href={person.CV} target="_blank" rel="noopener noreferrer">
                  Link to CV
                </a>
              </div>
            </figcaption>
          
        </figure>
      ))}
    </div>
  );
}
