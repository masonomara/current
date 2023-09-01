import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'
import DescriptionBlocks from '../components/descriptionBlocks'

import Hero from '../components/hero'
import DescriptionStaff from '../components/descriptionStaff'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>ABOUT : CURRENT MEDIA COMPANY</title>
        <meta name="description" content="Connecting brands and people through shared passions. Specializing in photography, videography, websites, and e-commerce services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        title="ABOUT CURRENT"
      />
      <Description 
        title="CURRENT : ABOUT"
        description="Consistent themes in our work include projects that have an opportunity to bring people together and projects involved in fields that we are passionate about. These types of projects include events, music, renewable and eco-friendly products, food and drink, travel, outdoor sports, fashion, design, and connecting people."
        border={ true }
      />
            <Description 
        title="CURRENT : Themes"
        description="Consistent themes in our work include projects that have an opportunity to bring people together and projects involved in fields that we are passionate about. These types of projects include events, music, renewable and eco-friendly products, food and drink, travel, outdoor sports, fashion, design, and connecting people."
        border={ true }
      />
      <DescriptionBlocks
        title="CURRENT : EQUIPMENT and TECHNOLOGY"
        descriptionOneTitle="Cameras"
        descriptionOne="We work with high-growth clients who need scalable themes in their project so they can create a consistent and memorable brand."
        descriptionTwoTitle="Lighting"
        descriptionTwo="Our commitment to quality means that every service we offer is backed by industry-leading technology and equipment. We want to provide you with nothing short of excellence."
        descriptionThreeTitle="Audio"
        descriptionThree="We take pride in considering unique and resourceful solutions to any challenge or decision we work with our clients on."
        descriptionFourTitle="Technology"
        descriptionFour="At the core of our work is a deep appreciation for creativity and originality. We are constantly exploring new ideas for every project."
      />
      <DescriptionStaff />
    </Layout>
  )
}
