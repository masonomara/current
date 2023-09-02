import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../../components/layout";
import ServiceHero from "../../components/serviceHero";
import ServiceDescription from "../../components/serviceDescription";
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const serviceRes = await client.getEntries({
    content_type: "service",
  });

  const paths = serviceRes.items.map((item) => {
    return {
      params: { serviceSlug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });
  const { items } = await client.getEntries({
    content_type: "service",
    "fields.slug": params.serviceSlug,
  });

  const clientRes = await client.getEntries({ content_type: "client" });
  console.log("clientRes: ", clientRes);

  const clientProps = clientRes.items;
  console.log("clientProps: ", clientProps);

  const allServices = clientProps
    .map((client) =>
      client.fields.services.map((service) => service.fields.title)
    )
    .flat();
  console.log("allServices: ", allServices);

  return {
    props: { service: items[0], clientProps },
  };
};

export default function ServicePage({ service, clientProps }) {
  return (
    <Layout>
      <ServiceHero service={service} />
      <ServiceDescription service={service} clientProps={clientProps}/>
    </Layout>
  );
}
