import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-03-19',
}

export const client = createClient(config)

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

export default client
