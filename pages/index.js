import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import ServiceCard from '../components/serviceCard';
import ClientCard from '../components/clientCard';
import Hero from '../components/hero'
import ServiceList from '../components/serviceList'
import ClientList from '../components/clientList';
import styles from "../styles/Home.module.css"
import WavesLogo from "../public/waves.svg"
import Link from 'next/link';

import { Red_Hat_Display } from 'next/font/google'
import { Red_Hat_Mono } from 'next/font/google'
import { Red_Hat_Text } from 'next/font/google'

const redHatMono = Red_Hat_Mono({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
})
const redHatText = Red_Hat_Text({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
})
const redHatDisplay = Red_Hat_Display({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
})

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



export default function Home({ clientProps }) {

console.log(clientProps)

  return (
    <Layout>
      <Head>
        <title>Current Media Company</title>
        <meta name="description" content="Current Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        title="Current Media Company"
        subtitle="share with friends."
        link="email : info@currentmediacompany.com"
        linkhref="mailto:email : info@currentmediacompany.com"
      />
      <div className={styles.container}>
          <div className={styles.wrapper}>
            <Description 
              title="CURRENT : HOME"
              description="Current Media Company is a full-service digital content and design company specializing in helping companies we love connect with people."
            />
            <ClientList
              width="2"
              clientProps={clientProps}
            />
          </div>
      </div>
    </Layout>
  )
}
