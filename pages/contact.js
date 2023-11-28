import Head from 'next/head';
import Layout from '../components/layout';
import Description from '../components/description';
import StyleLink from '../components/styleLink';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>CONTACT : Current Media Company</title>
        <meta name="description" content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginTop: '60px' }}></div>
      <Description 
        title="Contact Us : CURRENT MEDIA COMPANY"
        description="Our relationship with clients begins with strategy and how we will improve their business metrics with a user-centric focus, and continues with providing services including photography, video, web design, marketing campaigns, social content, brand assets, e-commerce development, and support. We are founded and based in Asbury Park, New Jersey."
        spacer={true}
      />
      <StyleLink
        href="mailto:info@currentmediacompany.com"
        title="EMAIL : info@currentmediacompany.com"
        mobileTitle="info@currentmediacompany.com"
        level={1}
      />
    </Layout>
  );
}
