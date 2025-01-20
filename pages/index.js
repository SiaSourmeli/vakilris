import Layout from "../components/layout";
import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";

export default function Home() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}
