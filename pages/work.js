// Import necessary components and libraries
import Head from 'next/head';
import Layout from '../components/layout';
import Description from '../components/description';
import ClientList from '../components/clientList';
import Hero from '../components/hero';
import styles from "../styles/Work.module.css";
import { useState, useEffect } from 'react';

// Import necessary fonts
import { Red_Hat_Mono } from 'next/font/google';

// Import necessary packages for Contentful integration
import { createClient } from 'contentful';

// Set up font configurations
const redHatMono = Red_Hat_Mono({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

// Set up Contentful access credentials
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

// Fetch data for static rendering of page
export async function getStaticProps() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });

  const clientRes = await client.getEntries({ content_type: 'client' });
  console.log("clientRes: ", clientRes);

  const clientProps = clientRes.items;
  console.log("clientProps: ", clientProps);

  const allServices = clientProps.map(client => client.fields.services.map(service => service.fields.title)).flat();
  console.log("allServices: ", allServices);

  return {
    props: {
      clientProps,
      allServices,
    },
  };
}

// Define the Work page component
export default function Work({ clientProps, allServices }) {

  // Set up state for filtering client data
  const [activeClientValues, setActiveClientValues] = useState(allServices || []);
  const [filterMenu, setFilterMenu] = useState(false);

  // Reset active client values when all services change
  useEffect(() => {
    setActiveClientValues(allServices);
  }, [allServices]);

  // Get unique list of all services offered
  const clientValues = Array.from(new Set(clientProps.map(client => client.fields.services.map(service => service.fields.title)).flat()));

    // Render the Work page
    return (
      <Layout>
        <Head>
          <title>WORK : CURRENT MEDIA COMPANY</title>
          <meta name="description" content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        {/* Render the hero component */}
        <Hero 
          title="Our Work"
        />
  
        {/* Render the description component */}
        <Description 
          title="CURRENT : WORK"
          description="Our portfolio is a testament to our dedication to connecting brands and people through captivating digital content. With a combined 20 years of experience in photography, videography, web design, and e-commerce services, we're passionate about turning ideas into impactful realities."        
        />
  
        {/* Render the filter menu */}
        <div className={styles.filter__wrapper}>
          <div className={styles.filter__title}>
            <span 
              className={redHatMono.className} 
              onClick={() => setFilterMenu(prevState => !prevState)}>
              {/* Render an up or down arrow, depending on the state of the filter menu */}
              {filterMenu ? <span>[↑]</span> : <span>[↓]</span> }
              &nbsp;Filter by service
            </span>
          </div>
  
          {/* Render the list of available services */}
          <div className={`${styles.services__wrapper} ${filterMenu ? "" : styles.services__wrapper__close}`}>
              {/* Render a button to select all services */}
              <div 
                onClick={() => setActiveClientValues(clientValues)} 
                className={`${redHatMono.className} ${styles.services__link}`}>
                {activeClientValues.length > 1 ? <span>[X]</span> : <span>[ ]</span> }
                <span>&nbsp;&nbsp;&nbsp;ALL SERVICES</span>
              </div>
  
              {/* Render a button for each individual service */}
              {clientValues.map(value => (
                <div 
                  key={value} 
                  onClick={() => setActiveClientValues([value])} 
                  className={`${redHatMono.className} ${styles.services__link}`}>
                  {/* Render a check mark or a box, depending on whether the service is selected */}
                  {activeClientValues.includes(value) && activeClientValues.length === 1 ? <span>[X]</span> : <span>[ ]</span> }
                  <span>&nbsp;&nbsp;&nbsp;{value}</span>
                </div>
              ))}
          </div>
        </div>
  
        {/* Render the list of clients */}
        <ClientList
          clientProps={clientProps}
          activeClientValues={activeClientValues}
        />
      </Layout>
  )
}
