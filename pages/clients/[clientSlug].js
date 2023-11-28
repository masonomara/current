import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../../components/layout";
import ClientHero from "../../components/clientHero";
import ClientDescription from "../../components/clientDescription";
import Head from "next/head";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const clientRes = await client.getEntries({
    content_type: "client",
  });

  const paths = clientRes.items.map((item) => {
    return {
      params: { clientSlug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "client",
    "fields.slug": params.clientSlug,
  });

  return {
    props: { client: items[0] },
  };
};

export default function ClientPage({ client }) {
  return (
    <Layout>
            <Head>
        <title>{client.fields.title} : Current Media Company</title>
        <meta
          name={`${client.fields.title}`}
          content={`${client.fields.description}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientHero client={client} />
      <ClientDescription client={client} />
    </Layout>
  );
}
