import { Button } from '@//components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@//components/ui/card'
import { Badge } from '@//components/ui/badge'
import { CheckCircle, Shield, Clock, Users, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  const steps = [
    {
      step: 1,
      title: "Choose Your Deal",
      description: "Browse our catalog of 120+ student discounts and select the one you want to access."
    },
    {
      step: 2,
      title: "Provide Information",
      description: "Fill out our secure form with your details and preferred payment method. Any email address is accepted (Gmail, Outlook, iCloud, etc.)."
    },
    {
      step: 3,
      title: "We Verify You",
      description: "Our team handles the SheerID verification process using our proven methods, whether you're a traditional student or not. Once verified for one deal, you gain access to ALL available discounts."
    },
    {
      step: 4,
      title: "Get Your Discount",
      description: "Receive your verification within 24-48 hours and start saving money! Your access to all discounts is valid for a minimum of 12 months from the date of SheerID verification."
    }
  ]

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Success Rate",
      description: "We guarantee successful verification or your money back. Our proven methods work every time, for all users."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Processing",
      description: "Get verified in 24-48 hours, not weeks. We prioritize speed without compromising accuracy."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trusted by Thousands",
      description: "Thousands of users have saved money using our verification service across the country, regardless of their student status."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Team",
      description: "Our verification specialists know exactly how to navigate SheerID's requirements for all types of users."
    }
  ]

  const stats = [
    { number: "5,000+", label: "Users Verified" },
    { number: "120+", label: "Available Deals" },
    { number: "24-48", label: "Hours Processing" },
    { number: "100%", label: "Success Rate" }
  ]

  const averageSavings = '$500+' // Placeholder for average annual savings

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About StudentVerify
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're the trusted partner for anyone who wants to access exclusive SheerID discounts without the hassle, whether you're a traditional student or not. Our professional verification service makes saving money simple and guaranteed, and we accept any email address. Once verified for one deal, you gain access to ALL available discounts for a minimum of 12 months, saving you an average of {averageSavings} annually. It's a no-brainer!
            </p>
            <Link to="/deals">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Saving Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting verified for student discounts has never been easier, for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've perfected the SheerID verification process so you don't have to worry about it, regardless of your background.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SheerID is the leading verification platform used by major brands to offer exclusive discounts. However, the verification process can be complex and time-consuming, especially for those who don't fit the traditional student mold or have expired .edu emails.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                That's where we come in. We've developed a streamlined, proprietary process that handles all the verification requirements for you, ensuring you get access to these exclusive discounts quickly and reliably, regardless of your student status or email provider. We can verify you even if you only have a Gmail, Outlook, or iCloud email.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Professional document handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Direct SheerID integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Secure data protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Money-back guarantee</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Fast & Reliable</h4>
                  <p className="text-gray-600 text-sm">Get verified in 24-48 hours with our proven process</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Secure & Private</h4>
                  <p className="text-gray-600 text-sm">Your personal information is protected and never shared</p>
                動</div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Guaranteed Success</h4>
                  <p className="text-gray-600 text-sm">100% success rate or your money back</p>
                </div>
              </div>
            </div>
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
            Join thousands of users who trust us for their verification needs, regardless of student status or email type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/deals">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Browse Student Deals
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage


