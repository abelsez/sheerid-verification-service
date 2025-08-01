import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Shield, Zap, Users, ArrowRight } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure Verification",
      description: "Professional SheerID verification service trusted by top brands worldwide"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Instant Access",
      description: "Get verified quickly and start saving on your favorite brands immediately"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "For Everyone",
      description: "Works for students and non-students, including those without .edu emails"
    }
  ]

  const benefits = [
    "Access to exclusive student discounts from 50+ top brands",
    "Professional SheerID verification accepted everywhere",
    "Works with any email address (Gmail, Outlook, iCloud, etc.)",
    "Perfect for graduates whose .edu emails have expired",
    "Instant verification process with immediate results",
    "Lifetime access to your verified student status"
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Verified Student Status
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Unlock Exclusive Discounts
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              StudentVerify powered by fastdiscountfinder.com provides professional SheerID verification 
              to help you access student discounts from top brands, even without a .edu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-3"
              >
                <a href="https://fastdiscountfinder.com/sheerid.html">
                  Get Verified Now - $65
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Link to="/deals">View Student Deals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose StudentVerify?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our professional verification service is trusted by students and brands worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You Get With StudentVerify
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Perfect for Non-Students Too!
              </h3>
              <p className="text-gray-700 mb-6">
                Many colleges don't provide .edu emails or expire them after graduation. 
                Our special SheerID verification works with any email address and is 
                accepted by all major brands.
              </p>
              <Button 
                asChild 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <a href="https://fastdiscountfinder.com/sheerid.html">Start Verification - $65</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are already saving with StudentVerify
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-gray-100"
            >
              <a href="https://fastdiscountfinder.com/sheerid.html">Get Verified - $65</a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <a href="https://fastdiscountfinder.com/payment.html">EDU Email Only - $37</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

