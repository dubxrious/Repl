export type MenuSection = {
  title: string
  items: {
    name: string
    href: string
    icon?: string
    description?: string
  }[]
}

export type MenuCategory = {
  name: string
  sections: MenuSection[]
}

// Define the actual site structure here
export const menuData: MenuCategory[] = [
  {
    name: "Experiences",
    sections: [
      {
        title: "Water Activities",
        items: [
          {
            name: "Diving",
            href: "/activities/diving",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Snorkeling",
            href: "/activities/snorkeling",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Dolphin Watching",
            href: "/activities/dolphin-watching",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Submarine Tours",
            href: "/activities/submarine-tours",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Glass Bottom Boats",
            href: "/activities/glass-bottom-boats",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Parasailing",
            href: "/activities/parasailing",
            icon: "/placeholder.svg?height=24&width=24",
          },
        ],
      },
      {
        title: "Land Activities",
        items: [
          {
            name: "Desert Safaris",
            href: "/activities/desert-safaris",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Quad & ATV Tours",
            href: "/activities/quad-atv-tours",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Camel Riding",
            href: "/activities/camel-riding",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Horse Riding",
            href: "/activities/horse-riding",
            icon: "/placeholder.svg?height=24&width=24",
          },
        ],
      },
    ],
  },
  {
    name: "Destinations",
    sections: [
      {
        title: "Popular Destinations",
        items: [
          {
            name: "Hurghada",
            href: "/destinations/hurghada",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Sharm El Sheikh",
            href: "/destinations/sharm-el-sheikh",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Dahab",
            href: "/destinations/dahab",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Marsa Alam",
            href: "/destinations/marsa-alam",
            icon: "/placeholder.svg?height=24&width=24",
          },
        ],
      },
      {
        title: "Islands & Reefs",
        items: [
          {
            name: "Giftun Islands",
            href: "/destinations/giftun-islands",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Tiran Island",
            href: "/destinations/tiran-island",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Ras Mohammed",
            href: "/destinations/ras-mohammed",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            name: "Abu Galawa",
            href: "/destinations/abu-galawa",
            icon: "/placeholder.svg?height=24&width=24",
          },
        ],
      },
    ],
  },
]

export const filterCategories = [
  { name: "Top experiences", href: "/experiences" },
  { name: "Interests", href: "/interests" },
  { name: "Traveler type", href: "/traveler-types" },
  { name: "Outside Red Sea", href: "/outside-red-sea" },
]

