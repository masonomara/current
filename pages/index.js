import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import ServiceCard from '../components/serviceCard';
import ClientCard from '../components/clientCard';
import Hero from '../components/hero'
import ServiceList from '../components/serviceList'
import styles from "../styles/home.module.css"

import { Red_Hat_Display } from 'next/font/google'
import { Red_Hat_Mono } from 'next/font/google'
import { Red_Hat_Text } from 'next/font/google'

const redHatMono = Red_Hat_Mono({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
})

import { Swiper, SwiperSlide } from 'swiper/react';

import { createClient } from 'contentful'

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

export async function getStaticProps() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });
  const serviceRes = await client.getEntries({ content_type: 'service' });
  const clientRes = await client.getEntries({ content_type: 'client' });

  return {
    props: { serviceProps: serviceRes.items, clientProps: clientRes.items },
  };

}



export default function Home({ clientProps, serviceProps }) {

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
          <Description className={styles.gapper}
            title="CURRENT : SERVICES"
            description="A combined 20 years of experience in our specialized services. We are proud to present scalable and flexible content and services that improve your bottom line."
            border={ false }
          />
          <ServiceList
            width="2"
            serviceProps={serviceProps}
          />
        </div>
        <div className={styles.wrapper}>
          <Description 
            title="CURRENT : SELECTED WORK"
            description="A common theme in our work is content we’re passionate about and creating opportunities to bring people together."
          />

        <div className={styles.clientList}>
        {
            clientProps.map((client) => (
              (<ClientCard
                key={client.fields.id}
                client={client}
                fullWidth={true}
              />)
            ))
          }
        </div>
        </div>
      </div>
    </Layout>
  )
}
