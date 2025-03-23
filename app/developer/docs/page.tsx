import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Red Sea Quest Developer Documentation",
  description: "Comprehensive documentation for Red Sea Quest developers",
}

export default function DeveloperDocs() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Red Sea Quest Developer Documentation</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg mb-4">
          Welcome to the Red Sea Quest developer documentation. This comprehensive guide provides detailed information
          about the application architecture, data models, and integration points to help you understand and extend the
          platform.
        </p>
        <p className="text-lg mb-4">
          Red Sea Quest is an Online Travel Agency (OTA) specializing in marine tours and experiences in the Red Sea
          region. The platform allows users to browse, search, filter, and book various marine experiences, manage their
          bookings, and leave reviews.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Technical Stack</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Frontend:</strong> Next.js 14 (App Router), React 19, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Next.js API Routes, Server Actions
          </li>
          <li>
            <strong>Database:</strong> Airtable (primary data store)
          </li>
          <li>
            <strong>Authentication:</strong> Custom JWT-based auth
          </li>
          <li>
            <strong>UI Components:</strong> shadcn/ui component library
          </li>
          <li>
            <strong>Icons:</strong> Lucide React
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Airtable Database Schema</h2>
        <p className="text-lg mb-4">
          Red Sea Quest uses Airtable as its primary data store. Below are links to detailed documentation for each
          table in our database:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <Link
            href="/developer/docs/tables/listings"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Listings</h3>
            <p className="text-gray-600">Tour listings with details</p>
          </Link>

          <Link
            href="/developer/docs/tables/destinations"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Destinations</h3>
            <p className="text-gray-600">Destination information</p>
          </Link>

          <Link
            href="/developer/docs/tables/categories"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Categories</h3>
            <p className="text-gray-600">Tour categories</p>
          </Link>

          <Link
            href="/developer/docs/tables/bookings"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Bookings</h3>
            <p className="text-gray-600">User bookings</p>
          </Link>

          <Link
            href="/developer/docs/tables/reviews"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Reviews</h3>
            <p className="text-gray-600">User reviews</p>
          </Link>

          <Link
            href="/developer/docs/tables/users"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Users</h3>
            <p className="text-gray-600">User accounts</p>
          </Link>

          <Link
            href="/developer/docs/tables/blog-posts"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Blog Posts</h3>
            <p className="text-gray-600">Blog content</p>
          </Link>

          <Link
            href="/developer/docs/tables/blog-categories"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Blog Categories</h3>
            <p className="text-gray-600">Blog categories</p>
          </Link>

          <Link
            href="/developer/docs/tables/blog-tags"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Blog Tags</h3>
            <p className="text-gray-600">Blog tags</p>
          </Link>

          <Link
            href="/developer/docs/tables/blog-authors"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Blog Authors</h3>
            <p className="text-gray-600">Blog authors</p>
          </Link>

          <Link
            href="/developer/docs/tables/attractions"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Attractions</h3>
            <p className="text-gray-600">Tourist attractions</p>
          </Link>

          <Link
            href="/developer/docs/tables/amenities"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Amenities</h3>
            <p className="text-gray-600">Tour amenities</p>
          </Link>

          <Link
            href="/developer/docs/tables/payments"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Payments</h3>
            <p className="text-gray-600">Payment records</p>
          </Link>

          <Link
            href="/developer/docs/tables/service-providers"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Service Providers</h3>
            <p className="text-gray-600">Tour operators</p>
          </Link>

          <Link
            href="/developer/docs/tables/user-history"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">User History</h3>
            <p className="text-gray-600">User activity logs</p>
          </Link>

          <Link
            href="/developer/docs/tables/promotions"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Promotions</h3>
            <p className="text-gray-600">Promotional offers</p>
          </Link>

          <Link
            href="/developer/docs/tables/favorites"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Favorites</h3>
            <p className="text-gray-600">User favorite listings</p>
          </Link>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">API Documentation</h2>
        <p className="text-lg mb-4">
          Red Sea Quest provides several API endpoints for interacting with the application data:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/developer/docs/api/listings" className="text-blue-600 hover:underline">
              Listings API
            </Link>
          </li>
          <li>
            <Link href="/developer/docs/api/bookings" className="text-blue-600 hover:underline">
              Bookings API
            </Link>
          </li>
          <li>
            <Link href="/developer/docs/api/auth" className="text-blue-600 hover:underline">
              Authentication API
            </Link>
          </li>
          <li>
            <Link href="/developer/docs/api/blog" className="text-blue-600 hover:underline">
              Blog API
            </Link>
          </li>
          <li>
            <Link href="/developer/docs/api/reviews" className="text-blue-600 hover:underline">
              Reviews API
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Integration Points</h2>
        <p className="text-lg mb-4">The application has several integration points with external services:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Airtable:</strong> Primary data store (required)
          </li>
          <li>
            <strong>PayPal:</strong> Payment processing
          </li>
          <li>
            <strong>WhatsApp:</strong> For customer communication (optional)
          </li>
          <li>
            <strong>Social Media:</strong> Marketing automation (optional)
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
        <p className="text-lg mb-4">
          If you encounter issues with Airtable connectivity, the project includes diagnostic endpoints:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>/api/debug/airtable-status</code>: Check Airtable connection status
          </li>
          <li>
            <code>/api/debug/airtable-permissions</code>: Verify Airtable permissions
          </li>
          <li>
            <code>/api/debug/blog-posts</code>: Test blog post retrieval
          </li>
        </ul>
      </div>
    </div>
  )
}

