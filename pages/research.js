import Layout from "../components/layout";
import styles from "../styles/research.module.css";

export default function Research() {
  return (
    <Layout>
      <div id="research">
        <h1 className="header">Research</h1>
        <p>Research in the EGG falls along the three following axes:</p>
        <h2 className={styles.title}>
          Elucidating the process of de novo gene birth, or how genomic noise
          can give rise to protein novelty
        </h2>
        <p className={styles.paragraph}>
          How new genes originate is a fundamental question in biology. Genetic
          novelty underlies molecular, phenotypic and organismal novelty and
          might even be linked to major evolutionary transitions such as the
          rise of eusociality. Understanding how, when and why novel genes arise
          is therefore essential to understand evolution at every level of
          biological organization. For a long time, new genes and protein
          functions were believed to result exclusively through tinkering and
          recombination, using pre-existing genes and gene parts as raw
          material. Consequently, processes such as duplication and divergence,
          gene fusion and fission, exon shuffling, or horizontal gene transfer
          have been extensively studied and their importance is established.
          Nonetheless, a radically different route to genetic novelty exists: a
          novel gene can evolve from entirely non-coding sequences in a process
          known as de novo gene emergence. Long considered so improbable as to
          be impossible, de novo genes have now been found in most eukaryotic
          lineages and can have central, even essential cellular functions. Yet
          much about de novo gene emergence remains unknown. Using population
          and evolutionary genomics approaches we study how genomic “randomness”
          is forged by evolution into a sequence that encodes fully functional
          protein with a defined structure and biological role. Our main model
          is the budding yeast S. cerevisiae as well as other Saccharomycotina
          yeasts.
        </p>
        <p className={styles.paragraph}>
          We also actively study the alternative to de novo gene emergence,
          extreme sequence divergence, which can lead to sequences “appearing”
          as entirely novel while having homologues that are undetectable. In
          the past we have quantified this process using synteny-based
          approaches and we are currently exploring machine learning as a means
          to uncover such “erased” homologous relationships from junk sequence
          similarity search results.
        </p>

        <h2 className={styles.title}>
          Understanding the evolutionary origins and dynamics of antimicrobial
          peptides as a path toward wiser applications
        </h2>
        <p className={styles.paragraph}>
          Antimicrobial peptides (AMPs) are short proteins that are used by
          almost all organisms in defense against bacteria, fungi, viruses, and
          parasites. AMPs have simple structures and broad-spectrum activity,
          which they exert mostly through interaction with cellular membranes.
          Their natural defensive potency means that AMPs have significant
          promise for use as alternative antibiotics and are thus extremely
          important in the face of the global antibiotic resistance crisis. To
          optimally harness AMPs for therapeutic purposes it is critical to
          understand the evolutionary forces that have shaped their natural
          diversity.
        </p>
        <p className={styles.paragraph}>
          Comparative analyses have shown that, while some AMPs appear to be
          ancient, many are restricted to specific taxonomic groups and even
          single species. This raises the question of how novel AMPs originate.
          Comparing AMP sequences and entire AMP repertoires across species can
          not only show us which AMPs are undergoing adaptive evolution, but
          also uncover synergistic effects which can lead to functional insights
          and guide the translational application of AMPs. In both vertebrates
          and invertebrates AMPs also act as regulators of the host’s gut
          microbiome, helping to maintain a healthy community of microbes.
          Looking at this dual role of AMPs through an evolutionary lens can
          help us better understand their impact on host-microbe interactions.
        </p>
        <p className={styles.paragraph}>
          We aim to elucidate the mechanisms of evolution of AMP novelty and
          diversity in sequence, expression, and structure. By doing so we
          believe that it is possible to leverage the patterns of natural
          evolution of AMPs into testable hypotheses and knowledge that can lead
          to more optimal therapeutic applications. To achieve these goals, we
          take a large-scale genome and transcriptome-mining approach, to
          identify known and putative novel AMPs in thousands of existing animal
          genomes. We then analyze these data using comparative, evolutionary
          and structure-based techniques, as well as machine learning and
          experimental validation.
        </p>

        <h2 className={styles.title}>
          Human microproteins: regulation, evolution, and role in disease
        </h2>
        <p className={styles.paragraph}>
          In recent years it has become evident that functional short proteins
          can be translated out of small Open Reading Frames (sORFs) found
          outside of known protein-coding genes. Such “microproteins” can have
          regulatory, structural or signaling roles, and can have considerable
          phenotypic consequences. In human, high throughput studies have
          identified thousands of consistently expressed microproteins, many of
          which are unambiguously functional, while the biological relevance of
          others is still uncertain. From an evolutionary standpoint, it has now
          been shown that a significant percentage of human microproteins lack
          sequence conservation. Some are even human-specific, with unequivocal
          evidence that they emerged entirely de novo from previously noncoding
          genomic regions. Furthermore, evidence is accumulating for the
          implication of microproteins in various diseases, including cancer.
          Our group studies human microproteins from an evolutionary and
          biomedical perspective, using computational tools. We want to
          understand why and in which contexts entirely novel human
          microproteins become pathogenic and how their expression is regulated.
          How do microprotein properties change during evolution and why do some
          ultimately evolve into longer full-blown proteins while others do not?
        </p>
      </div>
    </Layout>
  );
}
