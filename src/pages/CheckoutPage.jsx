import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Shield, Zap, Star } from 'lucide-react'
import { Link } from 'react-router-dom'


  const features = [
    "Professional SheerID verification accepted by all major brands",
    "Works with any email address (Gmail, Outlook, iCloud, etc.)",
    "Perfect for graduates whose .edu emails have expired",
    "Access to exclusive discounts from 50+ top brands",
    "Instant verification process with immediate results",
    "Lifetime access to your verified student status"
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Finally got verified after my .edu email expired! Saved $200 on Adobe Creative Suite.",
      rating: 5
    },
    {
      name: "Mike T.",
      text: "Quick and easy process. Now I can access all student discounts with my Gmail.",
      rating: 5
    },
    {
      name: "Jessica L.",
      text: "Worth every penny! The verification works everywhere and saved me hundreds.",
      rating: 5
    }
  ]


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Get Your Student Verification
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the verification option that's right for you. Both options provide 
          professional verification accepted by all major brands.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Complete Verification */}
        <Card className="relative border-2 border-blue-600 shadow-lg">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              RECOMMENDED
            </span>
          </div>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Complete Verification
            </CardTitle>
            <div className="text-4xl font-bold text-blue-600 mt-2">
              $65
            </div>
            <p className="text-gray-600 mt-2">
              Full access guaranteed
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a 
                href="https://fastdiscountfinder.com/sheerid.html"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-white"
              >
                Get Started Today - $65
              </a>
            </div>
          </CardContent>
        </Card>

        {/* EDU Email Only */}
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              EDU Email Only
            </CardTitle>
            <div className="text-4xl font-bold text-gray-600 mt-2">
              $37
            </div>
            <p className="text-gray-600 mt-2">
              Limited functionality
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> This option has limitations. Some discounts may not work 
                without full SheerID verification. We recommend the Complete Verification for guaranteed access.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Provides .edu email address</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Works with basic student discounts</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5">✗</span>
                <span className="text-sm text-gray-500">May not work with all brands</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5">✗</span>
                <span className="text-sm text-gray-500">No SheerID verification</span>
              </div>
            </div>
            <div className="pt-4">
              <a 
                href="https://fastdiscountfinder.com/payment.html"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-white"
              >
                Get EDU Email - $37
              </a>
            </div>
            <div className="text-center pt-2">
              <Link 
                to="/edu-only" 
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Learn more about limitations
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Why Choose StudentVerify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Trusted & Secure</h3>
            <p className="text-sm text-gray-600">
              Professional SheerID verification trusted by major brands worldwide
            </p>
          </div>
          <div className="text-center">
            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-sm text-gray-600">
              Get verified quickly and start accessing discounts immediately
            </p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Universal Access</h3>
            <p className="text-sm text-gray-600">
              Works with any email and accepted by all major student discount programs
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-3">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900 text-sm">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Do I need a .edu email to get verified?
            </h3>
            <p className="text-gray-600 text-sm">
              No! Our service works with any email address including Gmail, Outlook, iCloud, and more. 
              This is perfect for students whose schools don't provide .edu emails or for graduates 
              whose .edu emails have expired.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              How long does verification take?
            </h3>
            <p className="text-gray-600 text-sm">
              Most verifications are completed instantly. In some cases, it may take up to 24 hours 
              for manual review, but you'll be notified immediately once approved.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Which brands accept this verification?
            </h3>
            <p className="text-gray-600 text-sm">
              Our SheerID verification is accepted by all major brands including Nike, Adobe, Spotify, 
              Microsoft, and hundreds more. It's the industry standard for student verification.
            </p>
          </div>
        </div>
      </div>

      {/* Rocketr Modal */}
      <RocketrModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productId="891d333d4d77"
        title="Complete Verification"
        price="55"
        description="Professional SheerID verification accepted by all major brands"
      />
    </div>
  )
}

export default CheckoutPage

