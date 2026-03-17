import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  canonical?: string
  structuredData?: object
}

const SEO: React.FC<SEOProps> = ({
  title = 'Faith Foundation Rwanda - Empowering Vulnerable Children & Women Since 2012',
  description = 'Faith Foundation Rwanda empowers vulnerable children and women since 2012. We provide education, child sponsorship, income generation activities, medical insurance, and shelter projects in Kinigi, Rwanda.',
  keywords = 'Faith Foundation, Rwanda, vulnerable children, women empowerment, charity, nonprofit, NGO, child sponsorship, poverty alleviation, Kinigi, education, skills training, community development, Rwanda charity, children\'s rights, women\'s empowerment, social justice, humanitarian aid',
  image = 'https://www.faithfoundation.rw/images/og-image.jpg',
  url = 'https://www.faithfoundation.rw',
  type = 'website',
  canonical = 'https://www.faithfoundation.rw',
  structuredData
}) => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Faith Foundation Rwanda",
    "url": "https://www.faithfoundation.rw",
    "logo": "https://www.faithfoundation.rw/images/logo.png",
    "description": description,
    "foundingDate": "2012-06-06",
    "founder": {
      "@type": "Person",
      "name": "Faith UWANTEGE"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kinigi Sector",
      "addressCountry": "Rwanda"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+250 786 714 717",
      "contactType": "customer service",
      "email": "faithfoundation@gmail.com"
    },
    "sameAs": [
      "https://www.faithfoundation.rw"
    ],
    "areaServed": "Rwanda",
    "knowsLanguage": "English, Kinyarwanda",
    "mission": "To fight poverty among people through improving children's experiences and life chances to find in themselves solutions to their own daily problems hence reducing impacts of poverty.",
    "vision": "To empower and bringing hope to vulnerable children and women as well as being voice of voiceless children at risk in Rwanda."
  }

  const nonprofitData = {
    "@context": "https://schema.org",
    "@type": "Nonprofit",
    "name": "Faith Foundation Rwanda",
    "url": "https://www.faithfoundation.rw",
    "description": description,
    "foundingDate": "2012-06-06",
    "founder": "Faith UWANTEGE",
    "taxID": "NGO",
    "nonprofitStatus": "Registered NGO",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kinigi Sector",
      "addressCountry": "Rwanda"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+250 786 714 717",
      "contactType": "customer service",
      "email": "faithfoundation@gmail.com"
    },
    "areaServed": "Rwanda",
    "knowsAbout": [
      "Child sponsorship",
      "Women empowerment",
      "Education",
      "Poverty alleviation",
      "Community development",
      "Income generation activities"
    ]
  }

  const structuredDataToUse = structuredData || organizationData

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Faith Foundation Rwanda" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Faith Foundation Rwanda" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@FaithFoundationRW" />
      <meta property="twitter:creator" content="@FaithFoundationRW" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="application-name" content="Faith Foundation Rwanda" />
      <meta name="apple-mobile-web-app-title" content="Faith Foundation Rwanda" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataToUse)}
      </script>

      {/* Additional NonProfit Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(nonprofitData)}
      </script>
    </Helmet>
  )
}

export default SEO
