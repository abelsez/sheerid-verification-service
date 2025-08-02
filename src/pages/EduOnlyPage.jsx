import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, AlertTriangle, X, ArrowLeft } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const EduOnlyPage = () => {
  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEOHead 
        title="EDU Email Only Service - StudentVerify powered by sheerid.fastdiscountfinder.com"
        description="Learn about our EDU email only service and why complete SheerID verification is recommended for accessing student discounts."
        canonicalUrl="https://sheerid.fastdiscountfinder.com/edu-only"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <span className="text-gray-900">EDU Email Only</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-yellow-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">EDU Email Only Service</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While we can provide .edu email access, we strongly recommend our complete SheerID verification service for the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* What You Get */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span>EDU Email Only ($37)</span>
                </CardTitle>
                <CardDescription>Limited functionality - not recommended</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Access to a .edu email address</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Basic student email verification</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-red-600">
                  <X className="h-4 w-4" />
                  <span>No SheerID verification included</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-red-600">
                  <X className="h-4 w-4" />
                  <span>Limited discount access</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-red-600">
                  <X className="h-4 w-4" />
                  <span>No guarantee for premium brands</span>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Option */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Complete Verification ($55)</span>
                </CardTitle>
                <CardDescription>Recommended - Full access guaranteed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Professional SheerID verification</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Access to ALL 123+ discounts</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Works with any email address</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100% success guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Valid for 12+ months</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Comparison */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Detailed Comparison</CardTitle>
              <CardDescription>
                See exactly what works with each option
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Feature</th>
                      <th className="text-center py-3 px-4 text-yellow-600">EDU Only ($37)</th>
                      <th className="text-center py-3 px-4 text-green-600">Complete ($55)</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Nike Student Discount</td>
                      <td className="text-center py-3 px-4">
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Adobe Creative Cloud</td>
                      <td className="text-center py-3 px-4">
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Spotify Premium</td>
                      <td className="text-center py-3 px-4">
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Amazon Prime Student</td>
                      <td className="text-center py-3 px-4">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mx-auto" title="May work" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Microsoft Office 365</td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Apple Music Student</td>
                      <td className="text-center py-3 px-4">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mx-auto" title="May work" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">SheerID-Verified Brands</td>
                      <td className="text-center py-3 px-4">
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Why We Don't Recommend EDU Only */}
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700">Why We Don't Recommend EDU Email Only</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">Limited Brand Access</h4>
                    <p className="text-red-600 text-sm">Most premium brands (Nike, Adobe, Spotify) require SheerID verification, not just .edu emails.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">Verification Failures</h4>
                    <p className="text-red-600 text-sm">Many platforms now check if the .edu email is from an active student, which basic .edu access cannot guarantee.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">No Support Guarantee</h4>
                    <p className="text-red-600 text-sm">If discounts don't work with EDU-only access, we cannot provide the same level of support or guarantees.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">Evolving Requirements</h4>
                    <p className="text-red-600 text-sm">More companies are moving to SheerID verification, making .edu-only access increasingly obsolete.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-700">EDU Email Only</CardTitle>
                <CardDescription>Limited functionality - $37</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Only choose this if you understand the limitations and still want to proceed.
                </p>
                <a href="https://fastdiscountfinder.com/payment.html" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Buy Now ($37)</Button>
                </a></CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700">Complete Verification (Recommended)</CardTitle>
                <CardDescription>Full access guaranteed - $55</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Get access to ALL discounts with our professional SheerID verification service.
                </p>
                <a href="https://fastdiscountfinder.com/sheerid.html" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Buy Now ($65)</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Back to Deals */}
          <div className="text-center">
            <Link to="/deals">
              <Button variant="outline" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Deals
              </Button>
            </Link>
            <Link to="/">
              <Button>
                View Homepage
              </Button>
            </Link>
          </div>
        </div>


      </div>
    </>
  )
}

export default EduOnlyPage

