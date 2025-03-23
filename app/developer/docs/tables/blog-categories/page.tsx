import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Categories Table Documentation | Red Sea Quest",
  description: "Documentation for the Blog Categories table in Red Sea Quest's Airtable database",
}

export default function BlogCategoriesTableDocs() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Blog Categories Table Documentation</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          The BlogCategories table stores categories for organizing blog content on the Red Sea Quest platform. Each
          record represents a unique category that can be assigned to blog posts.
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
                <td className="border border-gray-300 px-4 py-2 font-medium">Category ID</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Unique identifier for the category</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Name</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Name of the category</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Slug</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">URL-friendly version of the name</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Description</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Description of the category</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Parent Category</td>
                <td className="border border-gray-300 px-4 py-2">Link to BlogCategories</td>
                <td className="border border-gray-300 px-4 py-2">Parent category (for hierarchical categories)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Featured Image</td>
                <td className="border border-gray-300 px-4 py-2">Attachments</td>
                <td className="border border-gray-300 px-4 py-2">Image representing the category</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Post Count</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Number of posts in this category</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Meta Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">SEO title for the category page</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Meta Description</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">SEO meta description</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Meta Keywords</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">SEO keywords</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Record</h2>

        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            {`Category ID: "cat_diving",
Name: "Diving",
Slug: "diving",
Description: "Articles about diving experiences, techniques, and locations in the Red Sea.",
Featured Image: [{ url: "https://example.com/images/diving-category.jpg", filename: "diving-category.jpg", id: "att12345" }],
Post Count: 24,
Meta Title: "Diving Articles & Guides | Red Sea Quest Blog",
Meta Description: "Explore diving tips, techniques, and the best diving locations in the Red Sea with our expert guides and articles.",
Meta Keywords: "diving, scuba diving, Red Sea diving, diving techniques, diving locations"`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Related Tables</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/developer/docs/tables/blog-posts" className="text-blue-600 hover:underline">
              Blog Posts
            </a>{" "}
            - Posts assigned to these categories
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">API Usage</h2>

        <p className="text-lg mb-4">The BlogCategories table is accessed through the following API functions:</p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getBlogCategories(limit)</h3>
          <p>Fetches a list of blog categories, optionally limited to a specific number.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const categories = await getBlogCategories(20);`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">getBlogCategoryBySlug(slug)</h3>
          <p>Fetches a single blog category by its slug.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const category = await getBlogCategoryBySlug("diving");`}
          </pre>
        </div>
      </div>
    </div>
  )
}

