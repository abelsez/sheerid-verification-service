import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageCircle, Clock, HelpCircle } from 'lucide-react'

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email Support",
      description: "Get help with your verification or account",
      contact: "support@fastdiscountfinder.com",
      responseTime: "Usually within 24 hours"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      title: "General Inquiries",
      description: "Questions about our services or partnerships",
      contact: "info@fastdiscountfinder.com",
      responseTime: "Usually within 48 hours"
    }
  ]

  const faqs = [
    {
      question: "How long does verification take?",
      answer: "Most verifications are completed instantly. In some cases, manual review may take up to 24 hours."
    },
    {
      question: "Do I need a .edu email?",
      answer: "No! Our service works with any email address including Gmail, Outlook, iCloud, and more."
    },
    {
      question: "Which brands accept your verification?",
      answer: "Our SheerID verification is accepted by all major brands including Nike, Adobe, Spotify, Microsoft, and hundreds more."
    },
    {
      question: "What if I'm not currently a student?",
      answer: "Our service works for both current students and non-students, including graduates whose .edu emails have expired."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we use industry-standard encryption and security measures. We never share your personal information with third parties."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer refunds within 30 days if our verification service doesn't work as promised for the Complete Verification package."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about StudentVerify? We're here to help! Reach out to us 
          using any of the methods below.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {contactMethods.map((method, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {method.icon}
              </div>
              <CardTitle className="text-xl">{method.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-gray-600">{method.description}</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-semibold text-blue-800">{method.contact}</p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{method.responseTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Business Hours */}
      <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Support Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600">24/7 - We'll respond within 24 hours</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find quick answers to common questions about our verification service
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardContent className="pt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              About StudentVerify
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              StudentVerify is powered by fastdiscountfinder.com, your trusted partner for 
              student verification and exclusive discounts. We help students and non-students 
              alike access the discounts they deserve through professional SheerID verification.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-sm opacity-80">
                  Making student discounts accessible to everyone, regardless of email type
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Promise</h3>
                <p className="text-sm opacity-80">
                  Professional verification service that works with all major brands
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Support</h3>
                <p className="text-sm opacity-80">
                  Dedicated customer service to help you every step of the way
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactPage

