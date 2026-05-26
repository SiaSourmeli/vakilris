import Layout from "../components/layout";
import styles from "../styles/research.module.css";

export default function Research() {
  return (
    <Layout>
      <div id="research">
        <h1 className="header">Research</h1>
        <h2 className={styles.title}>
          De novo gene birth and other evolutionary processes giving rise to
          protein novelty{" "}
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
          material. Yet we now know that entirely novel genes can also evolve
          from previously non-coding genomic sequences through a process known
          as de novo gene birth. We are only beginning to understand how this
          process unfolds and how important it truly is in evolution.
        </p>

        <p className={styles.paragraph}>
          Our group develops computational approaches and tools to identify de
          novo genes, retrace their emergence and subsequent evolution and
          understand if they can fold into novel protein structures. We are
          currently focusing on Saccharomycotina yeasts, human and large
          bacterial datasets. As an example, we recently showed that simple
          intergenic regulatory motifs in the S. cerevisiae genome have been
          repeatedly co-opted by evolution into de novo genes encoding
          transmembrane proteins (see figure below). In parallel, we are
          investigating extreme sequence divergence, which can lead to sequences
          “appearing” novel while having homologues that are undetectable by
          standard sequence similarity approaches. To do so, we combine
          previously developed synteny-based and machine learning methodologies
          for detecting extreme sequence divergence, as well as new structural
          and simulation-based approaches.
        </p>

        <figure className={styles.figure}>
          <img
            src="https://ucarecdn.com/0b2e764e-3474-4faf-85f2-7d4041b06cc0/research_pic_1.jpg"
            alt="De novo gene birth and transmembrane domain emergence in S. cerevisiae"
            className={styles.figureImage}
          />

          <figcaption className={styles.figureCaption}>
            In the budding yeast <i>S. cerevisiae</i>, repetitive DNA motifs in
            intergenic regions make de novo protein-coding genes forming within
            them likely to encode transmembrane domains. Figure from{" "}
            <a
              href="http://academic.oup.com/jeb/article/38/9/1272/8197917"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vakirlis and Fuqua 2025
            </a>
            .
          </figcaption>
        </figure>

        <h2 className={styles.title}>
          In silico detection and investigation of the evolutionary origins and
          dynamics of antimicrobial peptides in animals and bacteria
        </h2>
        <p className={styles.paragraph}>
          Antimicrobial peptides (AMPs) are small peptides used by almost all
          organisms in defense against bacteria, fungi, viruses, and parasites.
          AMPs have simple structures and broad-spectrum activity, which they
          exert mostly through interaction with cellular membranes. Their
          natural defensive potency means that AMPs have significant promise for
          use as alternative antibiotics and are thus extremely important in the
          face of the global antibiotic resistance crisis. To optimally harness
          AMPs for therapeutic purposes it is critical to understand the
          evolutionary forces that have shaped their natural diversity.
        </p>

        <p className={styles.paragraph}>
          Comparative analyses have shown that, while some AMPs appear to be
          ancient, many are restricted to specific taxonomic groups and even
          single species. This raises the question of how novel AMPs originate.
          Comparing AMP sequences and entire AMP repertoires across species can
          not only show us which AMPs are undergoing adaptive evolution, but
          also uncover synergistic effects which can lead to functional insights
          and guide the translational application of AMPs. In both vertebrates
          and invertebrates AMPs also act as regulators of the host’s
          microbiome, helping to maintain a healthy, balanced community. Looking
          at this dual role of AMPs through an evolutionary lens can help us
          better understand their impact on host-microbe interactions.{" "}
        </p>
        <p className={styles.paragraph}>
          We aim to elucidate the mechanisms of evolution of AMP novelty and
          diversity in sequence, expression, and structure. By doing so we
          believe that it is possible to leverage the patterns of natural
          evolution of AMPs into testable hypotheses and knowledge that can lead
          to better therapeutic applications. To achieve these goals, we develop
          and employ computational approaches to scan thousands of animal
          genomes. We then analyze these data using comparative, evolutionary
          and structure-based techniques, machine learning and experimental
          validation (see figure below). Through a similar approach, we are also
          focusing on bacterial AMPs, aka bacteriocins, aiming to detect them at
          scale in the global microbiome, unravel the functional and
          evolutionary consequences of horizontal bacteriocin transfer and study
          mechanisms of resistance to them.{" "}
        </p>
        <figure className={styles.figure}>
          <img
            src="https://ucarecdn.com/1bbed696-6508-4401-bdd4-f03c9ccc767d/research_pic_2jpg.png"
            alt="De novo gene birth and transmembrane domain emergence in S. cerevisiae"
            className={styles.figureImage}
          />

          <figcaption className={styles.figureCaption}>
            We are building an atlas of animal antimicrobial peptides (AMP)
            using genome mining, machine learning and experimental validation,
            aiming to understand how AMP innovation occurs in evolution.​
          </figcaption>
        </figure>
        <h2 className={styles.title}>
          Elucidating the sources of novelty in the antibiotic resistome
        </h2>
        <p className={styles.paragraph}>
          Our newest project aims to elucidate the genomic processes and context
          of the evolution of novel antibiotic resistance genes (ARGs) in
          bacteria. Our goal is to reconstruct the timing and mode of origin of
          known families of ARGs and to investigate the antibiotic resistance
          potential of novel bacterial microproteins to answer questions such
          as: what kind of genetic changes contribute to the emergence of new
          molecular functions within the antibiotic resistome? How crucial are
          self-resistance elements as a launching pad for novel ARGs? Can
          bacterial microproteins naturally emerge de novo and acquire
          bioactivity associated to antibiotic resistance? The project includes
          phylogenomic analyses, high-throughput functional screens of bacterial
          microproteins and functional metagenomics experiments.{" "}
        </p>
        <figure className={styles.figure}>
          <img
            src="https://ucarecdn.com/ea173348-ba9e-4e7b-a2ad-0a50da1dcfbc/research_pic_3jpg.png"
            alt="De novo gene birth and transmembrane domain emergence in S. cerevisiae"
            className={styles.figureImage}
          />

          <figcaption className={styles.figureCaption}>
            Various types of molecular and evolutionary processes can result in
            proteins acquiring new functions related to antibiotic resistance,
            thus enriching the “resistome”.​
          </figcaption>
        </figure>

        <h2 className={styles.title}>
          Evolution and regulation of human microproteins
        </h2>
        <p className={styles.paragraph}>
          In recent years it has become evident that functional short proteins
          can be translated out of small Open Reading Frames (sORFs) found
          outside of known protein-coding genes. Such “microproteins” can have
          regulatory, structural or signaling roles, exerting considerable
          phenotypic influence. In human, high throughput studies have
          identified thousands of consistently expressed microproteins, many of
          which are unambiguously functional, while the biological relevance of
          others is still uncertain. From an evolutionary standpoint, it has now
          been shown that a significant percentage of human microproteins lack
          sequence conservation. Some are even human-specific, with unequivocal
          evidence that they emerged entirely de novo from previously noncoding
          genomic regions. We are currently focusing on 1) the development of in
          silico methodologies to detect evidence of natural selection acting on
          sequences encoding microproteins in the human genome and 2)
          understanding how do microprotein properties change during evolution
          and why do some ultimately evolve into longer full-blown proteins
          while others do not.
        </p>
        <figure className={styles.figure}>
          <img
            src="https://ucarecdn.com/8c7b9260-786f-42ec-8831-e95876dfe85d/research_pic_4jpg.png"
            alt="De novo gene birth and transmembrane domain emergence in S. cerevisiae"
            className={styles.figureImage}
          />

          <figcaption className={styles.figureCaption}>
            We are developing sensitive comparative approaches, sketched here,
            that can detect protein-coding selection signal as it “comes online”
            on a newly-formed sORF, in conjunction with the timing of the de
            novo formation of that sORF. It will allow us to detect many
            previously unknown novel sORFs that are under selection, and hence
            functional. ​
          </figcaption>
        </figure>
      </div>
    </Layout>
  );
}
