import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const serviceRes = await client.getEntries({
    content_type: 'service'
  })

  const paths = serviceRes.items.map(item => {
    return {
      params: { serviceSlug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'service',
    'fields.slug': params.serviceSlug
  })

  return {
    props: { service: items[0] }
  }

}

export default function ServicePage({ service }) {
  return (
    <div>{service.fields.title}</div>
  )
}
