import styles from "./About.module.css";

export default function About() {
  return (
    <div id="about" className="container">
      <div className={styles.aboutContainer}>
        <div className={styles.textWrap}>
          <h1 className={`${styles.aboutHeader}`}>About</h1>
          <p className={styles.aboutText}>
            The Evolutionary Genomics Group (EGG), led by Dr. Nikolaos Vakirlis,
            is affiliated with the Hellenic Pasteur Institute, part of the
            international Pasteur Network. It is located at the historical
            Pasteur campus near Athens city center.
          </p>
          <p className={styles.aboutText}>
            We also aim to understand the rules that govern the evolution of
            antimicrobial peptides, a natural weapon of organisms against
            pathogens with potential as a therapeutic alternative. As a
            computational group we explore and implement existing cutting-edge
            computational molecular evolution, comparative ‘omics, phylogenetics
            and machine learning methods, but also innovate to produce new ones.
          </p>

          <p className={styles.aboutText}>
            As a computational group we explore and implement existing
            cutting-edge computational molecular evolution, comparative ‘omics,
            phylogenetics and machine learning methods, but also innovate to
            produce new ones.
          </p>

          <p className={styles.aboutText}>
            As a computational group we explore and implement existing
            cutting-edge computational molecular evolution, comparative ‘omics,
            phylogenetics and machine learning methods, but also innovate to
            produce new ones.
          </p>
        </div>
      </div>
    </div>
  );
}
