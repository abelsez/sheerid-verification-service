import React from 'react'
import { Link } from 'react-router-dom'

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is SheerID verification?</h2>
            <p className="text-gray-600">
              SheerID is a third-party verification service that confirms eligibility for various discounts. We use our own proprietary methods to help you get verified, even if you don't meet traditional student criteria.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How much does your service cost?</h2>
            <p className="text-gray-600">
              We charge a one-time fee of $55 for each successful verification. This fee covers our service to help you access the discount.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What payment methods do you accept?</h2>
            <p className="text-gray-600">
              We accept Venmo, PayPal, and Stripe for secure and convenient payments.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How long does the verification process take?</h2>
            <p className="text-gray-600">
              Our verification process typically takes 24-48 hours. Once verified, you will receive confirmation and instructions on how to redeem your discount.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What if I'm not a student, or don't have a .edu email?</h2>
            <p className="text-gray-600">
              Our service is designed to help anyone get verified for student discounts, regardless of their current student status or email type. We use unique methods to ensure successful verification, and you can use any email address (e.g., Gmail, Outlook, iCloud, etc.).
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Is my personal information safe?</h2>
            <p className="text-gray-600">
              Yes, we prioritize your privacy and security. All personal information is handled with the utmost care and is only used for the purpose of verification. Please refer to our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> for more details.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is your refund policy?</h2>
            <p className="text-gray-600">
              We offer a 100% success guarantee. If we are unable to verify you for a discount, we will issue a full refund. You can find more information in our <Link to="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage


