import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bookings Table Documentation | Red Sea Quest",
  description: "Documentation for the Bookings table in Red Sea Quest's Airtable database",
}

export default function BookingsTableDocs() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Bookings Table Documentation</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          The Bookings table stores all tour reservations made by users on the Red Sea Quest platform. Each record
          represents a unique booking for a specific tour, date, and user.
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
                <td className="border border-gray-300 px-4 py-2 font-medium">Booking ID</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Unique identifier for the booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">User</td>
                <td className="border border-gray-300 px-4 py-2">Link to Users</td>
                <td className="border border-gray-300 px-4 py-2">User who made the booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Listing</td>
                <td className="border border-gray-300 px-4 py-2">Link to Listings</td>
                <td className="border border-gray-300 px-4 py-2">Tour that was booked</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Booking Date</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">Date when the booking was made</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Check-in Date</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">Start date of the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Check-out Date</td>
                <td className="border border-gray-300 px-4 py-2">Date</td>
                <td className="border border-gray-300 px-4 py-2">End date of the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Number of Guests</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Number of people in the booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Total Price</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Total price of the booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Payment Status</td>
                <td className="border border-gray-300 px-4 py-2">Single Select</td>
                <td className="border border-gray-300 px-4 py-2">Status of payment (Pending, Paid, Refunded, etc.)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Start Time</td>
                <td className="border border-gray-300 px-4 py-2">Time</td>
                <td className="border border-gray-300 px-4 py-2">Start time of the tour</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Contact Name</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Name of the contact person</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Contact Email</td>
                <td className="border border-gray-300 px-4 py-2">Email</td>
                <td className="border border-gray-300 px-4 py-2">Email of the contact person</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Contact Phone</td>
                <td className="border border-gray-300 px-4 py-2">Phone</td>
                <td className="border border-gray-300 px-4 py-2">Phone number of the contact person</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Special Requests</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Special requests or notes for the booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Needs Pickup</td>
                <td className="border border-gray-300 px-4 py-2">Checkbox</td>
                <td className="border border-gray-300 px-4 py-2">Whether hotel pickup is needed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Pickup Location</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Hotel or location for pickup</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Reviews</td>
                <td className="border border-gray-300 px-4 py-2">Link to Reviews</td>
                <td className="border border-gray-300 px-4 py-2">Reviews left for this booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Messages</td>
                <td className="border border-gray-300 px-4 py-2">Link to Messages</td>
                <td className="border border-gray-300 px-4 py-2">Messages related to this booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Payments</td>
                <td className="border border-gray-300 px-4 py-2">Link to Payments</td>
                <td className="border border-gray-300 px-4 py-2">Payment records for this booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Promotion Applied</td>
                <td className="border border-gray-300 px-4 py-2">Link to Promotions</td>
                <td className="border border-gray-300 px-4 py-2">Promotion used for this booking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Duration of Stay</td>
                <td className="border border-gray-300 px-4 py-2">Number</td>
                <td className="border border-gray-300 px-4 py-2">Duration of the booking in days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Booking Summary</td>
                <td className="border border-gray-300 px-4 py-2">Long Text</td>
                <td className="border border-gray-300 px-4 py-2">Summary of the booking details</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Review Sentiment</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Sentiment analysis of the review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">User Email</td>
                <td className="border border-gray-300 px-4 py-2">Email</td>
                <td className="border border-gray-300 px-4 py-2">Email of the user (for quick reference)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Listing Title</td>
                <td className="border border-gray-300 px-4 py-2">String</td>
                <td className="border border-gray-300 px-4 py-2">Title of the listing (for quick reference)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Record</h2>

        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            {`Booking ID: "BK-20230715-001",
User: ["recUser123"],
Listing: ["recListing456"],
Booking Date: "2023-07-15",
Check-in Date: "2023-08-10",
Check-out Date: "2023-08-10",
Number of Guests: 2,
Total Price: 199.98,
Payment Status: "Paid",
Start Time: "09:00",
Contact Name: "John Smith",
Contact Email: "john.smith@example.com",
Contact Phone: "+1-555-123-4567",
Special Requests: "We would like to bring our underwater camera. Is that allowed?",
Needs Pickup: true,
Pickup Location: "Sunrise Crystal Bay Resort",
Reviews: ["recReview789"],
Payments: ["recPayment101"],
Duration of Stay: 1,
Booking Summary: "2-person scuba diving tour on August 10, 2023, with hotel pickup from Sunrise Crystal Bay Resort.",
User Email: "john.smith@example.com",
Listing Title: "Red Sea Scuba Diving Adventure"`}
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
            - Users who made the bookings
          </li>
          <li>
            <a href="/developer/docs/tables/listings" className="text-blue-600 hover:underline">
              Listings
            </a>{" "}
            - Tours that were booked
          </li>
          <li>
            <a href="/developer/docs/tables/reviews" className="text-blue-600 hover:underline">
              Reviews
            </a>{" "}
            - Reviews left for bookings
          </li>
          <li>
            <a href="/developer/docs/tables/payments" className="text-blue-600 hover:underline">
              Payments
            </a>{" "}
            - Payment records for bookings
          </li>
          <li>
            <a href="/developer/docs/tables/promotions" className="text-blue-600 hover:underline">
              Promotions
            </a>{" "}
            - Promotions applied to bookings
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">API Usage</h2>

        <p className="text-lg mb-4">The Bookings table is accessed through the following API functions:</p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">createBooking(bookingData)</h3>
          <p>Creates a new booking record.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const booking = await createBooking({
  bookingId: "BK-20230715-001",
  userId: "recUser123",
  listingId: "RSDIVE001",
  checkInDate: "2023-08-10",
  checkOutDate: "2023-08-10",
  numberOfGuests: 2,
  totalPrice: 199.98,
  paymentStatus: "Paid",
  startTime: "09:00",
  contactName: "John Smith",
  contactEmail: "john.smith@example.com",
  contactPhone: "+1-555-123-4567",
  needsPickup: true,
  pickupLocation: "Sunrise Crystal Bay Resort"
});`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">getUserBookings(userId)</h3>
          <p>Fetches all bookings for a specific user.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const userBookings = await getUserBookings("recUser123");`}
          </pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">getBookingById(bookingId)</h3>
          <p>Fetches a single booking by its ID.</p>
          <pre className="text-sm mt-2 bg-gray-100 p-2 rounded">
            {`// Example usage
const booking = await getBookingById("BK-20230715-001");`}
          </pre>
        </div>
      </div>
    </div>
  )
}

