import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, CheckCircle, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const EduOnlyPage = () => {
  const limitations = [
    {
      brand: "Adobe Creative Suite",
      issue: "Requires SheerID verification, .edu email alone won't work"
    },
    {
      brand: "Microsoft Office",
      issue: "May require additional verification beyond .edu email"
    },
    {
      brand: "Autodesk",
      issue: "Requires institutional verification through SheerID"
    },
    {
      brand: "GitHub Student Pack",
      issue: "Requires full student verification, not just .edu email"
    },
    {
      brand: "JetBrains",
      issue: "May require additional documentation beyond .edu email"
    }
  ]

  const worksWith = [
    "Basic online retailers that only check email domain",
    "Some streaming services with simple verification",
    "Basic software trials that accept .edu emails",
    "Simple discount codes that verify email domain"
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          EDU Email Only Service
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Important information about the limitations of EDU email-only verification 
          and why we recommend our complete SheerID verification service.
        </p>
      </div>

      {/* Warning Card */}
      <Card className="border-2 border-yellow-400 bg-yellow-50 mb-8">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <CardTitle className="text-xl text-yellow-800">
              Important: Limited Functionality
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-800 mb-4">
            The EDU email-only option has significant limitations. Many major brands and services 
            require full SheerID verification and will not accept just an .edu email address. 
            We strongly recommend our Complete Verification service for guaranteed access to all discounts.
          </p>
          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Why This Matters:</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Most premium software requires SheerID verification</li>
              <li>• Major brands have moved beyond simple email verification</li>
              <li>• You may be denied discounts even with a .edu email</li>
              <li>• No refunds if discounts don't work as expected</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* What Doesn't Work */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-xl text-red-800 flex items-center">
              <X className="h-5 w-5 mr-2" />
              Won't Work With EDU Email Only
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {limitations.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-red-200">
                  <h4 className="font-semibold text-red-800 text-sm">{item.brand}</h4>
                  <p className="text-red-700 text-xs mt-1">{item.issue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* What Might Work */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Might Work With EDU Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {worksWith.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-green-200">
                  <p className="text-green-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-300">
              <p className="text-green-800 text-xs">
                <strong>Note:</strong> Even these may require additional verification. 
                Results are not guaranteed.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* EDU Email Only */}
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              EDU Email Only
            </CardTitle>
            <div className="text-4xl font-bold text-gray-600 mt-2">
              $37
            </div>
            <p className="text-red-600 mt-2 font-semibold">
              Limited functionality - Not recommended
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">
                Only choose this if you understand the limitations and still want to proceed.
              </p>
            </div>
            <div className="pt-4">
              <a 
                className="rocketr-embed w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-600 text-white hover:bg-gray-700 h-10 px-4 py-2"
                data-product="37dollar-product-id" 
                data-color="#6B7280" 
                data-text="Buy Now" 
                data-width="100%"
                href="https://rocketr.net/buy/37dollar-product-id"
              >
                Buy Now
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Complete Verification - Recommended */}
        <Card className="relative border-2 border-blue-600 shadow-lg">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              RECOMMENDED
            </span>
          </div>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Complete Verification (Recommended)
            </CardTitle>
            <div className="text-4xl font-bold text-blue-600 mt-2">
              $55
            </div>
            <p className="text-green-600 mt-2 font-semibold">
              Full access guaranteed
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                Get access to ALL discounts with our professional SheerID verification service.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Works with ALL major brands</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Professional SheerID verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Guaranteed to work</span>
              </div>
            </div>
            <div className="pt-4">
              <a 
                className="rocketr-embed w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 h-10 px-4 py-2"
                data-product="891d333d4d77" 
                data-color="#2173F8" 
                data-text="Buy Now" 
                data-width="100%"
                href="https://rocketr.net/buy/891d333d4d77"
              >
                Buy Now
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Final Warning */}
      <Card className="border-2 border-red-400 bg-red-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Final Warning
            </h2>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              We cannot guarantee that the EDU email-only service will work with the discounts you want. 
              Many customers who choose this option end up upgrading to our Complete Verification service 
              when they discover the limitations. Save time and money by choosing the right option from the start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Link to="/checkout">Choose Complete Verification - $55</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-400 text-gray-600 hover:bg-gray-50"
              >
                <Link to="/deals">View Available Discounts</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EduOnlyPage

