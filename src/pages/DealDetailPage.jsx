import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Clock, Shield, ArrowLeft, ExternalLink } from 'lucide-react'
import deals from '../data/deals'

const DealDetailPage = () => {
  const { dealId } = useParams()
  const deal = deals.find(d => d.id === dealId)

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Deal Not Found</h1>
          <p className="text-gray-600 mb-6">The deal you're looking for doesn't exist.</p>
          <Link to="/deals">
            <Button>Browse All Deals</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedDeals = deals
    .filter(d => d.category === deal.category && d.id !== deal.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/deals" className="hover:text-blue-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Deals
            </Link>
            <span>/</span>
            <span className="text-gray-900">{deal.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{deal.name}</h1>
                  <Badge variant="outline" className="mb-4">
                    {deal.category}
                  </Badge>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-3 py-1">
                  {deal.discount}
                </Badge>
              </div>

              <p className="text-lg text-gray-700 mb-6">{deal.description}</p>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Deal Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Original Price:</span>
                      <span className="font-semibold">{deal.originalPrice || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Your Savings:</span>
                      <span className="font-semibold text-green-600">{deal.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Time:</span>
                      <span className="font-semibold">{deal.processing_time}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{deal.requirements}</span>
                    </div>
                    {/* Removed hardcoded requirements as they are now part of deal.requirements */}
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {deal.keywords.map((keyword) => (
                    <Badge key={keyword} variant="outline">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Choose Your Deal</h3>
                  <p className="text-gray-600 text-sm">Select the student discount you want to access</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pay for Verification</h3>
                  <p className="text-gray-600 text-sm">Secure $55 payment via Venmo, PayPal, or Stripe</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Get Verified</h3>
                  <p className="text-gray-600 text-sm">Receive your verification within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Verification Card */}
            <Card className="mb-6 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">Get Verified Now</CardTitle>
                <CardDescription className="text-blue-700">
                  Professional SheerID verification service
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-900 mb-1">$55</div>
                  <div className="text-sm text-gray-600">One-time verification fee</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>100% Success Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span>24-48 Hour Processing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Secure Payment Options</span>
                  </div>
                </div>

                <Link to={`/checkout/${deal.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                    Get Verified Now
                  </Button>
                </Link>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Secure payment powered by Stripe, PayPal & Venmo
                </p>
              </CardContent>
            </Card>

            {/* Related Deals */}
            {relatedDeals.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Deals</CardTitle>
                  <CardDescription>
                    Other {deal.category.toLowerCase()} discounts
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {relatedDeals.map((relatedDeal, index) => (
                      <div key={relatedDeal.id}>
                        <Link 
                          to={`/deal/${relatedDeal.id}`}
                          className="block p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-sm">
                                {relatedDeal.name}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                {relatedDeal.description.substring(0, 60)}...
                              </p>
                            </div>
                            <Badge variant="secondary" className="ml-2 text-xs">
                              {relatedDeal.discount}
                            </Badge>
                          </div>
                        </Link>
                        {index < relatedDeals.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealDetailPage


