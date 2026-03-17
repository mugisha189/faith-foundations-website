import SEO from '../components/SEO'

interface PageSEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
}

const HomePageSEO: React.FC<PageSEOProps> = ({ title, description, keywords, image }) => {
  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      image={image}
      url="https://www.faithfoundation.rw"
      type="website"
      canonical="https://www.faithfoundation.rw"
    />
  )
}

export default HomePageSEO
