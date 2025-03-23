"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { ChevronDown, Search, Calendar, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

type MenuSection = {
  title: string
  items: {
    name: string
    href: string
    icon?: string
    description?: string
  }[]
}

type MenuCategory = {
  name: string
  sections: MenuSection[]
}

// Define the actual site structure here
const menuData: MenuCategory[] = [
  {
    name: "Places to see",
    sections: [
      {
        title: "Popular Destinations",
        items: [
          {
            name: "Hurghada",
            href: "/destinations/hurghada",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Sharm El Sheikh",
            href: "/destinations/sharm-el-sheikh",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Dahab",
            href: "/destinations/dahab",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Marsa Alam",
            href: "/destinations/marsa-alam",
            icon: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      {
        title: "Islands & Reefs",
        items: [
          {
            name: "Giftun Islands",
            href: "/destinations/giftun-islands",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Tiran Island",
            href: "/destinations/tiran-island",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Ras Mohammed",
            href: "/destinations/ras-mohammed",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Abu Galawa",
            href: "/destinations/abu-galawa",
            icon: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
    ],
  },
  {
    name: "Things to do",
    sections: [
      {
        title: "Top experiences",
        items: [
          {
            name: "Diving",
            href: "/activities/diving",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Snorkeling",
            href: "/activities/snorkeling",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Dolphin & whale watching",
            href: "/activities/dolphin-watching",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Submarine tours",
            href: "/activities/submarine-tours",
            icon: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      {
        title: "Water Activities",
        items: [
          {
            name: "Swim with dolphins",
            href: "/activities/swim-with-dolphins",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Glass bottom boats",
            href: "/activities/glass-bottom-boats",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Parasailing",
            href: "/activities/parasailing",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Water parks",
            href: "/activities/water-parks",
            icon: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      {
        title: "Land Activities",
        items: [
          {
            name: "Quad & ATV tours",
            href: "/activities/quad-atv-tours",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Camel riding tours",
            href: "/activities/camel-riding",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Horse riding",
            href: "/activities/horse-riding",
            icon: "/placeholder.svg?height=40&width=40",
          },
          {
            name: "Desert safaris",
            href: "/activities/desert-safaris",
            icon: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
    ],
  },
]

const filterCategories = [
  { name: "Top experiences", href: "/experiences" },
  { name: "Interests", href: "/interests" },
  { name: "Traveler type", href: "/traveler-types" },
  { name: "Outside Red Sea", href: "/outside-red-sea" },
]

export function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()

  // Debounce timer for smoother hover interactions
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle mouse enter on category
  const handleCategoryMouseEnter = useCallback((category: string) => {
    // Clear any existing timeout to prevent flickering
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setActiveCategory(category)
  }, [])

  // Handle mouse leave from menu
  const handleMenuMouseLeave = useCallback(() => {
    // Add a small delay before closing to prevent accidental closures
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null)
      setIsDatePickerOpen(false)
    }, 100)
  }, [])

  // Handle search submission
  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Searching for:", searchQuery)
    },
    [searchQuery],
  )

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="w-full bg-background border-b" ref={menuRef} onMouseLeave={handleMenuMouseLeave}>
      {/* Top bar with search and user actions */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold">Red Sea Quest</span>
          </Link>

          <form onSubmit={handleSearch} className="hidden md:flex items-center max-w-xl w-full">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Find places and things to do"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative">
              <button
                type="button"
                className="flex items-center px-4 py-2 border border-l-0 border-gray-300 bg-background hover:bg-gray-50"
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              >
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <span>Anytime</span>
                <ChevronDown className="h-4 w-4 ml-2 text-gray-400" />
              </button>

              {isDatePickerOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-white shadow-lg rounded-md z-50 p-4">
                  <div className="space-y-2">
                    <div className="font-medium">Select dates</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-sm text-gray-500">From</label>
                        <input type="date" className="w-full border rounded p-1" />
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">To</label>
                        <input type="date" className="w-full border rounded p-1" />
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-2">
                      Apply
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Button type="submit" className="rounded-l-none">
              Search
            </Button>
          </form>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/wishlist" className="hidden md:flex items-center">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Wishlist</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </Button>
          </Link>

          <Link href="/cart" className="hidden md:flex items-center">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Cart</span>
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </Link>

          <Link href={user ? "/profile" : "/auth/login"} className="hidden md:flex items-center">
            <Button variant="ghost" size="icon">
              <span className="sr-only">{user ? "Profile" : "Login"}</span>
              <User className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 flex items-center">{/* Blog link removed */}</nav>

      {/* Mobile search (only visible on mobile) */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Find places and things to do"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit" className="rounded-l-none">
            Search
          </Button>
        </form>
      </div>
    </div>
  )
}

