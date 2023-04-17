import Head from 'next/head'
import Layout from '../components/layout'
import Description from '../components/description'

import Hero from '../components/hero'

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
      <Description 
        title="CURRENT : Themes"
        description="Consistent themes in our work include projects that have an opportunity to bring people together and projects involved in fields that we are passionate about. These types of projects include events, music, renewable and eco-friendly products, food and drink, travel, outdoor sports, fashion, design, and connecting people."
        border={ true }
      />
    </Layout>
  )
}
