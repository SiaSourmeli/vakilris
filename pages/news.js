import Layout from "../components/layout";

export async function getStaticProps() {
  const news = await getEntries("news", {
    order: "-fields.date", 
  });
  return {
    props: {
      news,
    },
  };
}

export default function News({ news }) {
  return (
    <Layout>
      <div id="news">
        <h1 className="header">News and other lab activities </h1>
          <p>Content coming soon..</p>
      </div>
    </Layout>
  );
}
