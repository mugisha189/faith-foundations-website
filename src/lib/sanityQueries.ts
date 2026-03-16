import client from './sanity'

export interface Campaign {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  description?: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  gallery?: Array<{
    asset: {
      _ref: string
    }
    alt?: string
  }>
  category: string
  goal: number
  raised: number
  currency: string
  startDate: string
  endDate?: string
  location?: string
  organizer?: string
  status: 'active' | 'completed' | 'upcoming' | 'cancelled'
  featured: boolean
  content?: any[]
  donationLink?: string
  contactEmail?: string
  tags?: string[]
  publishedAt: string
}

export interface News {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  gallery?: Array<{
    asset: {
      _ref: string
    }
    alt?: string
  }>
  category: string
  author?: {
    name: string
    slug: {
      current: string
    }
  }
  authorName?: string
  publishedAt: string
  readingTime?: number
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  content?: any[]
  tags?: string[]
  relatedCampaigns?: Campaign[]
  relatedNews?: News[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: {
      asset: {
        _ref: string
      }
    }
  }
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  bio?: string
  image?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  role?: string
  email?: string
  social?: {
    twitter?: string
    linkedin?: string
    facebook?: string
    instagram?: string
  }
}

export interface Organization {
  _id: string
  name: string
  tagline?: string
  logo?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  foundingDate?: string
  founder?: {
    name: string
    bio?: string
    image?: {
      asset: {
        _ref: string
      }
      alt?: string
    }
  }
  motivation?: string
  vision: string
  mission: string
  mainActivities?: Array<{
    title: string
    description: string
    icon?: string
  }>
  statistics?: Array<{
    label: string
    value: string
    unit?: string
  }>
  contact: {
    email: string
    phone: string
    website?: string
    address?: string
  }
  supportOptions?: Array<{
    type: 'prayer' | 'volunteer' | 'financial'
    title: string
    description: string
    ctaText?: string
  }>
  financialNeeds?: string[]
  socialMedia?: Array<{
    platform: string
    url: string
  }>
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: {
      asset: {
        _ref: string
      }
    }
  }
}

// Campaign queries
export async function getAllCampaigns(): Promise<Campaign[]> {
  const query = `
    *[_type == "campaign" && status == "active"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      description,
      mainImage,
      gallery,
      category,
      goal,
      raised,
      currency,
      startDate,
      endDate,
      location,
      organizer,
      status,
      featured,
      content,
      donationLink,
      contactEmail,
      tags,
      publishedAt
    }
  `
  return client.fetch(query)
}

export async function getFeaturedCampaigns(): Promise<Campaign[]> {
  const query = `
    *[_type == "campaign" && featured == true && status == "active"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      goal,
      raised,
      currency,
      startDate,
      endDate,
      location,
      organizer,
      status,
      publishedAt
    }
  `
  return client.fetch(query)
}

export async function getCampaignBySlug(slug: string): Promise<Campaign | null> {
  const query = `
    *[_type == "campaign" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      description,
      mainImage,
      gallery,
      category,
      goal,
      raised,
      currency,
      startDate,
      endDate,
      location,
      organizer,
      status,
      featured,
      content,
      donationLink,
      contactEmail,
      tags,
      publishedAt
    }
  `
  return client.fetch(query, { slug })
}

export async function getCampaignsByCategory(category: string): Promise<Campaign[]> {
  const query = `
    *[_type == "campaign" && category == $category && status == "active"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      goal,
      raised,
      currency,
      startDate,
      endDate,
      location,
      organizer,
      status,
      publishedAt
    }
  `
  return client.fetch(query, { category })
}

// News queries
export async function getAllNews(): Promise<News[]> {
  const query = `
    *[_type == "news" && status == "published"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      author-> {
        name,
        slug
      },
      authorName,
      publishedAt,
      readingTime,
      featured,
      status,
      tags,
      seo {
        metaTitle,
        metaDescription,
        ogImage
      }
    }
  `
  return client.fetch(query)
}

export async function getFeaturedNews(): Promise<News[]> {
  const query = `
    *[_type == "news" && featured == true && status == "published"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      author-> {
        name,
        slug
      },
      authorName,
      publishedAt,
      readingTime,
      featured,
      status,
      tags,
      seo {
        metaTitle,
        metaDescription,
        ogImage
      }
    }
  `
  return client.fetch(query)
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  const query = `
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      gallery,
      category,
      author-> {
        name,
        slug,
        bio,
        image,
        role
      },
      authorName,
      publishedAt,
      readingTime,
      featured,
      status,
      content,
      tags,
      relatedCampaigns[]-> {
        _id,
        title,
        slug,
        mainImage,
        category,
        goal,
        raised,
        currency,
        status
      },
      relatedNews[]-> {
        _id,
        title,
        slug,
        mainImage,
        category,
        publishedAt
      },
      seo {
        metaTitle,
        metaDescription,
        ogImage
      }
    }
  `
  return client.fetch(query, { slug })
}

export async function getNewsByCategory(category: string): Promise<News[]> {
  const query = `
    *[_type == "news" && category == $category && status == "published"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      author-> {
        name,
        slug
      },
      authorName,
      publishedAt,
      readingTime,
      featured,
      status,
      tags,
      seo {
        metaTitle,
        metaDescription,
        ogImage
      }
    }
  `
  return client.fetch(query, { category })
}

// Author queries
export async function getAllAuthors(): Promise<Author[]> {
  const query = `
    *[_type == "author"] | order(name asc) {
      _id,
      name,
      slug,
      bio,
      image,
      role,
      email,
      social
    }
  `
  return client.fetch(query)
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const query = `
    *[_type == "author" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      bio,
      image,
      role,
      email,
      social
    }
  `
  return client.fetch(query, { slug })
}

// Search queries
export async function searchCampaigns(searchTerm: string): Promise<Campaign[]> {
  const query = `
    *[_type == "campaign" && status == "active" && (title match $searchTerm || excerpt match $searchTerm || tags[] match $searchTerm)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      goal,
      raised,
      currency,
      startDate,
      endDate,
      location,
      organizer,
      status,
      publishedAt
    }
  `
  return client.fetch(query, { searchTerm: `*${searchTerm}*` })
}

export async function searchNews(searchTerm: string): Promise<News[]> {
  const query = `
    *[_type == "news" && status == "published" && (title match $searchTerm || excerpt match $searchTerm || tags[] match $searchTerm)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      author-> {
        name,
        slug
      },
      authorName,
      publishedAt,
      readingTime,
      featured,
      status,
      tags,
      seo {
        metaTitle,
        metaDescription,
        ogImage
      }
    }
  `
  return client.fetch(query, { searchTerm: `*${searchTerm}*` })
}

// Organization queries
export async function getOrganization(): Promise<Organization | null> {
  const query = `
    *[_type == "organization"][0] {
      _id,
      name,
      tagline,
      logo,
      foundingDate,
      founder,
      motivation,
      vision,
      mission,
      mainActivities,
      statistics,
      contact,
      supportOptions,
      financialNeeds,
      socialMedia,
      seo
    }
  `
  return client.fetch(query)
}
