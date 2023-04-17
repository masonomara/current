import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>CONTACT : CURRENT MEDIA COMPANY</title>
        <meta name="description" content="Our relationship with clients begin with strategy and how we will improve their business metrics, and continue with providing services such as concept development, content creation, packaging, photography, tech development, marketing campaigns, and video." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Description 
        title="Contact Us"
        description="Our relationship with clients begin with strategy and how we will improve their business metrics, and continue with providing services such as concept development, content creation, packaging, photography, tech development, marketing campaigns, and video. We are founded and based in Asbury Park, New Jersey."
        link="email : info@currentmediacompany.com"
        linkhref="mailto:email : info@currentmediacompany.com"
        border={ true }
        spacer={ true }
      />
    </Layout>
  )
}
