import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "StudentVerify powered by sheerid.fastdiscountfinder.com - SheerID Discount Verification",
  description = "Professional SheerID student discount verification service. Get verified for exclusive student discounts from top brands. 100% success rate, 24-48 hour processing.",
  keywords = "student discounts, SheerID verification, student deals, college discounts, university savings",
  canonicalUrl = "https://sheerid.fastdiscountfinder.com",
  ogImage = "https://sheerid.fastdiscountfinder.com/og-image.jpg",
  structuredData = null
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "StudentVerify powered by sheerid.fastdiscountfinder.com",
      "url": "https://sheerid.fastdiscountfinder.com"
    }
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  )
}

export default SEOHead

