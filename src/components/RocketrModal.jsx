import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const RocketrModal = ({ isOpen, onClose, productId, title, price, description }) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handlePurchase = async () => {
    setIsLoading(true)
    
    try {
      // Rocketr checkout integration
      const rocketrUrl = `https://rocketr.net/buy/${productId}`
      window.open(rocketrUrl, '_blank', 'width=600,height=700,scrollbars=yes,resizable=yes')
    } catch (error) {
      console.error('Error opening Rocketr checkout:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="text-3xl font-bold text-blue-600 mb-6">${price}</div>
        </div>

        {/* Purchase button */}
        <button
          onClick={handlePurchase}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          {isLoading ? 'Opening Checkout...' : 'Purchase Now'}
        </button>

        {/* Security notice */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Secure checkout powered by Rocketr
        </p>
      </div>
    </div>
  )
}

export default RocketrModal

