import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import DescriptionBlocks from '../components/descriptionBlocks'

import Hero from '../components/hero'
import DescriptionStaff from '../components/descriptionStaff'
import StyleLink from '../components/styleLink'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About : Current Media Company</title>
        <meta name="description" content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        title="ABOUT CURRENT MEDIA CO."
      />
      <Description 
        title="ABOUT : CURRENT MEDIA COMPANY"
        description="• Based in Asbury Park, New Jersey, Current Media is a full-service creative agency founded by Ty Decker, Mason O'Mara, and Ryan Whalen. We are set out to help create and support our client’s brands. Specializing in photography, videography, web design, and e-commerce, we help businesses connect with their customers through shared passions, using the latest technology and creative techniques."
        border={ true }
      />
                      <StyleLink
            href="mailto:info@currentmediacompany.com"
            title="EMAIL : info@currentmediacompany.com"
            mobileTitle="info@currentmediacompany.com"
            level="1"
          />
            <Description 
        title="OUR STYLE : CURRENT MEDIA COMPANY"
        description="• From national brands to ambitious businesses, our strategy is centered around aligning our clients' business metrics with user-centric design. We thrive on collaborating with brands and products that align with our passions, including events, music, eco-friendly and innovative products, food and drink, travel, outdoor sports, fashion, and creatives. Each project we complete is with a commitment to delivering results that matter."
        border={ true }
      />
      <DescriptionBlocks
        title="EQUIPMENT AND TECH : CURRENT MEDIA COMPANY"
        descriptionOneTitle="Cameras"
        descriptionOne="We work with high-growth clients who need scalable themes in their project so they can create a consistent and memorable brand."
        descriptionTwoTitle="Technology"
        descriptionTwo="Our commitment to quality means that every service we offer is backed by industry-leading technology and equipment. We want to provide you with nothing short of excellence."
        descriptionThreeTitle="Lighting"
        descriptionThree="We take pride in considering unique and resourceful solutions to any challenge or decision we work with our clients on."
        descriptionFourTitle="Audio"
        descriptionFour="At the core of our work is a deep appreciation for creativity and originality. We are constantly exploring new ideas for every project."
      />
      {/* <DescriptionStaff /> */}
    </Layout>
  )
}
