import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, Filter } from "lucide-react"
import { getListings, getDestinations, getCategories } from "@/lib/airtable"
import { ListingsLoading } from "@/components/listings-loading"

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const search = typeof searchParams.search === "string" ? searchParams.search : ""
  const category = typeof searchParams.category === "string" ? searchParams.category : ""
  const destination = typeof searchParams.destination === "string" ? searchParams.destination : ""
  const minPrice = typeof searchParams.minPrice === "string" ? Number.parseInt(searchParams.minPrice) : 0
  const maxPrice = typeof searchParams.maxPrice === "string" ? Number.parseInt(searchParams.maxPrice) : 1000
  const featured = searchParams.featured === "true"
  const freeCancellation = searchParams.freeCancellation === "true"

  // Fetch filter options
  const destinations = await getDestinations().catch(() => [])
  const categories = await getCategories().catch(() => [])

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Destination</label>
                <Select defaultValue={destination}>
                  <SelectTrigger>
                    <SelectValue placeholder="All destinations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All destinations</SelectItem>
                    {destinations.map((dest) => (
                      <SelectItem key={dest.id} value={dest.fields["Destination Name"]}>
                        {dest.fields["Destination Name"]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Category</label>
                <Select defaultValue={category}>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.fields["Category Name"]}>
                        {cat.fields["Category Name"]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Price Range</label>
                <div className="pt-4 px-1">
                  <Slider defaultValue={[minPrice || 0, maxPrice || 1000]} max={1000} step={10} className="mb-6" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${minPrice || 0}</span>
                    <span className="text-sm">${maxPrice || 1000}</span>
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
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Suspense fallback={<ListingsLoading />}>
            <ListingsGrid
              search={search}
              category={category}
              destination={destination}
              featured={featured}
              freeCancellation={freeCancellation}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

async function ListingsGrid({
  search,
  category,
  destination,
  featured,
  freeCancellation,
  minPrice,
  maxPrice,
}: {
  search?: string
  category?: string
  destination?: string
  featured?: boolean
  freeCancellation?: boolean
  minPrice?: number
  maxPrice?: number
}) {
  // In a real app, you'd use these filters to query Airtable
  const listings = await getListings({
    limit: 12,
    category,
    destination,
    featured,
    hasFreeCancellation: freeCancellation,
    minPrice,
    maxPrice,
  }).catch(() => [])

  if (listings.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No listings found</h3>
        <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
        <Button asChild>
          <Link href="/listings">Clear all filters</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <Link href={`/listings/${listing.fields.code}`} key={listing.id}>
          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] relative overflow-hidden">
              {listing.fields["image/src"] ? (
                <Image
                  src={listing.fields["image/src"] || "/placeholder.svg"}
                  alt={listing.fields["image/alt"] || listing.fields.title}
                  fill
                  className="object-cover"
                />
              ) : listing.fields.Photos && listing.fields.Photos.length > 0 ? (
                <Image
                  src={listing.fields.Photos[0].url || "/placeholder.svg"}
                  alt={listing.fields.title}
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <Badge className="bg-primary text-primary-foreground">
                  {listing.fields["price/retailPrice/currencySymbol"] || "$"}
                  {listing.fields["price/retailPrice/amount"] || listing.fields.Price || 0}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg line-clamp-1">{listing.fields.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mt-1">{listing.fields.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                <span className="text-sm font-medium">
                  {listing.fields["rating/score"] || listing.fields["Average Rating"] || 0} (
                  {listing.fields["rating/reviewCount"] || listing.fields["Total Reviews"] || 0})
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{listing.fields["Total Bookings"] || 0} booked</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

