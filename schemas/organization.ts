import { defineType, defineField, defineArrayMember } from '@sanity/types'

export default defineType({
  name: 'organization',
  title: 'Organization',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'foundingDate',
      title: 'Founding Date',
      type: 'date',
    }),
    defineField({
      name: 'founder',
      title: 'Founder',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Founder Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'bio',
          title: 'Founder Bio',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'image',
          title: 'Founder Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'motivation',
      title: 'Project Motivation',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainActivities',
      title: 'Main Activities',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Activity Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Activity Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon name or emoji',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'unit',
              title: 'Unit',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'email',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'website',
          title: 'Website',
          type: 'url',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: 'supportOptions',
      title: 'Support Options',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Support Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Prayer', value: 'prayer' },
                  { title: 'Volunteer', value: 'volunteer' },
                  { title: 'Financial', value: 'financial' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'ctaText',
              title: 'Call to Action Text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'financialNeeds',
      title: 'Financial Needs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'logo',
    },
  },
})
