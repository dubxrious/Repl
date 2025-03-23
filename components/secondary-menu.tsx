"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SecondaryMenu() {
  const pathname = usePathname()
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Make the menu sticky after scrolling down 100px
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    {
      name: "Explore Red Sea",
      href: "/explore-red-sea",
    },
    {
      name: "Places to See",
      href: "/destinations",
    },
    {
      name: "Things to Do",
      href: "/listings",
    },
  ]

  if (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/payment") ||
    pathname.startsWith("/bookings/confirmation")
  ) {
    return null
  }

  return (
    <div
      className={cn(
        "w-full bg-white border-b z-40 transition-all duration-200",
        isSticky ? "fixed top-16 shadow-sm" : "relative",
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-center md:justify-start h-12">
          <nav className="flex items-center space-x-1 md:space-x-6 overflow-x-auto hide-scrollbar">
            {menuItems.map((item) => {
              const isActive =
                (item.href === "/" && pathname === "/") || (item.href !== "/" && pathname.startsWith(item.href))

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

