import { defineType, defineField } from '@sanity/types'

export default defineType({
  name: 'campaign',
  title: 'Campaign',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Health', value: 'health' },
          { title: 'Education', value: 'education' },
          { title: 'Food', value: 'food' },
          { title: 'Shelter', value: 'shelter' },
          { title: 'Water', value: 'water' },
          { title: 'Emergency', value: 'emergency' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'goal',
      title: 'Fundraising Goal',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'raised',
      title: 'Amount Raised',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [
          { title: 'USD ($)', value: 'USD' },
          { title: 'EUR (€)', value: 'EUR' },
          { title: 'GBP (£)', value: 'GBP' },
        ],
      },
      initialValue: 'USD',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Completed', value: 'completed' },
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Campaign',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'donationLink',
      title: 'Donation Link',
      type: 'url',
      description: 'External donation page link (optional)',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      type: 'email',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      goal: 'goal',
      raised: 'raised',
      media: 'mainImage',
      status: 'status',
    },
    prepare(selection) {
      const { title, category, goal, raised, media, status } = selection
      const percentage = goal > 0 ? Math.round((raised / goal) * 100) : 0
      return {
        title,
        subtitle: `${category} • ${status} • ${percentage}% funded ($${raised.toLocaleString()}/$${goal.toLocaleString()})`,
        media,
      }
    },
  },
})
