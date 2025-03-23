import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Posts Table Documentation | Red Sea Quest",
  description: "Documentation for the Blog Posts table in Red Sea Quest's Airtable database",
}

export default function BlogPostsTableDocs() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Blog Posts Table Documentation</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          The BlogPosts table stores all blog content published on the Red Sea Quest platform. Each record represents a
          unique blog article with its content, metadata, and relationships to categories, tags, and authors.
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
                <td className="border border-gray-300 px-4 py-2 font-medium">Post ID</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Unique identifier for the blog post</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Title of the blog post</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Slug</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">URL-friendly version of the title</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Content</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Main content of the blog post (Markdown)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Featured Image</td>
                <td className="border border-gray-300 px-4 py-2">Attachments</td>
                <td className="border border-gray-300 px-4 py-2">Main image for the blog post</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Publication Date</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">Date when the post was published</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Last Updated</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">Date when the post was last updated</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Status</td>
                <td className="border border-gray-300 px-4 py-2">Single Select</td>
                <td className="border border-gray-300 px-4 py-2">Publication status (Draft, Published, Archived)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Author</td>
                <td className="border border-gray-300 px-4 py-2">Link to BlogAuthors</td>
                <td className="border border-gray-300 px-4 py-2">Author of the blog post</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Categories</td>
                <td className="border border-gray-300 px-4 py-2">Link to BlogCategories</td>
                <td className="border border-gray-300 px-4 py-2">Categories the post belongs to</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Tags</td>
                <td className="border border-gray-300 px-4 py-2">Link to BlogTags</td>
                <td className="border border-gray-300 px-4 py-2">Tags associated with the post</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Excerpt</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">Short summary of the blog post</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Read Time</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Estimated reading time in minutes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">View Count</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Number of times the post has been viewed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Featured Post</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether the post is featured on the homepage</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Allow Comments</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether comments are allowed on the post</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Meta Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">SEO title for the post</td>
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
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Open Graph Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Title for social media sharing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Open Graph Description</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">Description for social media sharing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Open Graph Image</td>
                <td className="border border-gray-300 px-4 py-2">Attachments</td>
                <td className="border border-gray-300 px-4 py-2">Image for social media sharing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Twitter Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Title for Twitter sharing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Twitter Description</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">Description for Twitter sharing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Twitter Image</td>
                <td className="border border-gray-300 px-4 py-2">Attachments</td>
                <td className="border border-gray-300 px-4 py-2">Image for Twitter sharing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Canonical URL</td>
                <td className="border border-gray-300 px-4 py-2">URL</td>
                <td className="border border-gray-300 px-4 py-2">Canonical URL for SEO</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Related Posts</td>
                <td className="border border-gray-300 px-4 py-2">Link to BlogPosts</td>
                <td className="border border-gray-300 px-4 py-2">Related blog posts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Record</h2>

        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            {`Post ID: "post_a1b2c3d4",
Title: "Top 10 Diving Spots in the Red Sea",
Slug: "top-10-diving-spots-red-sea-a1b2c3d4",
Content: "# Top 10 Diving Spots in the Red Sea\n\nThe Red Sea is home to some of the most spectacular diving locations in the world...",
Featured Image: [{ url: "https://example.com/images/diving-spots.jpg", filename: "diving-spots.jpg", id: "att12345" }],
Publication Date: "2023-06-15",
Last Updated: "2023-07-10",
Status: "Published",
Author: ["recAuthor123"],
Categories: ["recCategory456", "recCategory789"],
Tags: ["recTag101", "recTag202", "recTag303"],
Excerpt: "Discover the most breathtaking diving locations in the Red Sea, from vibrant coral reefs to fascinating shipwrecks.",
Read Time: 8,
View Count: 1245,
Featured Post: true,
Allow Comments: true,
Meta Title: "Top 10 Diving Spots in the Red Sea | Red Sea Quest",
Meta Description: "Explore the 10 best diving locations in the Red Sea, featuring vibrant coral reefs, diverse marine life, and historic shipwrecks.",
Meta Keywords: "Red Sea diving, best diving spots, coral reefs, shipwrecks, marine life",
Open Graph Title: "Discover the 10 Best Diving Spots in the Red Sea",
Open Graph Description: "Plan your next diving adventure with our guide to the most spectacular underwater locations in the Red Sea.",
Related Posts: ["recPost505", "recPost606"]`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Related Tables</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/developer/docs/tables/blog-authors" className="text-blue-600 hover:underline">
              Blog Authors
            </a>{" "}
            - Authors of blog posts
          </li>
          <li>
            <a href="/developer/docs/tables/blog-categories" className="text-blue-600 hover:underline">
              Blog Categories
            </a>{" "}
            - Categories for blog posts
          </li>
          <li>
            <a href="/developer/docs/tables/blog-tags" className="text-blue-600 hover:underline">
              Blog Tags
            </a>{" "}
            - Tags for blog posts
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">API Usage</h2>

        <p className="text-lg mb-4">The BlogPosts table is accessed through the following API functions:</p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getBlogPosts(options)</h3>
          <p>Fetches blog posts with optional filtering, pagination, and sorting.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const posts = await getBlogPosts({ 
  limit: 10,
  page: 1,
  category: "Diving",
  featured: true,
  sortField: "Publication Date",
  sortDirection: "desc"
});`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getBlogPostBySlug(slug)</h3>
          <p>Fetches a single blog post by its slug.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const post = await getBlogPostBySlug("top-10-diving-spots-red-sea-a1b2c3d4");`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">createBlogPost(data)</h3>
          <p>Creates a new blog post.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const post = await createBlogPost({
  title: "New Diving Spot Discovered",
  content: "# New Diving Spot\\n\\nExciting news for divers...",
  excerpt: "A newly discovered diving location in the Red Sea",
  authorId: "recAuthor123",
  categoryIds: ["recCategory456"],
  tagIds: ["recTag101", "recTag202"],
  status: "Draft"
});`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">updateBlogPost(postId, data)</h3>
          <p>Updates an existing blog post.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
await updateBlogPost("post_a1b2c3d4", { 
  title: "Updated Title",
  content: "Updated content...",
  status: "Published"
});`}
          </pre>
        </div>
      </div>
    </div>
  )
}

