import Head from 'next/head'
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <title>Evolutionary Genomics Group</title>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </Head>
      <Header />
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      <Footer />
    </>
  );
}
