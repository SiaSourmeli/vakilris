import styles from "./card.module.css";
import people from '../../content/people.json'

export default function Card() {
  return (
    <div>
      {people.map((person, index) =>
      
      <figure key={index} className={styles.firImageFigure}>
        <a
          className={styles.firImageover}
          rel="noopener"
          target="_blank"
          href={person.email}
        >
          <img
            className={`${styles.firAuthorImage} ${styles.firClickCircle}`}
            src={person.photo} 
            alt={person.name}
          />
         
        </a>

        <figcaption>
          <div className={styles.figAuthorFigureTitle}>{person.name}</div>
          <div className={styles.figAuthorFigureTitle}>{person.title}</div>
          <div className={styles.figAuthorFigureTitle}>{person.email}</div>
          <div className={styles.figAuthorFigureTitle}>
              <a href={person.CV} target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </div>
        </figcaption>
      </figure>
      
      )}
      
    </div>
  );
}
