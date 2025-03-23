"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

// Define field mapping types to handle different data structures
interface FieldMapping {
  id: string
  title: string
  description: string
  price: string
  currency: string
  location: string
  rating: string
  reviewCount: string
  image: string
  imageAlt: string
  badges: string[]
  featured: string
  code: string
}

export function ListingsGrid({
  listings,
  fieldMapping = {},
  className = "",
}: {
  listings: any[]
  fieldMapping?: Partial<FieldMapping>
  className?: string
}) {
  const [sortOrder, setSortOrder] = useState("recommended")

  // Default field mappings
  const defaultMapping: FieldMapping = {
    id: "id",
    title: "fields.title",
    description: "fields.description",
    price: "fields.price/retailPrice/amount",
    currency: "fields.price/retailPrice/currencySymbol",
    location: "fields.location",
    rating: "fields.rating/score",
    reviewCount: "fields.rating/reviewCount",
    image: "fields.image/src",
    imageAlt: "fields.image/alt",
    badges: ["fields.badges/0"],
    featured: "fields.behaviours/isfeatured",
    code: "fields.code",
  }

  // Merge default mappings with provided mappings
  const mapping: FieldMapping = { ...defaultMapping, ...fieldMapping }

  // Helper function to get nested property value
  const getNestedValue = (obj: any, path: string) => {
    if (!path) return undefined

    // Handle array paths like "fields.Photos[0].url"
    if (path.includes("[") && path.includes("]")) {
      const arrayMatch = path.match(/(.+)\[(\d+)\]\.?(.*)/)
      if (arrayMatch) {
        const [_, basePath, index, remainingPath] = arrayMatch
        const baseValue = getNestedValue(obj, basePath)
        if (Array.isArray(baseValue) && baseValue.length > Number.parseInt(index)) {
          const arrayItem = baseValue[Number.parseInt(index)]
          return remainingPath ? getNestedValue(arrayItem, remainingPath) : arrayItem
        }
        return undefined
      }
    }

    return path.split(".").reduce((prev, curr) => {
      return prev && prev[curr] !== undefined ? prev[curr] : undefined
    }, obj)
  }

  // Sort listings based on selected order
  const sortedListings = [...listings].sort((a, b) => {
    const aPrice = getNestedValue(a, mapping.price) || 0
    const bPrice = getNestedValue(b, mapping.price) || 0
    const aRating = getNestedValue(a, mapping.rating) || 0
    const bRating = getNestedValue(b, mapping.rating) || 0

    if (sortOrder === "price-low") {
      return aPrice - bPrice
    } else if (sortOrder === "price-high") {
      return bPrice - aPrice
    } else if (sortOrder === "rating") {
      return bRating - aRating
    }
    // Default: recommended
    return 0
  })

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Experiences</h1>
        <Select value={sortOrder} onValueChange={setSortOrder}>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedListings.map((listing) => {
          // Extract values using field mappings
          const id = getNestedValue(listing, mapping.id)
          const title = getNestedValue(listing, mapping.title)
          const description = getNestedValue(listing, mapping.description)
          const price = getNestedValue(listing, mapping.price)
          const currency = getNestedValue(listing, mapping.currency) || "$"
          const location = getNestedValue(listing, mapping.location)
          const rating = getNestedValue(listing, mapping.rating) || 0
          const reviewCount = getNestedValue(listing, mapping.reviewCount) || 0
          const image = getNestedValue(listing, mapping.image)
          const imageAlt = getNestedValue(listing, mapping.imageAlt) || title
          const code = getNestedValue(listing, mapping.code) || id

          // Handle badges which could be an array or a single value
          let badges: string[] = []
          if (Array.isArray(mapping.badges)) {
            badges = mapping.badges.map((path) => getNestedValue(listing, path)).filter(Boolean)
          } else if (typeof mapping.badges === "string") {
            const badgeValue = getNestedValue(listing, mapping.badges)
            if (Array.isArray(badgeValue)) {
              badges = badgeValue
            } else if (badgeValue) {
              badges = [badgeValue]
            }
          }

          // Check if listing is featured
          const isFeatured =
            getNestedValue(listing, mapping.featured) === "checked" ||
            getNestedValue(listing, mapping.featured) === true

          return (
            <Card key={id} className="h-full overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                {image ? (
                  <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
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
                  {badges.map((badge, idx) => (
                    <Badge key={idx} className="bg-black/70 text-white hover:bg-black/80">
                      {badge}
                    </Badge>
                  ))}
                  {isFeatured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {currency}
                    {price}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
                {location && (
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    <span>{location}</span>
                  </div>
                )}
                <p className="text-muted-foreground text-sm line-clamp-2 mt-1">{description}</p>
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(rating) ? "fill-[#ffd935] text-[#ffd935]" : "text-muted-foreground",
                      )}
                    />
                  ))}
                  <span className="text-sm font-medium ml-1">
                    {rating} ({reviewCount})
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/listings/${code}`}>Check Availability</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

