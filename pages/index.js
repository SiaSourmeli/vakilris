import Layout from "../components/layout";
import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Evolutionary Genomics Group </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
     <Hero />
      <About />
    </Layout>
  );
}
