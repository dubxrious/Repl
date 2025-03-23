import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reviews Table Documentation | Red Sea Quest",
  description: "Documentation for the Reviews table in Red Sea Quest's Airtable database",
}

export default function ReviewsTableDocs() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Reviews Table Documentation</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          The Reviews table stores user feedback and ratings for tours and experiences on the Red Sea Quest platform.
          Each record represents a review submitted by a user for a specific listing.
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
                <td className="border border-gray-300 px-4 py-2 font-medium">Review ID</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Unique identifier for the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">User</td>
                <td className="border border-gray-300 px-4 py-2">Link to Users</td>
                <td className="border border-gray-300 px-4 py-2">User who submitted the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Listing</td>
                <td className="border border-gray-300 px-4 py-2">Link to Listings</td>
                <td className="border border-gray-300 px-4 py-2">Tour that was reviewed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Rating</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Rating score (1-5)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Review Text</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Text content of the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Review Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Title of the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Photos</td>
                <td className="border border-gray-300 px-4 py-2">Attachments</td>
                <td className="border border-gray-300 px-4 py-2">Photos uploaded with the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Review Date</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">Date when the review was submitted</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Sentiment Analysis</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Automated sentiment analysis of the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Review Summary</td>
                <td className="border border-gray-300 px-4 py-2">Text</td>
                <td className="border border-gray-300 px-4 py-2">AI-generated summary of the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Days Since Review</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Number of days since the review was posted</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Booking</td>
                <td className="border border-gray-300 px-4 py-2">Link to Bookings</td>
                <td className="border border-gray-300 px-4 py-2">Booking associated with this review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Service Provider</td>
                <td className="border border-gray-300 px-4 py-2">Link to Service Providers</td>
                <td className="border border-gray-300 px-4 py-2">Service provider for the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">User Full Name</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Full name of the user (for quick reference)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Listing Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Title of the listing (for quick reference)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Approval Status</td>
                <td className="border border-gray-300 px-4 py-2">Single Select</td>
                <td className="border border-gray-300 px-4 py-2">
                  Status of review approval (Pending, Approved, Rejected)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Admin Notes</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Notes from admin about the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Approved Date</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">Date when the review was approved</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Featured</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether this review is featured on the website</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Record</h2>

        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            {`Review ID: "rev_a1b2c3d4",
User: ["recUser123"],
Listing: ["recListing456"],
Rating: 5,
Review Text: "This was an amazing experience! The diving instructor was very professional and made us feel safe throughout the entire dive. We saw beautiful coral reefs and colorful fish. Highly recommend this tour to anyone visiting Hurghada.",
Review Title: "Unforgettable diving experience",
Photos: [{ url: "https://example.com/images/review-photo.jpg", filename: "review-photo.jpg", id: "att67890" }],
Review Date: "2023-08-15",
Sentiment Analysis: "Positive",
Review Summary: "Excellent diving experience with professional instructor and beautiful marine life.",
Days Since Review: 45,
Booking: ["recBooking789"],
User Full Name: "John Smith",
Listing Title: "Red Sea Scuba Diving Adventure",
Approval Status: "Approved",
Approved Date: "2023-08-16",
Featured: true`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Related Tables</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/developer/docs/tables/users" className="text-blue-600 hover:underline">
              Users
            </a>{" "}
            - Users who submitted the reviews
          </li>
          <li>
            <a href="/developer/docs/tables/listings" className="text-blue-600 hover:underline">
              Listings
            </a>{" "}
            - Tours that were reviewed
          </li>
          <li>
            <a href="/developer/docs/tables/bookings" className="text-blue-600 hover:underline">
              Bookings
            </a>{" "}
            - Bookings associated with reviews
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">API Usage</h2>

        <p className="text-lg mb-4">The Reviews table is accessed through the following API functions:</p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getReviewsForListing(listingId, limit)</h3>
          <p>Fetches reviews for a specific listing.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const reviews = await getReviewsForListing("RSDIVE001", 10);`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getReviewsByUser(userId, limit)</h3>
          <p>Fetches reviews submitted by a specific user.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const userReviews = await getReviewsByUser("recUser123", 5);`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">createReview(reviewData)</h3>
          <p>Creates a new review record.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const review = await createReview({
  userId: "recUser123",
  listingId: "RSDIVE001",
  rating: 5,
  reviewText: "Amazing experience!",
  title: "Unforgettable diving",
  pendingApproval: true
});`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">updateReviewApproval(reviewId, status, adminNotes)</h3>
          <p>Updates the approval status of a review.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
await updateReviewApproval(
  "rev_a1b2c3d4", 
  "Approved", 
  "Great review, approved for display"
);`}
          </pre>
        </div>
      </div>
    </div>
  )
}

