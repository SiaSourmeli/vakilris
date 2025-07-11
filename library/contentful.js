import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getEntries(contentType, query = {}) {
  const entries = await client.getEntries({
    content_type: contentType,
    ...query,
  })
  return entries.items
}