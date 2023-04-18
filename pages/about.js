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
        <meta name="description" content="Consistent themes in our work include projects involved in fields that we are passionate about. These types of projects include events, music, renewable and eco-friendly products, food and drink, travel, outdoor sports, fashion, design, and connecting people." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        title="ABOUT CURRENT"
      />
      <Description 
        title="CURRENT : Themes"
        description="Consistent themes in our work include projects that have an opportunity to bring people together and projects involved in fields that we are passionate about. These types of projects include events, music, renewable and eco-friendly products, food and drink, travel, outdoor sports, fashion, design, and connecting people."
        border={ true }
      />
      <DescriptionBlocks
        title="CURRENT : Values"
        descriptionOneTitle="Scalability"
        descriptionOne="We work with high-growth clients who need scalable themes in their project so they can create a consistent and memorable brand."
        descriptionTwoTitle="Quality"
        descriptionTwo="With each service we present, we are offering an opportunity to work with industry-leading technology and equipment."
        descriptionThreeTitle="Ingenuity"
        descriptionThree="We take pride in considering unique and resourceful solutions to any challenge or decision we work with our clients on."
        descriptionFourTitle="Creativity"
        descriptionFour="At the core of our work is a deep appreciation for creativity and originality. We are constantly exploring new ideas for every project."
      />
      <DescriptionStaff />
    </Layout>
  )
}
