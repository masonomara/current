// work.js

import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import ClientList from '../components/clientList'
import Hero from '../components/hero'

import { createClient } from 'contentful'

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

export async function getStaticProps() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });
  const clientRes = await client.getEntries({ content_type: 'client' });

  return {
    props: { clientProps: clientRes.items },
  };

}

export default function Work({ clientProps }) {
  return (
    <Layout>
      <Head>
        <title>WORK : CURRENT MEDIA COMPANY</title>
        <meta name="description" content="A common theme in our work is promoting content that we’re both passionate about and creates opportunities to bring people together. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        title="Our Work"
      />
      <Description 
        title="CURRENT : WORK"
        description="A common theme in our work is content we’re passionate about and creating opportunities to bring people together."        border={ true }
      />
      <ClientList
        width="2"
        clientProps={clientProps}
      />
    </Layout>
  )
}
