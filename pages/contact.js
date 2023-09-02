import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import StyleLink from '../components/styleLink'


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>CONTACT : CURRENT MEDIA COMPANY</title>
        <meta name="description" content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Description 
        title="Contact Us"
        description="Our relationship with clients begin with strategy and how we will improve their business metrics with a user-centric focus, and continue with providing services including photography, video, web design, marketing campaigns, social content, brand assets, e-commerce development and suppport. We are founded and based in Asbury Park, New Jersey."
        spacer={ true }
      />
      
                <StyleLink
            href="mailto:info@currentmediacompany.com"
            title="EMAIL : info@currentmediacompany.com"
            mobileTitle="info@currentmediacompany.com"
            level="1"
          />
    </Layout>
  )
}
