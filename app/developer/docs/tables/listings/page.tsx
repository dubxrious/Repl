import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Listings Table Documentation | Red Sea Quest",
  description: "Documentation for the Listings table in Red Sea Quest's Airtable database",
}

export default function ListingsTableDocs() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Listings Table Documentation</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          The Listings table stores all tour listings available on the Red Sea Quest platform. Each record represents a
          unique marine tour or experience that users can book.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table Schema</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Field Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {/* Core fields */}
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">code</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Unique identifier for the listing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Title of the tour or experience</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">description</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Detailed description of the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">location</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Location of the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">category</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Category of the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">url</td>
                <td className="border border-gray-300 px-4 py-2">URL</td>
                <td className="border border-gray-300 px-4 py-2">URL for the tour on the website</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">primaryLabel</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Primary label for the tour</td>
              </tr>

              {/* Behaviors */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Behaviors
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">behaviours/isfeatured</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the tour is featured</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">behaviours/hasFreeCancellation</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the tour offers free cancellation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">behaviours/hasUnlimitedReschedule</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the tour offers unlimited rescheduling</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">behaviours/shouldHideFromCrawlers</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether to hide the tour from web crawlers</td>
              </tr>

              {/* Badges and quality indicators */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Badges and Quality Indicators
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">badges/0</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Primary badge for the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">qualityBadges/isBestConversion</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the tour has high conversion rate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">qualityBadges/isExcellent</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the tour is rated as excellent</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">isHighlighted</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the tour is highlighted</td>
              </tr>

              {/* Duration */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Duration
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">displayDuration/duration/days</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Duration in days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">displayDuration/duration/hours</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Duration in hours</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">displayDuration/duration/minutes</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Duration in minutes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">displayDuration/isFlexible</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the duration is flexible</td>
              </tr>

              {/* Geolocation */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Geolocation
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">geolocation/latitude</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Latitude coordinate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">geolocation/longitude</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Longitude coordinate</td>
              </tr>

              {/* Images */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Images
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">image/src</td>
                <td className="border border-gray-300 px-4 py-2">URL</td>
                <td className="border border-gray-300 px-4 py-2">URL of the main image</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">image/alt</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Alt text for the main image</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">images/0/src</td>
                <td className="border border-gray-300 px-4 py-2">URL</td>
                <td className="border border-gray-300 px-4 py-2">URL of additional image 1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">images/0/alt</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Alt text for additional image 1</td>
              </tr>

              {/* Tour details */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Tour Details
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">isPrivateTour</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether it's a private tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">languages/0</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Languages supported</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">maxTravelersAllowed</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Maximum number of travelers allowed</td>
              </tr>

              {/* Pricing */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Pricing
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">price/retailPrice/amount</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Regular price amount</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">price/retailPrice/currencyCode</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Currency code (e.g., USD)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">price/isDiscounted</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the price is discounted</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">price/discountedPrice/amount</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Discounted price amount</td>
              </tr>

              {/* Ratings */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Ratings
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">rating/exactScore</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Exact rating score (e.g., 4.7)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">rating/reviewCount</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Number of reviews</td>
              </tr>

              {/* Legacy fields */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Legacy Fields
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Listing ID</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Legacy listing ID</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Photos</td>
                <td className="border border-gray-300 px-4 py-2">Attachments</td>
                <td className="border border-gray-300 px-4 py-2">Legacy photo attachments</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Price</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Legacy price field</td>
              </tr>

              {/* Additional fields */}
              <tr className="bg-gray-50">
                <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                  Additional Fields
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">highlights</td>
                <td className="border border-gray-300 px-4 py-2">Multiple Select</td>
                <td className="border border-gray-300 px-4 py-2">Tour highlights</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">included</td>
                <td className="border border-gray-300 px-4 py-2">Multiple Select</td>
                <td className="border border-gray-300 px-4 py-2">What's included in the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">notIncluded</td>
                <td className="border border-gray-300 px-4 py-2">Multiple Select</td>
                <td className="border border-gray-300 px-4 py-2">What's not included in the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">itinerary</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Tour itinerary details</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">meetingPoint</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Meeting point for the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">hasHotelPickup</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether hotel pickup is available</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">pickupDetails</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Details about hotel pickup service</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">additionalInfo</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Additional information about the tour</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Record</h2>

        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            {`code: "RSDIVE001",
title: "Red Sea Scuba Diving Adventure",
description: "Experience the vibrant underwater world of the Red Sea with our professional diving instructors. This tour is perfect for both beginners and experienced divers.",
location: "Hurghada, Egypt",
category: "Diving",
behaviours/isfeatured: "checked",
behaviours/hasFreeCancellation: "checked",
price/retailPrice/amount: 129.99,
price/retailPrice/currencyCode: "USD",
price/isDiscounted: "checked",
price/discountedPrice/amount: 99.99,
displayDuration/duration/hours: 4,
geolocation/latitude: 27.2578,
geolocation/longitude: 33.8117,
image/src: "https://example.com/images/diving-main.jpg",
image/alt: "Scuba diving in the Red Sea coral reef",
rating/exactScore: 4.8,
rating/reviewCount: 127,
maxTravelersAllowed: 8,
languages/0: "English",
languages/1: "Arabic",
highlights: ["Vibrant coral reefs", "Professional equipment provided", "Certified instructors"],
included: ["Equipment rental", "Safety briefing", "Refreshments", "Hotel transfers"],
notIncluded: ["Underwater camera rental", "Gratuities"],
meetingPoint: "Hurghada Marina",
hasHotelPickup: true,
pickupDetails: "Pickup available from hotels in Hurghada area between 7:30-8:30 AM"`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Related Tables</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/developer/docs/tables/bookings" className="text-blue-600 hover:underline">
              Bookings
            </a>{" "}
            - Records of tour bookings
          </li>
          <li>
            <a href="/developer/docs/tables/reviews" className="text-blue-600 hover:underline">
              Reviews
            </a>{" "}
            - User reviews for listings
          </li>
          <li>
            <a href="/developer/docs/tables/categories" className="text-blue-600 hover:underline">
              Categories
            </a>{" "}
            - Tour categories
          </li>
          <li>
            <a href="/developer/docs/tables/destinations" className="text-blue-600 hover:underline">
              Destinations
            </a>{" "}
            - Tour destinations
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">API Usage</h2>

        <p className="text-lg mb-4">The Listings table is accessed through the following API functions:</p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getListings(options)</h3>
          <p>Fetches listings with optional filtering and sorting.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const featuredListings = await getListings({ 
  featured: true,
  limit: 10,
  sortField: "rating/exactScore",
  sortDirection: "desc"
});`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">getListingById(listingId)</h3>
          <p>Fetches a single listing by its ID.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const listing = await getListingById("RSDIVE001");`}
          </pre>
        </div>
      </div>
    </div>
  )
}

