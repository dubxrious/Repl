import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Destinations Table Documentation | Red Sea Quest",
  description: "Documentation for the Destinations table in Red Sea Quest's Airtable database",
}

export default function DestinationsTableDocs() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Destinations Table Documentation</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          The Destinations table stores information about all the locations where Red Sea Quest offers tours and
          experiences. Each record represents a unique destination in the Red Sea region.
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
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Destination Name</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Name of the destination</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Country</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Country where the destination is located</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">City</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">City where the destination is located</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Description</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Detailed description of the destination</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Short Description</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">Brief description for cards and previews</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Photo</td>
                <td className="border border-gray-300 px-4 py-2">Attachments</td>
                <td className="border border-gray-300 px-4 py-2">Images of the destination</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Number of Listings</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Count of tours available at this destination</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Featured</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">
                  Whether this destination is featured on the homepage
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Popular</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether this destination is popular</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Coordinates</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Geographic coordinates (latitude,longitude)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Best Time to Visit</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">Recommended time of year to visit</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Local Tips</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Insider tips for visitors</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Weather Info</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Information about local weather patterns</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Currency</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Local currency</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Language</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Primary language spoken</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Travel Requirements</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Visa and other travel requirements</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">SEO Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">SEO-optimized title</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">SEO Description</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">SEO meta description</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">SEO Keywords</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">SEO keywords</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Created At</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">Date the record was created</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Updated At</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">Date the record was last updated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Record</h2>

        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            {`Destination Name: "Hurghada",
Country: "Egypt",
City: "Hurghada",
Description: "Hurghada is a beach resort town stretching 40km along Egypt's Red Sea coast. It's renowned for scuba diving, and has numerous dive shops and schools in its modern Sekalla district. There are many restaurants, bars and nightclubs, while the old town, El Dahar, is home to traditional Egyptian coffee shops and souks.",
Short Description: "A vibrant resort town with world-class diving spots",
Photo: [{ url: "https://example.com/images/hurghada.jpg", filename: "hurghada.jpg", id: "att12345" }],
Number of Listings: 42,
Featured: true,
Popular: true,
Coordinates: "27.2578,33.8117",
Best Time to Visit: "March to May, September to November",
Local Tips: "Visit the local markets in El Dahar for authentic souvenirs. Negotiate prices - it's expected!",
Weather Info: "Hot desert climate with mild winters and very hot summers. Water temperature ranges from 22°C in winter to 28°C in summer.",
Currency: "Egyptian Pound (EGP)",
Language: "Arabic",
Travel Requirements: "Tourist visa required for most nationalities, available on arrival or in advance.",
SEO Title: "Hurghada Diving & Beach Tours | Red Sea Quest",
SEO Description: "Discover the best diving spots and beach experiences in Hurghada, Egypt. Book your Red Sea adventure today!",
SEO Keywords: "Hurghada diving, Red Sea tours, Egypt beach vacation, scuba diving Egypt",
Created At: "2023-01-15",
Updated At: "2023-06-22"`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Related Tables</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/developer/docs/tables/listings" className="text-blue-600 hover:underline">
              Listings
            </a>{" "}
            - Tours available at these destinations
          </li>
          <li>
            <a href="/developer/docs/tables/attractions" className="text-blue-600 hover:underline">
              Attractions
            </a>{" "}
            - Points of interest at these destinations
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">API Usage</h2>

        <p className="text-lg mb-4">The Destinations table is accessed through the following API functions:</p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getDestinations(limit)</h3>
          <p>Fetches a list of destinations, optionally limited to a specific number.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const destinations = await getDestinations(10);`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getFeaturedDestinations(limit)</h3>
          <p>Fetches destinations marked as featured.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const featuredDestinations = await getFeaturedDestinations(5);`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">updateDestination(destinationId, updateData)</h3>
          <p>Updates a destination record.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
await updateDestination("Hurghada", { 
  "Number of Listings": 45,
  "Updated At": new Date().toISOString().split("T")[0]
});`}
          </pre>
        </div>
      </div>
    </div>
  )
}

