"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SelectItem } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, Filter, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { SafeSelect } from "@/components/safe-select"

export function ListingsClient({
  listings,
  destinations,
  categories,
  initialFilters,
}: {
  listings: any[]
  destinations: any[]
  categories: any[]
  initialFilters: {
    category: string
    destination: string
    minPrice: number
    maxPrice: number
  }
}) {
  const [sortOrder, setSortOrder] = useState("recommended")
  const [selectedCategory, setSelectedCategory] = useState(initialFilters.category || "all")
  const [selectedDestination, setSelectedDestination] = useState(initialFilters.destination || "all")
  const [priceRange, setPriceRange] = useState([initialFilters.minPrice || 0, initialFilters.maxPrice || 1000])

  // Sort listings based on selected order
  const sortedListings = [...listings].sort((a, b) => {
    if (sortOrder === "price-low") {
      return a.fields.Price - b.fields.Price
    } else if (sortOrder === "price-high") {
      return b.fields.Price - a.fields.Price
    } else if (sortOrder === "rating") {
      return (b.fields["Average Rating"] || 0) - (a.fields["Average Rating"] || 0)
    }
    // Default: recommended
    return 0
  })

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Filters sidebar */}
      <div className="w-full md:w-64 space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Destination</label>
              <SafeSelect
                value={selectedDestination}
                onValueChange={setSelectedDestination}
                placeholder="All destinations"
              >
                <SelectItem value="all">All destinations</SelectItem>
                {destinations.map((dest) => (
                  <SelectItem key={dest.id} value={dest.fields["Destination Name"]}>
                    {dest.fields["Destination Name"]}
                  </SelectItem>
                ))}
              </SafeSelect>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Category</label>
              <SafeSelect value={selectedCategory} onValueChange={setSelectedCategory} placeholder="All categories">
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.fields["Category Name"]}>
                    {cat.fields["Category Name"]}
                  </SelectItem>
                ))}
              </SafeSelect>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Price Range</label>
              <div className="pt-4 px-1">
                <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="mb-6" />
                <div className="flex items-center justify-between">
                  <span className="text-sm">${priceRange[0]}</span>
                  <span className="text-sm">${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <Button className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Listings grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Experiences</h1>
          <SafeSelect value={sortOrder} onValueChange={setSortOrder} placeholder="Sort by" className="w-[180px]">
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SafeSelect>
        </div>

        {sortedListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedListings.map((listing) => (
              <Card key={listing.id} className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden">
                  {listing.fields.Photos && listing.fields.Photos.length > 0 ? (
                    <Image
                      src={listing.fields.Photos[0].url || "/placeholder.svg?height=300&width=400"}
                      alt={listing.fields.Title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Placeholder"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  )}
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {listing.fields.Category &&
                      listing.fields.Category.map((category: string, idx: number) => (
                        <Badge key={idx} className="bg-black/70 text-white hover:bg-black/80">
                          {category}
                        </Badge>
                      ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <Badge className="bg-primary text-primary-foreground">${listing.fields.Price}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg line-clamp-1">{listing.fields.Title}</h3>
                  {listing.fields.Destination && listing.fields.Destination.length > 0 && (
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>{listing.fields.Destination[0]}</span>
                    </div>
                  )}
                  <p className="text-muted-foreground text-sm line-clamp-2 mt-1">
                    {listing.fields["Listing Summary"] || listing.fields.Description}
                  </p>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < Math.floor(listing.fields["Average Rating"] || 0)
                            ? "fill-[#ffd935] text-[#ffd935]"
                            : "text-muted-foreground",
                        )}
                      />
                    ))}
                    <span className="text-sm font-medium ml-1">
                      {listing.fields["Average Rating"] || 0} ({listing.fields["Total Reviews"] || 0})
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" asChild>
                    <Link href={`/listings/${listing.fields["Listing ID"]}`}>Check Availability</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No listings found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
            <Button asChild>
              <Link href="/listings">Clear all filters</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

