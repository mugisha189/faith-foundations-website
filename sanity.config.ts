import { defineConfig } from '@sanity/cli'

export default defineConfig({
  projectId: process.env.SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [
    // Add structure tool for better organization
    // Add vision tool for GROQ queries
  ],
  schema: {
    types: [
      './schemas/organization.ts',
      './schemas/author.ts',
      './schemas/campaign.ts',
      './schemas/news.ts',
    ],
  },
})
