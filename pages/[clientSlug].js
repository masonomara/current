import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const clientRes = await client.getEntries({
    content_type: 'client'
  })

  const paths = clientRes.items.map(item => {
    return {
      params: { clientSlug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'client',
    'fields.slug': params.clientSlug
  })

  return {
    props: { client: items[0] }
  }

}

export default function ClientPage({ client }) {
  return (
    <div>{client.fields.title}</div>
  )
}
