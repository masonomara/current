


import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'client'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: false
  }
}

{/*export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: 'client',
    'fields.slug': params.slug
  })

  return {
    props: {
      client: res[0]
    }
  }

}*/}

export default function ClientPage({ client }) {
  return (
    <div>
      nut waz here
    </div>
  )
}