import React from 'react'

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Refund Policy</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <p className="text-gray-600">
            At StudentVerify, we are committed to providing a reliable and effective SheerID verification service. We offer a clear refund policy to ensure your satisfaction.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800">1. 100% Success Guarantee</h2>
          <p className="text-gray-600">
            We guarantee that we will successfully verify you for the student discount you are seeking through our service. If, for any reason, we are unable to complete the verification process successfully for the specific deal you paid for, you are entitled to a full refund of the $55 service fee.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">2. Eligibility for Refund</h2>
          <p className="text-gray-600">
            A full refund will be issued under the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>We are unable to verify your eligibility for the specific student discount you paid for.</li>
            <li>The verification process exceeds our stated 24-48 hour processing time due to our fault, and you no longer wish to proceed with the service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">3. Non-Eligibility for Refund</h2>
          <p className="text-gray-600">
            Refunds will generally not be issued if:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>You provide inaccurate or incomplete information that prevents us from completing the verification.</li>
            <li>You decide to cancel the service after the verification process has been successfully completed by us.</li>
            <li>You are verified, but the third-party merchant (e.g., SheerID partner) changes their discount terms or discontinues the offer after your successful verification.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">4. How to Request a Refund</h2>
          <p className="text-gray-600">
            To request a refund, please contact our support team at sheeredudeals@gmail.com with your order details and the reason for your refund request. We will review your request and process eligible refunds within 5-7 business days.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">5. Changes to This Policy</h2>
          <p className="text-gray-600">
            We reserve the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our service after any such changes constitutes your acceptance of the new Refund Policy.
          </p>

          <p className="text-gray-600">
            <strong>Last updated:</strong> July 2, 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicyPage


