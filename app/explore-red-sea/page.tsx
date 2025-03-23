import { Calendar } from "@/components/ui/calendar"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Anchor, Compass, Fish, MapPin, Shell, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Explore the Red Sea | Red Sea Quest - Marine Tours & Experiences",
  description:
    "Discover the wonders of the Red Sea - from vibrant coral reefs to diverse marine life. Plan your perfect Red Sea adventure with expert guides and tours.",
  keywords:
    "Red Sea, diving, snorkeling, coral reefs, marine life, Egypt, Saudi Arabia, Jordan, travel, underwater, scuba diving",
}

export default function ExploreRedSeaPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Vibrant coral reef in the Red Sea with colorful fish"
            width={1200}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the Wonders of the Red Sea</h1>
          <p className="text-lg md:text-xl mb-8">
            Discover one of the world's most spectacular marine environments, home to vibrant coral reefs, diverse
            marine life, and crystal-clear waters.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/listings">Browse Tours</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="#learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="learn-more" className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">The Red Sea: A Natural Wonder</h2>
            <p className="text-gray-700 mb-4">
              The Red Sea is a seawater inlet of the Indian Ocean, lying between Africa and Asia. Despite its name, the
              Red Sea is actually known for its vibrant blue waters and spectacular underwater ecosystem.
            </p>
            <p className="text-gray-700 mb-4">
              Stretching over 1,200 miles (2,000 km) and with an average depth of 1,608 feet (490 meters), the Red Sea
              is home to over 1,200 species of fish, including 200 endemic species that cannot be found anywhere else in
              the world.
            </p>
            <p className="text-gray-700 mb-6">
              The Red Sea's isolation and unique environmental conditions have created one of the most diverse marine
              ecosystems on the planet, making it a paradise for divers, snorkelers, and marine enthusiasts.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Between Africa & Asia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Waves className="h-5 w-5 text-blue-600" />
                <span>1,200+ Fish Species</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Compass className="h-5 w-5 text-blue-600" />
                <span>2,000 km Length</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Map of the Red Sea showing its location between Africa and Asia"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Marine Life Section */}
      <section className="mb-16 bg-blue-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Discover the Rich Marine Life</h2>
        <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          The Red Sea boasts one of the world's most diverse marine ecosystems, with vibrant coral reefs, hundreds of
          fish species, and fascinating marine mammals.
        </p>

        <Tabs defaultValue="coral" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="coral">Coral Reefs</TabsTrigger>
            <TabsTrigger value="fish">Fish Species</TabsTrigger>
            <TabsTrigger value="sharks">Sharks & Rays</TabsTrigger>
            <TabsTrigger value="mammals">Marine Mammals</TabsTrigger>
          </TabsList>

          <TabsContent value="coral" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Vibrant Coral Reefs</h3>
                <p className="text-gray-700 mb-4">
                  The Red Sea is home to over 200 species of soft and hard corals, forming intricate reef structures
                  that provide habitats for countless marine species.
                </p>
                <p className="text-gray-700 mb-4">
                  These coral reefs are among the most resilient in the world, able to withstand higher temperatures and
                  salinity levels that would bleach corals in other oceans.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Over 200 coral species</li>
                  <li>Some of the most resilient corals in the world</li>
                  <li>Fringing reefs along most of the coastline</li>
                  <li>Unique coral formations and underwater landscapes</li>
                </ul>
              </div>

              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Colorful coral reef in the Red Sea"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fish" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Colorful Fish Species</h3>
                <p className="text-gray-700 mb-4">
                  With over 1,200 species of fish, including 200 endemic species, the Red Sea offers an incredible
                  diversity of marine life for visitors to observe.
                </p>
                <p className="text-gray-700 mb-4">
                  From tiny, colorful reef fish to larger pelagic species, the waters of the Red Sea are teeming with
                  life.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Angelfish, butterflyfish, and parrotfish</li>
                  <li>Schools of barracuda and jackfish</li>
                  <li>Lionfish and scorpionfish</li>
                  <li>Moray eels and octopuses</li>
                </ul>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Colorful tropical fish in the Red Sea"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sharks" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Sharks & Rays</h3>
                <p className="text-gray-700 mb-4">
                  The Red Sea is home to a variety of shark and ray species, from the gentle whale shark to reef sharks
                  and beautiful manta rays.
                </p>
                <p className="text-gray-700 mb-4">
                  These magnificent creatures are an important part of the marine ecosystem and are a highlight for many
                  divers visiting the region.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Whale sharks (the largest fish in the ocean)</li>
                  <li>Reef sharks including blacktip and whitetip</li>
                  <li>Manta rays and eagle rays</li>
                  <li>Hammerhead sharks in certain locations</li>
                </ul>
              </div>

              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Whale shark swimming in the Red Sea"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mammals" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Marine Mammals</h3>
                <p className="text-gray-700 mb-4">
                  The Red Sea is also home to several species of marine mammals, including dolphins and dugongs.
                </p>
                <p className="text-gray-700 mb-4">
                  Spinner dolphins are commonly seen in pods, often playfully swimming alongside boats or entertaining
                  divers and snorkelers with their acrobatic displays.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Spinner dolphins and bottlenose dolphins</li>
                  <li>Dugongs (sea cows) in seagrass areas</li>
                  <li>Occasional visits from whales</li>
                  <li>Opportunities for dolphin watching tours</li>
                </ul>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pod of dolphins swimming in the Red Sea"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Popular Activities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Popular Activities</h2>
        <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          The Red Sea offers a wide range of activities for visitors to enjoy, from underwater adventures to relaxing
          beach experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="h-48 rounded-md overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Scuba diver exploring a coral reef"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle>Scuba Diving</CardTitle>
              <CardDescription>Explore vibrant coral reefs and encounter diverse marine life</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The Red Sea is renowned as one of the world's top diving destinations, offering exceptional visibility,
                warm waters year-round, and incredible biodiversity. From beginner-friendly sites to advanced deep
                dives, there's something for every level.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/activities/diving">Explore Diving Tours</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-48 rounded-md overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Snorkeler viewing colorful fish near the surface"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle>Snorkeling</CardTitle>
              <CardDescription>Experience the underwater world without diving equipment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Many of the Red Sea's most beautiful reefs are accessible to snorkelers, with shallow coral gardens
                teeming with colorful fish just meters from the shore. Perfect for families and those who prefer to stay
                near the surface.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/activities/snorkeling">Discover Snorkeling Spots</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-48 rounded-md overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Glass bottom boat tour with tourists viewing marine life"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle>Glass Bottom Boats</CardTitle>
              <CardDescription>View marine life without getting wet</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Glass bottom boat tours provide a comfortable way to observe the underwater world while staying dry.
                These tours are ideal for those who want to experience the beauty of the Red Sea's coral reefs without
                swimming or diving.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/activities/glass-bottom-boats">Book a Tour</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" asChild>
            <Link href="/listings">View All Activities</Link>
          </Button>
        </div>
      </section>

      {/* Travel Information Section */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Travel Information</h2>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Planning your trip to the Red Sea? Here's some essential information to help you prepare.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Best Time to Visit</h3>
              </div>
              <p className="text-gray-700">
                The Red Sea enjoys a warm climate year-round. The best time to visit is during spring (March-May) and
                autumn (September-November) when temperatures are pleasant and the water is perfect for diving and
                snorkeling.
              </p>
              <p className="text-gray-700 mt-2">
                Summer (June-August) can be extremely hot, while winter (December-February) offers cooler temperatures
                but still good diving conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Anchor className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Popular Destinations</h3>
              </div>
              <p className="text-gray-700">The most popular Red Sea destinations include:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Hurghada, Egypt</li>
                <li>Sharm El Sheikh, Egypt</li>
                <li>Dahab, Egypt</li>
                <li>Aqaba, Jordan</li>
                <li>Jeddah, Saudi Arabia</li>
                <li>Marsa Alam, Egypt</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Marine Conservation</h3>
              </div>
              <p className="text-gray-700">
                The Red Sea's delicate ecosystem requires protection. When visiting, please:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Never touch or stand on coral</li>
                <li>Use reef-safe sunscreen</li>
                <li>Don't feed or disturb marine life</li>
                <li>Take all trash with you</li>
                <li>Support eco-friendly tour operators</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Fish className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Practical Tips</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Safety</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Always dive or snorkel with a buddy</li>
                  <li>Use reputable tour operators with proper safety equipment</li>
                  <li>Stay hydrated and protect yourself from the sun</li>
                  <li>Check travel advisories before booking</li>
                  <li>Get comprehensive travel insurance that covers water activities</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">What to Pack</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Reef-safe sunscreen (SPF 30+)</li>
                  <li>Hat, sunglasses, and light clothing</li>
                  <li>Rash guard for snorkeling/diving</li>
                  <li>Underwater camera if possible</li>
                  <li>Reusable water bottle</li>
                  <li>Appropriate footwear for rocky beaches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 bg-blue-600 rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Underwater scene with coral and fish"
            width={1200}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore the Red Sea?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect Red Sea adventure today and discover the underwater wonders waiting for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/listings">Browse Tours</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Do I need to know how to swim to enjoy the Red Sea?
            </h3>
            <p className="text-gray-700">
              While swimming skills are recommended for most water activities, non-swimmers can still enjoy the Red Sea
              through glass bottom boat tours or by using flotation devices during supervised snorkeling experiences.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is the Red Sea safe for swimming?</h3>
            <p className="text-gray-700">
              Yes, the Red Sea is generally safe for swimming in designated areas. Always follow local guidelines, swim
              in areas with lifeguards when possible, and be aware of currents and marine life.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              When is the best time for diving in the Red Sea?
            </h3>
            <p className="text-gray-700">
              The Red Sea offers year-round diving, but the best conditions are typically from March to May and
              September to November when water temperatures are comfortable and visibility is excellent.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Do I need a visa to visit Red Sea destinations?
            </h3>
            <p className="text-gray-700">
              Visa requirements depend on your nationality and which country you're visiting (Egypt, Saudi Arabia,
              Jordan, etc.). Check the specific requirements for your destination before traveling.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

