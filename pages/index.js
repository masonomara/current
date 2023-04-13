import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import ServiceCard from '../components/serviceCard';
import Hero from '../components/hero'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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

  return {
    props: { serviceProps: serviceRes.items },
  };

}



export default function Home({ clientProps, serviceProps }) {

  console.log("serviceprps", serviceProps)

  return (
    <Layout>
      <Head>
        <title>Current Media Company</title>
        <meta name="description" content="Current Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        title="Current Media Company"
        subtitle="A FOCUS ON EFFECTIVE STRATEGY AND CONTENT READY TO SHARE WITH FRIENDS."
        link="info@currentmediacompany.com"
        linkhref="mailto:info@currentmediacompany.com"
      />
      <Description 
        title="Our Services"
        description="A combined 20 years of experience in our specialized services. We are proud to present scalable and flexible content and services that improve your bottom line."
        border={ false }
      />
      <div className="swiper-wrapper__wrapper">
        <Swiper
          navigation
          spaceBetween={16}
          slidesPerView={1.15}
          pagination={{clickable: true}}
          loop={false}
        >
          {serviceProps.map((service) => (
            <SwiperSlide key={service.fields.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Description 
        title="Themes"
        description="Consistent themes in our work include projects that have an opportunity to bring people together and projects involved in fields that we are passionate about. These types of projects include events, music, renewable and eco-friendly products, food and drink, travel, outdoor sports, fashion, design, and connecting people."
        border={ true }
      />
      <Description 
        title="Selected Work"
        description="A common theme in our work is promoting content that we’re both passionate about and creates opportunities to bring people together."
        border={ false }
      />
    </Layout>
  )
}
