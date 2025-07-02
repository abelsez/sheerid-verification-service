import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CheckCircle, Shield, ArrowLeft, CreditCard, Smartphone } from 'lucide-react'
import deals from '../data/deals'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe("pk_live_51JppfSJd70mGJ2zw8kaOFDaDMe9uA81qlekJszVMiZRajLYkdHviITCpczm8cfTqSMleyu42lBxls6oajjnIA0H900CPajefFl")

// Custom Stripe Card Element styles for better appearance
const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
      padding: '10px 12px',
    },
    invalid: {
      color: '#9e2146',
    },
  },
  hidePostalCode: true,
}

const CheckoutForm = ({ deal, formData }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  // Clear any errors when payment method changes
  useEffect(() => {
    setError(null)
  }, [formData.paymentMethod])

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    // Scroll to top to show loading state
    window.scrollTo(0, 0)
    
    setLoading(true)
    setError(null)

    if (formData.paymentMethod === 'venmo') {
      // For Venmo, just show a success message since they'll pay via QR code
      setTimeout(() => {
        setSuccess(true)
        setLoading(false)
        alert('Thank you! Please complete your Venmo payment using the QR code. Your verification will begin once payment is received.')
      }, 1000)
      return
    }
    
    if (formData.paymentMethod === 'paypal') {
      // For PayPal, just show a success message
      setTimeout(() => {
        setSuccess(true)
        setLoading(false)
        alert('Thank you! Please complete your PayPal payment to jeffmkisii@proton.me. Your verification will begin once payment is received.')
      }, 1000)
      return
    }

    // For Stripe payments
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded. Make sure to disable form submission until Stripe.js has loaded.
      setLoading(false)
      return
    }

    const cardElement = elements.getElement(CardElement)

    // Create PaymentIntent on your backend
    try {
      // In a real implementation, this would call your backend
      // For now, simulate a successful payment after a delay
      setTimeout(() => {
        setSuccess(true)
        setLoading(false)
        alert('Payment successful! Your verification process has started.')
      }, 2000)
      
      /* Commented out actual Stripe implementation for now
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 5500, // $55.00 in cents
          deal_id: deal.id,
          customer_email: formData.email,
        }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        setLoading(false)
        return
      }

      const clientSecret = data.clientSecret

      // Confirm the payment on the client
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
          },
        },
      })

      if (confirmError) {
        setError(confirmError.message)
      } else if (paymentIntent.status === 'succeeded') {
        setSuccess(true)
        alert('Payment successful! Your verification process has started.')
      } else {
        setError('Payment failed or was not successful.')
      }
      */
    } catch (err) {
      setError('An unexpected error occurred.')
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Student Information */}
      <Card>
        <CardHeader>
          <CardTitle>Your Information</CardTitle>
          <CardDescription>
            Please provide your details for verification. Remember, one verification grants access to ALL available discounts for a minimum of 12 months.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={formData.handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={formData.handleInputChange}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={formData.handleInputChange}
              placeholder="your.email@example.com (any email accepted)"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Any email address is accepted (Gmail, Outlook, iCloud, etc.)
            </p>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={formData.handleInputChange}
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="school">School/University (if applicable)</Label>
            <Input
              id="school"
              name="school"
              value={formData.school}
              onChange={formData.handleInputChange}
              placeholder="University of Example (optional)"
            />
          </div>

          <div>
            <Label htmlFor="studentId">Student ID (if available)</Label>
            <Input
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={formData.handleInputChange}
              placeholder="123456789 (optional)"
            />
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={formData.handleInputChange}
              placeholder="Any additional information that might help with verification..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Choose your preferred payment option
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={formData.paymentMethod} onValueChange={formData.setPaymentMethod}>
            <div className="space-y-3">
              <div className={`flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 ${formData.paymentMethod === 'stripe' ? 'border-blue-500 bg-blue-50' : ''}`}>
                <RadioGroupItem value="stripe" id="stripe" />
                <Label htmlFor="stripe" className="flex items-center space-x-2 cursor-pointer flex-1">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Credit/Debit Card</div>
                    <div className="text-sm text-gray-500">Secure payment via Stripe</div>
                  </div>
                </Label>
              </div>

              {formData.paymentMethod === 'stripe' && (
                <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                  <Label htmlFor="card-element">Card Details</Label>
                  <div className="p-3 border rounded-md mt-1 bg-white">
                    <CardElement id="card-element" options={cardElementOptions} />
                  </div>
                </div>
              )}

              <div className={`flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 ${formData.paymentMethod === 'venmo' ? 'border-blue-500 bg-blue-50' : ''}`}>
                <RadioGroupItem value="venmo" id="venmo" />
                <Label htmlFor="venmo" className="flex items-center space-x-2 cursor-pointer flex-1">
                  <Smartphone className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">Venmo</div>
                    <div className="text-sm text-gray-500">Quick mobile payment</div>
                  </div>
                </Label>
              </div>

              <div className={`flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 ${formData.paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : ''}`}>
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex items-center space-x-2 cursor-pointer flex-1">
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <div>
                    <div className="font-medium">PayPal</div>
                    <div className="text-sm text-gray-500">Least recommended option: {`jeffmkisii@proton.me`}</div>
                  </div>
                </Label>
              </div>
            </div>
          </RadioGroup>
          {formData.paymentMethod === 'venmo' && (
            <div className="mt-4 text-center">
              <p className="text-gray-700 mb-2">Scan the QR code below to pay with Venmo:</p>
              <img src="/venmo_qr.jpg" alt="Venmo QR Code" className="mx-auto w-48 h-48" />
              <p className="text-sm text-gray-600 mt-2">After payment, please complete the form above.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Submit Button */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
          Payment Successful! Your verification process has started. You will receive a confirmation email shortly.
        </div>
      )}
      
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg transition-all duration-200 ease-in-out" 
        disabled={loading || success}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          'Complete Payment - $55'
        )}
      </Button>
    </form>
  )
}

const CheckoutPage = () => {
  const { dealId } = useParams()
  const deal = deals.find(d => d.id === dealId)
  const [paymentMethod, setPaymentMethod] = useState('stripe')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    school: '',
    studentId: '',
    notes: ''
  })

  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Deal Not Found</h1>
          <p className="text-gray-600 mb-6">The deal you're looking for doesn't exist.</p>
          <Link to="/deals">
            <Button>Browse All Deals</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/deals" className="hover:text-blue-600">Deals</Link>
            <span>/</span>
            <Link to={`/deal/${deal.id}`} className="hover:text-blue-600">{deal.name}</Link>
            <span>/</span>
            <span className="text-gray-900">Checkout</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Elements stripe={stripePromise}>
              <CheckoutForm 
                deal={deal} 
                formData={{ ...formData, handleInputChange, paymentMethod, setPaymentMethod }} 
              />
            </Elements>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{deal.name}</h3>
                    <p className="text-sm text-gray-600">SheerID Verification Service</p>
                    <Badge variant="outline" className="mt-1">
                      {deal.category}
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Verification Service</span>
                    <span>$55.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Processing Fee</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$55.00</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What You Get:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Professional SheerID verification</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>24-48 hour processing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>100% success guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Access to ALL SheerID discounts for 12+ months</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Email confirmation & support</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Secure payment processing
                  </p>
                  <p className="text-xs text-gray-500">
                    SSL encrypted & PCI compliant
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

