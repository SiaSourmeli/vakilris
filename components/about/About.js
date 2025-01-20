import styles from "./about.module.css";

export default function About() {
  return (
    <div id="about" className="container">
      <div className={styles.aboutContainer}>
        <div>
          <h1 className="header">About</h1>
          <p className={styles.aboutText}>
            The Evolutionary Genomics Group (EGG), led by Dr. Nikolaos Vakirlis,
            is affiliated with the Hellenic Pasteur Institute, part of the
            international Pasteur Network. It is located at the historical
            Pasteur campus near Athens city center.
          </p>
          <p className={styles.aboutText}>
            Our group’s research focuses on evolutionarily novel genes, aiming
            to understand how and why they originate, with a special interest on
            the process of de novo gene birth. Little is known about novel
            genes, also known as “orphans” yet they are found in the genome of
            nearly every species known to science. This makes their study one of
            the most exciting research areas in evolution and genomics. We also
            aim to understand the rules that govern the evolution of
            antimicrobial peptides, a natural weapon of organisms against
            pathogens with strong therapeutic potential. As a computational
            group we explore and implement existing cutting-edge computational
            molecular evolution, comparative ‘omics, phylogenetics and machine
            learning methods, but also innovate to produce new ones.
          </p>
        </div>
        <div className={styles.imageWrap}>
          <img
            src="https://ucarecdn.com/74129383-8ae0-4d66-b3d7-e3f03b290d0b/egggroupphoto.jpg"
            className={styles.aboutImage}
            alt="team"
          />
        </div>
      </div>
    </div>
  );
}
