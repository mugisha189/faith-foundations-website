import { defineConfig } from '@sanity/cli'

export default defineConfig({
  projectId: 'your-project-id',
  dataset: 'production',
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
