"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search, Calendar } from "lucide-react"
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [dateDisplayText, setDateDisplayText] = useState("Anytime")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()

    if (searchQuery) params.append("search", searchQuery)
    if (selectedDate) {
      params.append("date", selectedDate.toISOString())
    }

    router.push(`/listings?${params.toString()}`)
  }

  const handleCalendarSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    setDateDisplayText(date ? format(date, "MMM d, yyyy") : "Anytime")
  }

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://q4d5fee3bhult8ls.public.blob.vercel-storage.com/Red-sea-quest-17O24c7qHZ8IpTZcht9EVQm3jRjz5H.jpg?height=600&width=1920"
            alt="Red Sea coral reef with colorful fish"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
          Thrilling Joruneys Await
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
          Discover 5,000+ ways to explore the Red Sea.
        </p>

        {/* Search Bar - Refined Layout */}
        <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row w-full">
            {/* Search Input */}
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center w-full px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="Search for places and things to do"
                  className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-2 h-auto"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Date Picker */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200 md:w-[200px]">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="w-full h-full justify-start rounded-none px-4 py-3">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="ml-3 text-sm truncate">{dateDisplayText}</span>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleCalendarSelect}
                    initialFocus
                    className="rounded-md border"
                  />
                  {selectedDate && (
                    <div className="p-3 border-t">
                      <Button
                        variant="ghost"
                        className="w-full justify-center font-normal text-sm"
                        onClick={() => handleCalendarSelect(undefined)}
                      >
                        Clear Selection
                      </Button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </div>

            {/* Search Button */}
            <div className="md:w-auto">
              <Button
                type="submit"
                className={cn("w-full h-full rounded-none px-6 py-3", "md:rounded-r-lg md:rounded-l-none")}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </form>

        {/* Popular searches */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="text-white/80 text-sm">Popular:</span>
          <Button
            variant="link"
            className="text-white text-sm p-0 h-auto"
            onClick={() => router.push("/listings?category=Diving")}
          >
            Diving
          </Button>
          <Button
            variant="link"
            className="text-white text-sm p-0 h-auto"
            onClick={() => router.push("/listings?category=Snorkeling")}
          >
            Snorkeling
          </Button>
          <Button
            variant="link"
            className="text-white text-sm p-0 h-auto"
            onClick={() => router.push("/listings?category=Boat+Tours")}
          >
            Boat Tours
          </Button>
          <Button
            variant="link"
            className="text-white text-sm p-0 h-auto"
            onClick={() => router.push("/destinations/hurghada")}
          >
            Hurghada
          </Button>
        </div>
      </div>
    </section>
  )
}

