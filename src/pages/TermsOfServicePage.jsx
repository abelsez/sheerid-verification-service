import React from 'react'

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Terms of Service</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <p className="text-gray-600">
            Welcome to StudentVerify! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800">1. Service Description</h2>
          <p className="text-gray-600">
            StudentVerify provides a service to assist individuals in obtaining SheerID student discount verifications. We use proprietary methods to facilitate this process, even if you do not meet traditional student criteria. Our service is provided for a one-time fee of $55 per successful verification.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">2. Eligibility</h2>
          <p className="text-gray-600">
            By using our services, you represent and warrant that you are at least 18 years of age or have reached the age of majority in your jurisdiction, and that you have the legal capacity to enter into these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">3. Payment and Refunds</h2>
          <p className="text-gray-600">
            Our fee is $55 per successful verification. We accept payments via Venmo, PayPal, and Stripe. Please refer to our <a href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</a> for details on our refund process.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">4. User Responsibilities</h2>
          <p className="text-gray-600">
            You agree to provide accurate and complete information required for the verification process. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">5. Intellectual Property</h2>
          <p className="text-gray-600">
            All content on this website, including text, graphics, logos, and software, is the property of StudentVerify or its licensors and is protected by intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">6. Disclaimer of Warranties</h2>
          <p className="text-gray-600">
            Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">7. Limitation of Liability</h2>
          <p className="text-gray-600">
            In no event shall StudentVerify be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">8. Governing Law</h2>
          <p className="text-gray-600">
            These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">9. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <p className="text-gray-600">
            <strong>Last updated:</strong> July 2, 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsOfServicePage


