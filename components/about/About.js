import Hero from "../../components/hero";
import styles from "./About.module.css";

export default function About() {
  return (
    <div id="about">
      <Hero />
      <div className={styles.aboutContainer}>
        <div>
          <h1 className="header">About</h1>
          <p className={styles.aboutText}>
            The Evolutionary Genomics Group (EGG), led by Dr. Nikolaos Vakirlis,
            was established in 2024 at the Hellenic Pasteur Institute, part of
            the international Pasteur Network. It is located at the historical
            Pasteur campus near Athens city center.
          </p>
          <p className={styles.aboutText}>
            Our group’s interests center on the evolutionary origins of novel
            genes and the proteins they encode at the level of sequence,
            structure and function. Little is known about novel genes, also
            known as “orphans” yet they are found in the genome of nearly every
            species known to science. This makes their study one of the most
            exciting research areas in evolution and genomics. We are
            particularly interested in novelty with respect to antimicrobial
            peptides, natural weapons of organisms against pathogens with strong
            potential as alternative antibiotic drugs. As a (mostly)
            computational group, we explore, apply and develop cutting-edge
            computational molecular evolution, comparative ‘omics, phylogenetics
            and machine learning methodologies.
          </p>
        </div>
        {/* Pending place to put these */}
        {/* <div className={styles.aboutGraphics}>
          <img
            src="https://ucarecdn.com/bfda27db-d737-403a-bef8-39ebb0743165/about_pic1.png"
            alt="research 1"
            className={`${styles.graphic} ${styles.graphicLarge}`}
          />

          <img
            src="https://ucarecdn.com/3aac4245-d4b4-451e-9143-788c6ad6846c/about_pic2.png"
            alt="research 2"
            className={`${styles.graphic} ${styles.graphicSmall}`}
          />

          <img
            src="https://ucarecdn.com/556e95bb-c5c8-47da-9c5d-464fd87c6467/about_pic3.png"
            alt="research 3"
            className={`${styles.graphic} ${styles.graphicMedium}`}
          />
        </div> */}

        <div className={styles.imageWrap}>
          <img
            src="https://ucarecdn.com/cef5e627-e386-48a6-a40f-2e7d72869006/mostrecentgroupphoto1.jpg"
            className={styles.aboutImage}
            alt="team"
          />
        </div>
      </div>
    </div>
  );
}
