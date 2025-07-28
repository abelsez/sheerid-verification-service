import { Mail, Phone, MapPin, Clock, HelpCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SEOHead from '../components/SEOHead'

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      details: "sheeredudeals@gmail.com",
      description: "Get help via email within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      details: "+1(347)-766-7259 (SMS only)",
      description: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Area",
      details: "Nationwide Coverage",
      description: "Available to users across the US"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      details: "24-48 Hours",
      description: "Fast verification processing"
    }
  ]

  const faqItems = [
    {
      question: "How long does verification take?",
      answer: "Our verification process typically takes 24-48 hours. You'll receive an email confirmation once your verification is complete."
    },
    {
      question: "What if my verification fails?",
      answer: "We guarantee 100% success rate. If for any reason we cannot verify your eligibility, you'll receive a full refund."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use bank-level encryption and never share your personal information with third parties. Your data is completely secure."
    },
    {
      question: "Can I get verified for multiple deals?",
      answer: "Yes! Once you're verified through our service, you can use that verification for any SheerID-powered discount."
    },
    {
      question: "Do you work with non-students?",
      answer: "Absolutely! Our service works for both students and non-students. We can verify anyone using our special SheerID verification method."
    },
    {
      question: "What email addresses do you accept?",
      answer: "We accept any email address - Gmail, Outlook, iCloud, Yahoo, and any other email provider. No .edu email required!"
    }
  ]

  return (
    <>
      <SEOHead 
        title="Contact Us - StudentVerify powered by sheerid.fastdiscountfinder.com"
        description="Contact StudentVerify for SheerID discount verification support. Email: sheeredudeals@gmail.com, Phone: +1(347)-766-7259 (SMS only). 24-48 hour response time."
        canonicalUrl="https://sheerid.fastdiscountfinder.com/contact"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about our verification service? We're here to help you save money on discounts.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our support team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{info.title}</h3>
                        <p className="text-blue-600 font-medium text-lg">{info.details}</p>
                        <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Emergency Contact */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                    <h3 className="font-semibold text-yellow-800 mb-2">Need Immediate Help?</h3>
                    <p className="text-yellow-700 text-sm mb-3">
                      If you have an urgent verification request or payment issue, please contact us directly.
                    </p>
                    <div className="flex items-center space-x-2 text-yellow-800">
                      <Phone className="h-4 w-4" />
                      <span className="font-semibold">+1(347)-766-7259 (SMS only)</span>
                    </div>
                    <p className="text-xs text-yellow-600 mt-2">
                      Available Monday - Friday, 9 AM - 6 PM EST
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <HelpCircle className="h-6 w-6" />
                    <span>Frequently Asked Questions</span>
                  </CardTitle>
                  <CardDescription>
                    Common questions about our service
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-2 text-base">{item.question}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Service</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Professional SheerID verification service</li>
                      <li>• Works for both students and non-students</li>
                      <li>• Accepts any email address (no .edu required)</li>
                      <li>• 100% success guarantee</li>
                      <li>• Access to ALL discounts for 12+ months</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Support Hours</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Email support: 24/7 (response within 24 hours)</li>
                      <li>• SMS support: Monday - Friday, 9 AM - 6 PM EST</li>
                      <li>• Verification processing: 24-48 hours</li>
                      <li>• Refund processing: 3-5 business days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage

