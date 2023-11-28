import Head from "next/head";
import Layout from "../components/layout";
import Description from "../components/description";
import Hero from "../components/hero";
import ServiceList from "../components/serviceList";
import styles from "../styles/services.module.css";

import { createClient } from "contentful";
import StyleLink from "../components/styleLink";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

export async function getStaticProps() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });
  const serviceRes = await client.getEntries({ content_type: "service" });

  return {
    props: { serviceProps: serviceRes.items },
  };
}

export default function Services({ serviceProps }) {
  return (
    <Layout>
      <Head>
        <title>SERVICES : Current Media Company</title>
        <meta
          name="description"
          content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="Services" />
      <Description
        title="SERVICES : CURRENT MEDIA COMPANY"
        description="• Our client relationships are built on a foundation of strategy, innovation, and results. From concept development to content creation, packaging design to tech development, marketing campaigns to impactful videos, we offer personal approaches to improve your business metrics."
      />
      <StyleLink
        href="mailto:info@currentmediacompany.com"
        title="EMAIL : info@currentmediacompany.com"
        mobileTitle="info@currentmediacompany.com"
        level="1"
      />
      <ServiceList width="2" serviceProps={serviceProps} />
    </Layout>
  );
}
