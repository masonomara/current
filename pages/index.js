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
import DescriptionLast from "../components/descriptionLast";
import StyleLink from "../components/styleLink";

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
<meta name="title" content="CURRENT MEDIA COMPANY" />
<meta name="description" content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://currentmediacompany.com/" />
<meta property="og:title" content="CURRENT MEDIA COMPANY" />
<meta property="og:description" content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services." />
<meta property="og:image" content="https://currentmediacompany.com/socialshare--overlay2.gif" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://currentmediacompany.com/" />
<meta property="twitter:title" content="CURRENT MEDIA COMPANY" />
<meta property="twitter:description" content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services." />
<meta property="twitter:image" content="https://currentmediacompany.com/socialshare--overlay2.gif" />
        <meta
          name="icon"
          content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Current Media Company"
        subtitle="Share With Friends"
        link="email : info@currentmediacompany.com"
        linkhref="mailto:info@currentmediacompany.com"
      />

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Description
            title="CURRENT : HOME"
            description="Current Media Company is a full-service digital content and design company connecting people with brands through shared passions."
            first={true}
          />

          <StyleLink
            href="mailto:info@currentmediacompany.com"
            title="EMAIL : info@currentmediacompany.com"
            mobileTitle="info@currentmediacompany.com"
            level="1"
          />
          <Description
            title="SERVICES : CURRENT MEDIA COMPANY"
            description="• Our client relationships thrive on strategy and service. From concept development to impactful videos and production-level websites, we offer personalized solutions to improve your metrics."
          />
          <StyleLink
            href="/services"
            title="VIEW ALL SERVICES"
            mobileTitle="VIEW ALL SERVICES"
          />
          <ServiceList width="2" serviceProps={serviceProps} max={4} />
          <Description
            title="WORK : CURRENT MEDIA COMPANY"
            description="• Our portfolio showcases our dedication to connecting brands with digital content. With 20 years of combined experience in photography, videography, web design, and e-commerce."
          />
                    <StyleLink
            href="/clients"
            title="VIEW ALL CLIENTS"
            mobileTitle="VIEW ALL CLIENTS"
          />
          <ClientList
            width="2"
            clientProps={clientProps}
            activeClientValues={allServices || []}
            max={8}
          />
          <DescriptionLast
            title="ABOUT : CURRENT MEDIA COMPANY"
            description="• We are a full-service creative agency that specializes in photography, videography, web design, and e-commerce. We help businesses connect with their customers through shared passions, using the latest technology and creative techniques. Feel free to reach out to us using the contact information below."
            description2="If you have a project in mind or want to learn more about our services, feel free to reach out to us using the contact information provided below."
          />
        </div>
      </div>
    </Layout>
  );
}
