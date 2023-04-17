// work.js

import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import ClientList from '../components/clientList'
import Hero from '../components/hero'
import styles from "../styles/Work.module.css"
import { useState, useEffect } from 'react'

import { createClient } from 'contentful'
import { Red_Hat_Mono, Red_Hat_Text } from 'next/font/google'

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

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;



export async function getStaticProps() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });
  const clientRes = await client.getEntries({ content_type: 'client' });
  const clientProps = clientRes.items;
  const allServices = clientProps.map(client => client.fields.services.map(service => service.fields.title)).flat();
  return {
    props: {
      clientProps,
      allServices,
    },
  };
}

export default function Work({ clientProps, allServices}) {

  const [activeClientValues, setActiveClientValues] = useState(allServices);
  const [filterMenu, setFilterMenu] = useState(false)


  useEffect(() => {
    setActiveClientValues(allServices);
  }, [allServices]);

  const clientValues = Array.from(new Set(clientProps.map(client => client.fields.services.map(service => service.fields.title)).flat()));


  /* console.log("clients", clientProps.map(client => client.fields.services.map(service => service.fields.title))) */







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
        description="A common theme in our work is content we’re passionate about and creating opportunities to bring people together."        
        border={ true }
      />
      <div className={styles.filter__wrapper}>
        <div className={styles.filter__title}>
          <span className={redHatMono.className} onClick={() => setFilterMenu(prevState => !prevState)}>{filterMenu ? <span>[↑]</span> : <span>[↓]</span> }&nbsp;Filter by service</span>
        </div>

        <div className={`${styles.services__wrapper} ${filterMenu ? "" : styles.services__wrapper__close}`}>
            <div onClick={() => setActiveClientValues(clientValues)} className={`${redHatMono.className} ${styles.services__link}`}>
            {activeClientValues.length > 1 ? <span>[X]</span> : <span>[ ]</span> }<span>&nbsp;&nbsp;&nbsp;ALL SERVICES</span>
            </div>
        {
          clientValues.map(value => (
            <div key={value} onClick={() => setActiveClientValues([value])} className={`${redHatMono.className} ${styles.services__link}`}>
              {activeClientValues.includes(value) && activeClientValues.length === 1 ? <span>[X]</span> : <span>[ ]</span> }<span>&nbsp;&nbsp;&nbsp;{value}</span>
            </div>
          ))
        }
        </div>
      </div>
      <ClientList
        clientProps={clientProps}
        activeClientValues={activeClientValues}
      />
    </Layout>
  )
}
