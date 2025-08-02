import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Clock, Star, ArrowRight } from 'lucide-react'
import deals from '../data/deals'
import SEOHead from '../components/SEOHead'

const HomePage = () => {
  const featuredDeals = deals.filter(deal => deal.id !== 'new-sheerid-student-deals-information').slice(0, 6)
  const averageSavings = '$500+' // Placeholder for average annual savings

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Verified",
      description: "Professional SheerID verification service with guaranteed success for students and non-students."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24-48 Hour Processing",
      description: "Fast turnaround time to get you saving money quickly"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Any Email Accepted",
      description: "Verify with any email address (Gmail, Outlook, iCloud, etc.) - no .edu required!"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Expert Support",
      description: "Dedicated customer service to help with any questions"
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "StudentVerify - SheerID Student Discount Verification Service",
    "description": "Professional SheerID student discount verification service. Get verified for exclusive student discounts from top brands like Hulu, The North Face, Autodesk, and more. Works for students and non-students, no .edu email required.",
    "url": "https://sheerid.fastdiscountfinder.com",
    "mainEntity": {
      "@type": "Service",
      "name": "SheerID Student Verification",
      "description": "Professional student verification service for accessing exclusive discounts, available for students and non-students using any email address.",
      "provider": {
        "@type": "Organization",
        "name": "StudentVerify"
      },
      "offers": {
        "@type": "Offer",
        "price": "65",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title="StudentVerify - SheerID Student Discount Verification Service | Get Verified in 24-48 Hours"
        description="Professional SheerID student discount verification service. Get verified for exclusive student discounts from top brands like Hulu, The North Face, Autodesk, and more. 100% success rate, 24-48 hour processing, $65 flat fee. Works for students and non-students, no .edu email required."
        keywords="student discounts, SheerID verification, student deals, college discounts, university savings, student verification service, Hulu student discount, North Face student discount, Autodesk student discount, non-student verification, any email verification"
        canonicalUrl="https://sheerid.fastdiscountfinder.com"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unlock Exclusive
              <span className="block text-yellow-300">Student Discounts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Get verified for SheerID student discounts in 24-48 hours, even if you're not a traditional student or don't have a .edu email. We accept any email address! Once verified for one, you get access to ALL available discounts for a minimum of 12 months, saving you an average of {averageSavings} annually. It's a no-brainer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/deals">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                  Browse Student Deals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/checkout/new-sheerid-student-deals-information">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3">
                  Get Verified Now - $65
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose StudentVerify?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make it easy and secure to access student discounts from your favorite brands, for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Student Deals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Popular discounts our users love most
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDeals.map((deal) => (
              <Card key={deal.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{deal.name}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {deal.discount}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {deal.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-gray-600">
                    {deal.description}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Savings:</span>
                      <span className="font-semibold text-green-600">{deal.savings}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Processing:</span>
                      <span className="font-semibold">{deal.processingTime}</span>
                    </div>
                  </div>
                  <Link to={`/deal/${deal.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Get Verified - $65
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/deals">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All {deals.length} Student Deals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who trust us for their SheerID verification needs, regardless of student status or email type.
          </p>
          <Link to="/checkout/new-sheerid-student-deals-information">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              Get Started Today - $65
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage

