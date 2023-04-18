import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import Hero from '../components/hero'
import ServiceList from '../components/serviceList'
import styles from '../styles/services.module.css'

import { createClient } from 'contentful'

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

export async function getStaticProps() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });
  const serviceRes = await client.getEntries({ content_type: 'service' });

  return {
    props: { serviceProps: serviceRes.items },
  };

}




export default function Services({ serviceProps }) {
  return (
    <Layout>
      <Head>
        <title>SERVICES : CURRENT MEDIA COMPANY</title>
        <meta name="description" content="A combined 20 years of experience in our specialized services. We are proud to present scalable and flexible content and services that improve your bottom line." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        title="Services"
      />
      <Description 
        title="CURRENT : SERVICES"
        description="A combined 20 years of experience in our specialized services. We are proud to present scalable and flexible content and services that improve your bottom line."
      />
      <ServiceList
        width="2"
        serviceProps={serviceProps}
      />
    </Layout>
  )
}
