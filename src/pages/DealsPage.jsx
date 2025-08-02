import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter } from 'lucide-react'
import deals from '../data/deals'

const DealsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const uniqueCategories = new Set(deals.map(deal => deal.category))
    return ['All', ...Array.from(uniqueCategories).sort()]
  }, [deals])

  const filteredDeals = useMemo(() => {
    return deals.filter(deal => {
      const matchesSearch = deal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           deal.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           deal.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || deal.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, deals])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Deals & Discounts
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse {deals.length} exclusive student discounts available through SheerID verification
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search deals, brands, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {filteredDeals.length} of {deals.length} deals
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {filteredDeals.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No deals found matching your criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDeals.map((deal) => (
                <Card key={deal.id} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{deal.name}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 flex-shrink-0">
                        {deal.discount}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {deal.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="mb-4 text-gray-600 flex-grow">
                      {deal.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Savings:</span>
                        <span className="font-semibold text-green-600">{deal.savings}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Processing:</span>
                        <span className="font-semibold">{deal.processingTime}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                      {deal.keywords.slice(0, 3).map((keyword) => (
                        <Badge key={keyword} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Link to={`/deal/${deal.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                      <Link to={`/checkout/${deal.id}`} className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Get Verified - $65
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Contact us and we'll help you find the perfect student discount
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default DealsPage



