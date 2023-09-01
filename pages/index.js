import Head from "next/head";
import Layout from "../components/layout";
import Description from "../components/description";
import ServiceCard from "../components/serviceCard";
import ClientCard from "../components/clientCard";
import Hero from "../components/hero";
import ServiceList from "../components/serviceList";
import ClientList from "../components/clientList";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

export async function getStaticProps() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });
  const clientRes = await client.getEntries({ content_type: "client" });
  const serviceRes = await client.getEntries({ content_type: "service" });

  return {
    props: { clientProps: clientRes.items, serviceProps: serviceRes.items },
  };
}

export default function Home({ clientProps, serviceProps }) {
  const allServices = clientProps
    .map((client) =>
      client.fields.services.map((service) => service.fields.title)
    )
    .flat();

  return (
    <Layout>
      <Head>
        <title>CURRENT MEDIA COMPANY</title>
        <meta
          name="description"
          content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Current Media Company"
        subtitle="OUR SITE IS CURRENTLY UNDER CONSTRUCTION"
        link="email : info@currentmediacompany.com"
        linkhref="mailto:email : info@currentmediacompany.com"
      />
{/*
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Description
            title="CURRENT : HOME"
            description="Current Media Company is a full-service digital content and design company connecting people with brands through shared passions."
            first={true}
          />
          <Description
            title="SERVICES : CURRENT MEDIA COMPANY"
            description="• Our client relationships thrive on strategy and service. From concept development to impactful videos and production-level websites, we offer personalized solutions to improve your metrics."
          />
          <StyleLink href="/services" title="View All Services" />
          <ServiceList width="2" serviceProps={serviceProps} max={4} />
          <Description
            title="WORK : CURRENT MEDIA COMPANY"
            description="• Our portfolio showcases our dedication to connecting brands with digital content. With 20 years of combined experience in photography, videography, web design, and e-commerce."
          />
          <StyleLink href="/work" title="View All Work" />
          <ClientList
            width="2"
            clientProps={clientProps}
            activeClientValues={allServices || []}
            max={8}
          />
          <Description
            title="ABOUT : CURRENT MEDIA COMPANY"
            description="• We are a full-service creative agency that specializes in photography, videography, web design, and e-commerce. We help businesses connect with their customers through shared passions, using the latest technology and creative techniques."
            description2="If you have a project in mind or want to learn more about our services, feel free to reach out to us using the contact information provided below."
          />
        </div>
      </div>
      */}
    </Layout>
  );
}
