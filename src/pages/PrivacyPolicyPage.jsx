import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <p className="text-gray-600">
            Your privacy is important to us. This Privacy Policy explains how StudentVerify collects, uses, and protects your personal information when you use our SheerID verification service.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
          <p className="text-gray-600">
            We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Payment information (processed securely by third-party providers like Stripe, PayPal, and Venmo)</li>
            <li>Information required for SheerID verification (e.g., student ID, academic institution details)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect or receive:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>To facilitate account creation and login process.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To fulfill and manage your orders and payments.</li>
            <li>To post testimonials with your consent.</li>
            <li>To deliver products and services to you.</li>
            <li>To respond to your inquiries and offer support.</li>
            <li>To enable user-to-user communications.</li>
            <li>To request feedback.</li>
            <li>To protect our Services.</li>
            <li>To enforce our terms, conditions and policies.</li>
            <li>To respond to legal requests and prevent harm.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Sharing Your Information</h2>
          <p className="text-gray-600">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>With SheerID for verification purposes.</li>
            <li>With third-party payment processors (Stripe, PayPal, Venmo).</li>
            <li>With service providers who perform services for us or on our behalf.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Security of Your Information</h2>
          <p className="text-gray-600">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Your Privacy Rights</h2>
          <p className="text-gray-600">
            You have certain rights regarding your personal information, including the right to access, correct, or delete your data. Please contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>

          <p className="text-gray-600">
            <strong>Last updated:</strong> July 2, 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage


