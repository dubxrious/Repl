"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import type { Category } from "@/lib/airtable"

interface CategoryCarouselProps {
  categories?: Category[]
}

export function CategoryCarousel({ categories = [] }: CategoryCarouselProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  // Initialize carousel with options optimized for touch on mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  })

  // Fallback categories if none are provided
  const fallbackCategories = [
    {
      id: "1",
      fields: {
        "Category Name": "Diving",
        Description: "Explore the underwater world of the Red Sea",
        Photo: [{ url: "/placeholder.svg?height=400&width=400&text=Diving" }],
      },
    },
    {
      id: "2",
      fields: {
        "Category Name": "Snorkeling",
        Description: "Discover vibrant coral reefs and marine life",
        Photo: [{ url: "/placeholder.svg?height=400&width=400&text=Snorkeling" }],
      },
    },
    {
      id: "3",
      fields: {
        "Category Name": "Boat Tours",
        Description: "Cruise the crystal waters of the Red Sea",
        Photo: [{ url: "/placeholder.svg?height=400&width=400&text=Boat+Tours" }],
      },
    },
    {
      id: "4",
      fields: {
        "Category Name": "Fishing",
        Description: "Try your hand at catching exotic fish species",
        Photo: [{ url: "/placeholder.svg?height=400&width=400&text=Fishing" }],
      },
    },
    {
      id: "5",
      fields: {
        "Category Name": "Sailing",
        Description: "Experience the thrill of sailing in perfect conditions",
        Photo: [{ url: "/placeholder.svg?height=400&width=400&text=Sailing" }],
      },
    },
    {
      id: "6",
      fields: {
        "Category Name": "Whale Watching",
        Description: "Witness majestic marine mammals in their natural habitat",
        Photo: [{ url: "/placeholder.svg?height=400&width=400&text=Whale+Watching" }],
      },
    },
    {
      id: "7",
      fields: {
        "Category Name": "Sunset Cruises",
        Description: "Enjoy breathtaking sunsets over the Red Sea",
        Photo: [{ url: "/placeholder.svg?height=400&width=400&text=Sunset+Cruises" }],
      },
    },
    {
      id: "8",
      fields: {
        "Category Name": "Photography Tours",
        Description: "Capture stunning underwater and coastal landscapes",
        Photo: [{ url: "/placeholder.svg?height=400&width=400&text=Photography" }],
      },
    },
  ]

  const displayCategories = categories && categories.length > 0 ? categories : fallbackCategories

  // Navigation functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  // Update current index and scroll snaps when carousel changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  // Initialize carousel and set up event listeners
  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
      {/* Main carousel container */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {displayCategories.map((category) => {
            const categoryName = category.fields["Category Name"]
            const photoUrl =
              category.fields.Photo?.[0]?.url ||
              `/placeholder.svg?height=400&width=400&text=${encodeURIComponent(categoryName)}`

            return (
              <div
                key={category.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] min-w-0 pl-4"
              >
                <Link href={`/categories/${encodeURIComponent(categoryName)}`} className="block text-center">
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 mx-auto mb-3 overflow-hidden rounded-full border-4 border-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                      <Image src={photoUrl || "/placeholder.svg"} alt={categoryName} fill className="object-cover" />
                    </div>
                    <h3 className="font-medium text-center mt-2">{categoryName}</h3>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* Desktop arrow navigation - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="relative h-full flex items-center justify-between">
          <Button
            onClick={scrollPrev}
            size="icon"
            variant="outline"
            className="pointer-events-auto -ml-4 lg:-ml-5 bg-white shadow-md hover:bg-white/90 z-10 rounded-full h-10 w-10"
            aria-label="Previous category"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={scrollNext}
            size="icon"
            variant="outline"
            className="pointer-events-auto -mr-4 lg:-mr-5 bg-white shadow-md hover:bg-white/90 z-10 rounded-full h-10 w-10"
            aria-label="Next category"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile dot indicators - only visible on mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-4" : "bg-gray-300"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile swipe hint - only shown on first load on mobile */}
      <div className="text-center text-xs text-gray-500 mt-2 md:hidden">
        <span>Swipe to explore more categories</span>
      </div>
    </div>
  )
}

