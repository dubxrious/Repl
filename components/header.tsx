"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import {
  Menu,
  X,
  User,
  LogOut,
  LogIn,
  UserPlus,
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { menuData } from "@/lib/menu-data"

export function Header() {
  const { user, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const pathname = usePathname()

  // Check if we should show the mega menu
  const shouldShowMegaMenu =
    !pathname.startsWith("/checkout") &&
    !pathname.startsWith("/auth") &&
    !pathname.startsWith("/payment") &&
    !pathname.startsWith("/bookings/confirmation")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const handleLogout = useCallback(async () => {
    await logout()
    closeMobileMenu()
  }, [logout, closeMobileMenu])

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      // Implement search functionality
      console.log("Searching for:", searchQuery)
    },
    [searchQuery],
  )

  const handleCategoryMouseEnter = useCallback((category: string) => {
    setActiveCategory(category)
  }, [])

  const handleMenuMouseLeave = useCallback(() => {
    setActiveCategory(null)
    setIsDatePickerOpen(false)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-md" : "bg-white/95 border-b",
      )}
    >
      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and brand - Updated with SVG logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* New SVG logo */}
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="https://redseaquest.s3.eu-central-1.amazonaws.com/media/Favicon.svg"
                  alt="Red Sea Quest Logo"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:inline-block">Red Sea Quest</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {shouldShowMegaMenu && (
            <nav className="hidden md:flex items-center space-x-1">
              {menuData.map((category) => (
                <div
                  key={category.name}
                  className="relative"
                  onMouseEnter={() => handleCategoryMouseEnter(category.name)}
                >
                  <button
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors",
                      activeCategory === category.name
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                    )}
                  >
                    {category.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Mega menu dropdown */}
                  {activeCategory === category.name && (
                    <div
                      className="absolute top-full left-0 w-screen max-w-screen-lg bg-white shadow-lg rounded-b-lg border mt-0.5 z-50"
                      onMouseLeave={handleMenuMouseLeave}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
                        {category.sections.map((section) => (
                          <div key={section.title} className="space-y-3">
                            <h3 className="font-medium text-gray-900">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                                    onClick={() => setActiveCategory(null)}
                                  >
                                    {item.icon && (
                                      <Image
                                        src={item.icon || "/placeholder.svg"}
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="rounded-md object-cover"
                                      />
                                    )}
                                    <span>{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={`/category/${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                            >
                              View all
                              <ChevronDown className="h-4 w-4 rotate-270 ml-1" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Additional navigation items */}
              <Link
                href="/explore-red-sea"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Explore Red Sea
              </Link>
              <Link
                href="/listings"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Tours
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Blog
              </Link>
            </nav>
          )}

          {/* Search and user actions */}
          <div className="flex items-center gap-2">
            {/* Desktop search */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center max-w-md relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search experiences..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* User actions */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/wishlist">
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/cart">
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>

              {user ? (
                <div className="relative group">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="hidden md:inline-block">Account</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>

                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border overflow-hidden z-50 hidden group-hover:block">
                    <div className="py-1">
                      <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        My Profile
                      </Link>
                      <Link href="/bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        My Bookings
                      </Link>
                      <Link href="/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Wishlist
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/auth/login">Login</Link>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/auth/register">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        {shouldShowMegaMenu && (
          <div className="mt-3 md:hidden">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search experiences..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container px-4 py-4 space-y-4">
            <nav className="space-y-3">
              {menuData.map((category) => (
                <div key={category.name} className="py-2 border-b">
                  <div className="font-medium text-gray-900 mb-2">{category.name}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.sections.map((section) => (
                      <div key={section.title}>
                        <Link
                          href={`/category/${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm text-gray-600 hover:text-blue-600"
                          onClick={closeMobileMenu}
                        >
                          {section.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="py-2 border-b">
                <Link
                  href="/explore-red-sea"
                  className="block py-2 text-gray-900 font-medium"
                  onClick={closeMobileMenu}
                >
                  Explore Red Sea
                </Link>
              </div>

              <div className="py-2 border-b">
                <Link href="/listings" className="block py-2 text-gray-900 font-medium" onClick={closeMobileMenu}>
                  Tours
                </Link>
              </div>

              <div className="py-2 border-b">
                <Link href="/blog" className="block py-2 text-gray-900 font-medium" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </div>
            </nav>

            <div className="space-y-3">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 py-2 text-gray-900"
                    onClick={closeMobileMenu}
                  >
                    <User className="h-5 w-5" />
                    My Profile
                  </Link>
                  <Link
                    href="/bookings"
                    className="flex items-center gap-2 py-2 text-gray-900"
                    onClick={closeMobileMenu}
                  >
                    <Calendar className="h-5 w-5" />
                    My Bookings
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-2 py-2 text-gray-900"
                    onClick={closeMobileMenu}
                  >
                    <Heart className="h-5 w-5" />
                    Wishlist
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 py-2 text-gray-900 w-full text-left"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button asChild>
                    <Link href="/auth/login" onClick={closeMobileMenu} className="w-full justify-center">
                      <LogIn className="h-5 w-5 mr-2" />
                      Login
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/auth/register" onClick={closeMobileMenu} className="w-full justify-center">
                      <UserPlus className="h-5 w-5 mr-2" />
                      Sign Up
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

