import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const DealsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Complete SheerID deals data with images
  const deals = [
    {
      "brand": "StudentUniverse",
      "description": "Student Discounts on Flights & Hotels – Members Get Up to 60% Off",
      "category": "Travel",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/StudentUniverse-467x316.png"
    },
    {
      "brand": "The North Face",
      "description": "Pack your bags as we have much to explore and learn! Here's 10% for students.",
      "category": "Outdoor Gear",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/The-North-Face-467x316.png"
    },
    {
      "brand": "TIDAL",
      "description": "Student Discount",
      "category": "Streaming Services",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/TIDAL-467x316.png"
    },
    {
      "brand": "Nuuly",
      "description": "Students enjoy $10 off their monthly clothing rental subscription for Back to School!",
      "category": "Fashion",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Nuuly-467x316.png"
    },
    {
      "brand": "Industrie Clothing",
      "description": "15% Off for Students, Military, First Responders & Medical Professionals",
      "category": "Fashion",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Industrie-Clothing-467x316.png"
    },
    {
      "brand": "SoundCloud",
      "description": "Only $4.99/month for Students",
      "category": "Streaming Services",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/SoundCloud-467x316.png"
    },
    {
      "brand": "Peacock",
      "description": "An Exclusive Student Discount — Just for You",
      "category": "Streaming Services",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Peacock-467x316.png"
    },
    {
      "brand": "Thule",
      "description": "Student, Military, and First Responder 20% Off Discounts",
      "category": "Outdoor Gear",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Thule-467x316.png"
    },
    {
      "brand": "Codecademy",
      "description": "Students save over 35% on annual plans with Pro Student",
      "category": "Technology/Software",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Codecademy-467x316.png"
    },
    {
      "brand": "Hulu",
      "description": "Students: Get Hulu For Just $1.99/Month",
      "category": "Streaming Services",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Hulu-467x316.png"
    },
    {
      "brand": "Puffy",
      "description": "Students Save $1,425 on Any Puffy Mattress, Including Luxury Bedding Gifts",
      "category": "Lifestyle",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Puffy-467x316.png"
    },
    {
      "brand": "Back Market",
      "description": "Students get $20 off everything",
      "category": "Technology",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Back-Market-467x316.png"
    },
    {
      "brand": "Bulwark",
      "description": "Exclusive Savings for Military, Students, and Teachers",
      "category": "Apparel",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Bulwark-467x316.png"
    },
    {
      "brand": "Adorama",
      "description": "Students Get Exclusive Pricing",
      "category": "Technology",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Adorama-467x316.png"
    },
    {
      "brand": "UGG",
      "description": "UGG: Community Heroes Offer",
      "category": "Fashion",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/UGG-467x316.png"
    },
    {
      "brand": "Autodesk",
      "description": "Autodesk: Exclusive Education Offer",
      "category": "Technology/Software",
      "image": "https://shop.sheerid.com/wp-content/uploads/2024/01/Autodesk-467x316.png"
    },
    {
      "brand": "Madewell",
      "description": "15% Off for Community Heroes",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/madewell.com"
    },
    {
      "brand": "Alibaba Cloud",
      "description": "Special Student Offer",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/alibabacloud.com"
    },
    {
      "brand": "SurveyMonkey",
      "description": "SurveyMonkey: Exclusive Academic Discount",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/surveymonkey.com"
    },
    {
      "brand": "ASICS",
      "description": "Special Savings for Community Heroes",
      "category": "Apparel",
      "image": "https://logo.clearbit.com/asics.com"
    },
    {
      "brand": "Nike",
      "description": "Nike: 10% Off for Students, First Responders, Military, Teachers and Medical Professionals",
      "category": "Apparel",
      "image": "https://logo.clearbit.com/nike.com"
    },
    {
      "brand": "The Wall Street Journal",
      "description": "The Wall Street Journal: Discounted Student Subscription",
      "category": "Subscription",
      "image": "https://logo.clearbit.com/wsj.com"
    },
    {
      "brand": "Pandora",
      "description": "Pandora: Exclusive Student Discount",
      "category": "Streaming Services",
      "image": "https://logo.clearbit.com/pandora.com"
    },
    {
      "brand": "The Washington Post",
      "description": "The Washington Post: Discounted Academic Subscription",
      "category": "Subscription",
      "image": "https://logo.clearbit.com/washingtonpost.com"
    },
    {
      "brand": "SiriusXM",
      "description": "SiriusXM: Exclusive Student Offer",
      "category": "Streaming Services",
      "image": "https://logo.clearbit.com/siriusxm.com"
    },
    {
      "brand": "Spotify",
      "description": "Students Save on Spotify Premium",
      "category": "Streaming Services",
      "image": "https://logo.clearbit.com/spotify.com"
    },
    {
      "brand": "Copper Mountain Resort",
      "description": "Copper Mountain Resort: Discounted Ski Passes for Military",
      "category": "Outdoor Gear",
      "image": "https://logo.clearbit.com/coppercolorado.com"
    },
    {
      "brand": "Final Draft",
      "description": "Final Draft: Discounted Software for Students and Teachers",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/finaldraft.com"
    },
    {
      "brand": "Helzberg Diamonds",
      "description": "Helzberg Diamonds: Discounted Jewelry for Students, Military, and First Responders",
      "category": "Lifestyle",
      "image": "https://logo.clearbit.com/helzberg.com"
    },
    {
      "brand": "Monarch Mountain",
      "description": "Monarch Mountain: Students and Military Ski for Less",
      "category": "Outdoor Gear",
      "image": "https://logo.clearbit.com/skimonarch.com"
    },
    {
      "brand": "Dickies",
      "description": "Dickies: 10% Off for Students",
      "category": "Apparel",
      "image": "https://logo.clearbit.com/dickies.com"
    },
    {
      "brand": "Boden",
      "description": "Boden: Limited Time 20% Discount for All Heroes",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/boden.com"
    },
    {
      "brand": "Lumion",
      "description": "Lumion: Free 3D-Rendering Software for Students",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/lumion.com"
    },
    {
      "brand": "vineyard vines",
      "description": "vineyard vines: 15% Student Discount",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/vineyardvines.com"
    },
    {
      "brand": "Intuit",
      "description": "Intuit: Free Trial for Students and Teachers",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/intuit.com"
    },
    {
      "brand": "Headspace",
      "description": "Headspace: Discounted Subscription for Students",
      "category": "Health/Beauty",
      "image": "https://logo.clearbit.com/headspace.com"
    },
    {
      "brand": "YouTube",
      "description": "YouTube Student Plan: Unlimited Ad-free Streaming",
      "category": "Streaming Services",
      "image": "https://logo.clearbit.com/youtube.com"
    },
    {
      "brand": "J.Crew Factory",
      "description": "J.Crew Factory Student Discounts",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/jcrew.com"
    },
    {
      "brand": "Levi's",
      "description": "Levi's: Military, Medical Professionals & First Responders Save 15%",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/levi.com"
    },
    {
      "brand": "Xfinity",
      "description": "Xfinity: Exclusive Student Offers",
      "category": "Technology",
      "image": "https://logo.clearbit.com/xfinity.com"
    },
    {
      "brand": "Alteryx",
      "description": "Alteryx SparkED: Exclusive Student Offer",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/alteryx.com"
    },
    {
      "brand": "The Word Among Us",
      "description": "The Word Among Us: Free 2-Year Subscription for Students",
      "category": "Subscription",
      "image": "https://logo.clearbit.com/wau.org"
    },
    {
      "brand": "Ulta Beauty",
      "description": "Student perk alert: 10% off!",
      "category": "Health/Beauty",
      "image": "https://logo.clearbit.com/ulta.com"
    },
    {
      "brand": "The Home Depot",
      "description": "College Students Make Your Dorm Feel Like Home With 10% Off",
      "category": "Lifestyle",
      "image": "https://logo.clearbit.com/homedepot.com"
    },
    {
      "brand": "SAP SE",
      "description": "Official SAP software training and certification",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/sap.com"
    },
    {
      "brand": "Project Management Institute",
      "description": "Project Management Institute Student Membership Offers",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/pmi.org"
    },
    {
      "brand": "NBA",
      "description": "Stream Live NBA Games. Students Save 40%.",
      "category": "Streaming Services",
      "image": "https://logo.clearbit.com/nba.com"
    },
    {
      "brand": "Vectorworks",
      "description": "Free Vectorworks Licenses for Students & Educators",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/vectorworks.net"
    },
    {
      "brand": "Perplexity",
      "description": "Free Perplexity Pro for Students",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/perplexity.ai"
    },
    {
      "brand": "Bluebeam",
      "description": "Bluebeam is FREE for Students",
      "category": "Technology/Software",
      "image": "https://logo.clearbit.com/bluebeam.com"
    },
    {
      "brand": "NOBULL",
      "description": "Student Discount",
      "category": "Apparel",
      "image": "https://logo.clearbit.com/nobullproject.com"
    },
    {
      "brand": "Drunk Elephant",
      "description": "Students Get 15% Off",
      "category": "Health/Beauty",
      "image": "https://logo.clearbit.com/drunkelephant.com"
    },
    {
      "brand": "Circus by Sam Edelman",
      "description": "15% Off for Students",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/samedelman.com"
    },
    {
      "brand": "LifeStride",
      "description": "15% Off for Students",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/lifestride.com"
    },
    {
      "brand": "Rykä",
      "description": "15% Off for Students",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/ryka.com"
    },
    {
      "brand": "Franco Sarto",
      "description": "15% Off for Students",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/francosarto.com"
    },
    {
      "brand": "Naturalizer",
      "description": "15% Off for Students",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/naturalizer.com"
    },
    {
      "brand": "Allen Edmonds",
      "description": "15% Off for Students",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/allenedmonds.com"
    },
    {
      "brand": "Sam Edelman",
      "description": "15% Off for Students",
      "category": "Fashion",
      "image": "https://logo.clearbit.com/samedelman.com"
    },
    {
      "brand": "M·A·C Cosmetics",
      "description": "Verified Community Members get 15% Off All Online Orders",
      "category": "Health/Beauty",
      "image": "https://logo.clearbit.com/maccosmetics.com"
    },
    {
      "brand": "Bio Ionic",
      "description": "30% off for students, medical providers, first responders, teachers, and military",
      "category": "Health/Beauty",
      "image": "https://logo.clearbit.com/bioionic.com"
    },
    {
      "brand": "Paramount+",
      "description": "Students Get 50% Off",
      "category": "Streaming Services",
      "image": "https://logo.clearbit.com/paramountplus.com"
    },
    {
      "brand": "NARS Cosmetics",
      "description": "15% Off for Students",
      "category": "Health/Beauty",
      "image": "https://logo.clearbit.com/narscosmetics.com"
    },
    {
      "brand": "Shiseido",
      "description": "Exclusive 15% Off for Students",
      "category": "Health/Beauty",
      "image": "https://logo.clearbit.com/shiseido.com"
    }
  ]

  const categories = ['All', ...new Set(deals.map(deal => deal.category))].sort()

  const filteredDeals = useMemo(() => {
    return deals.filter(deal => {
      const matchesSearch = deal.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           deal.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || deal.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Student Deals & Discounts
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover exclusive student discounts from top brands. Get verified with StudentVerify 
          to unlock these amazing deals and start saving today!
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          <Link to="/checkout">Get Verified to Access These Deals</Link>
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search brands or deals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 
                "bg-blue-600 hover:bg-blue-700" : 
                "hover:bg-blue-50 hover:text-blue-600"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Showing {filteredDeals.length} of {deals.length} deals
        </p>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDeals.map((deal, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <img 
                  src={deal.image} 
                  alt={`${deal.brand} logo`}
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <Badge variant="secondary" className="text-xs">
                  {deal.category}
                </Badge>
              </div>
              <CardTitle className="text-lg">{deal.brand}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-sm">
                {deal.description}
              </p>
              <div className="flex justify-between items-center">
                <Button 
                  asChild 
                  size="sm" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Link to="/checkout">
                    Get Verified
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredDeals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No deals found matching your search criteria.
          </p>
          <Button 
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('All')
            }}
            variant="outline"
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Access These Deals?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Get verified with StudentVerify and start saving on all these brands and more!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link to="/checkout">Complete Verification - $55</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Link to="/edu-only">EDU Email Only - $37</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DealsPage

