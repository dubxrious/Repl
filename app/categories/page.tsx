import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { getCategories } from "@/lib/airtable"
import { Compass, Anchor, Ship, Fish, Waves, Sunset, Camera, Mountain, Coffee, Utensils } from "lucide-react"

export default async function CategoriesPage() {
  const categories = await getCategories().catch(() => [])

  // Map of category names to icons
  const categoryIcons: Record<string, React.ReactNode> = {
    Diving: <Fish className="h-6 w-6" />,
    Snorkeling: <Fish className="h-6 w-6" />,
    "Boat Tours": <Ship className="h-6 w-6" />,
    Fishing: <Anchor className="h-6 w-6" />,
    Sailing: <Waves className="h-6 w-6" />,
    "Sunset Cruises": <Sunset className="h-6 w-6" />,
    "Photography Tours": <Camera className="h-6 w-6" />,
    Adventure: <Mountain className="h-6 w-6" />,
    "Food & Drink": <Utensils className="h-6 w-6" />,
    Coffee: <Coffee className="h-6 w-6" />,
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse by Category</h1>
          <p className="text-muted-foreground">Discover experiences by category</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.length > 0
            ? categories.map((category) => {
                const categoryName = category.fields["Category Name"]
                const icon = categoryIcons[categoryName] || <Compass className="h-6 w-6" />

                return (
                  <Link
                    href={`/categories/${encodeURIComponent(categoryName || "")}`}
                    key={category.id}
                    className="block h-full"
                  >
                    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                      <CardContent className="p-0">
                        <div className="aspect-video relative bg-muted">
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                            <div className="rounded-full bg-background p-4">{icon}</div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h2 className="text-xl font-semibold mb-2">{categoryName}</h2>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {category.fields.Description ||
                              `Explore our ${(categoryName || "").toLowerCase()} experiences`}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span>{category.fields["Number of Listings"] || 0} experiences</span>
                            {category.fields["Average Price"] && (
                              <span className="font-medium">Avg. ${category.fields["Average Price"]}</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })
            : // Fallback placeholders if no categories are available
              Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="aspect-video relative bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                        <div className="rounded-full bg-background p-4">
                          <Compass className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2">Category {i + 1}</h2>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        Explore our exciting experiences in this category
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span>{Math.floor(Math.random() * 20) + 5} experiences</span>
                        <span className="font-medium">Avg. ${Math.floor(Math.random() * 100) + 50}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </div>
  )
}

