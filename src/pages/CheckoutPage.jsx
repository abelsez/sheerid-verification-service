import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Shield, ArrowLeft, AlertTriangle } from 'lucide-react'
import deals from '../data/deals'

const CheckoutPage = () => {
  const { dealId } = useParams()
  const deal = deals.find(d => d.id === dealId)

  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/deals" className="hover:text-blue-600">Deals</Link>
            <span>/</span>
            <Link to={`/deal/${deal.id}`} className="hover:text-blue-600">{deal.name}</Link>
            <span>/</span>
            <span className="text-gray-900">Checkout</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Complete Verification ($65)</CardTitle>
                <CardDescription>
                  Choose your verification option. Remember, one verification grants access to ALL available discounts for a minimum of 12 months.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Full Verification Option */}
                <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete SheerID Verification (Recommended)</h3>
                  <p className="text-gray-600 mb-4">
                    Get verified for ALL SheerID discounts with our professional verification service. Works with any email address and guarantees access to all available student discounts.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Access to ALL 123+ SheerID discounts</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Works with any email (Gmail, Outlook, iCloud, etc.)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>100% success guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>24-48 hour processing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Valid for 12+ months</span>
                    </div>
                  </div>
                  <a href="https://fastdiscountfinder.com/sheerid.html" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Buy Now ($65)</Button>
                  </a>
                </div>

                <Separator />

                {/* EDU Email Only Option */}
                <div className="border rounded-lg p-6 bg-yellow-50 border-yellow-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">EDU Email Only (Limited Option)</h3>
                      <p className="text-yellow-700 text-sm font-medium">Not recommended - Limited functionality</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    This option only provides an .edu email address. While technically possible, many discounts won't work without proper SheerID verification.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-yellow-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Limited to basic .edu email access only</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-yellow-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Many premium discounts won't work (Nike, Adobe, Spotify Premium, etc.)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-yellow-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>No guarantee for SheerID-specific verifications</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-yellow-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>May not work with newer discount platforms</span>
                    </div>
                  </div>
                  <a href="https://fastdiscountfinder.com/payment.html" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Buy Now ($37)</Button>
                  </a>
                  <div className="mb-4">
                    <Link to="/edu-only" className="text-blue-600 hover:text-blue-800 text-sm underline">
                      Learn more about limitations →
                    </Link>
                  </div>
                  

                </div>

                {/* Important Notice */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Important Information:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• After payment, you'll receive an email with next steps within 24 hours</li>
                    <li>• Our service works for both students and non-students</li>
                    <li>• We accept any email address (no .edu required for verification)</li>
                    <li>• 100% money-back guarantee if verification fails</li>
                    <li>• Support available at sheeredudeals@gmail.com</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Deal Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{deal.name}</h3>
                    <p className="text-sm text-gray-600">SheerID Verification Required</p>
                    <Badge variant="outline" className="mt-1">
                      {deal.category}
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Why Choose Us:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Professional SheerID verification</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>24-48 hour processing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>100% success guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Access to ALL discounts for 12+ months</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Works with any email address</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    SSL encrypted & secure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Load Rocketr Script */}

    </div>
  )
}

export default CheckoutPage

