import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
                StudentVerify
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Powered by fastdiscountfinder.com - Your trusted partner for student verification and exclusive discounts.
            </p>
            <p className="text-sm text-gray-400">
              Get verified student status and unlock exclusive deals from top brands worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-300 hover:text-white transition-colors">
                  Student Deals
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-gray-300 hover:text-white transition-colors">
                  Get Verified
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">SheerID Verification</li>
              <li className="text-gray-300">Student Discounts</li>
              <li className="text-gray-300">EDU Email Service</li>
              <li className="text-gray-300">Brand Partnerships</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 StudentVerify powered by fastdiscountfinder.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

