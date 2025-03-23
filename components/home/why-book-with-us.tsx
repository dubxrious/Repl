import type React from "react"
import { Clock, Award, CreditCard, ShieldCheck, Star, Calendar } from "lucide-react"

export interface BenefitItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface WhyBookWithUsProps {
  variant?: "primary" | "secondary"
  className?: string
  title?: string
  benefits?: BenefitItem[]
}

export function WhyBookWithUs({
  variant = "primary",
  className = "",
  title = "Why book with Red Sea Quest?",
  benefits,
}: WhyBookWithUsProps) {
  // Default benefits for primary variant
  const primaryBenefits: BenefitItem[] = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 customer support",
      description: "No matter the time zone, we're here to help",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Earn rewards",
      description: "Explore, earn, redeem, and travel with our loyalty program",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Millions of reviews",
      description: "Plan your book with confidence using reviews from fellow travelers",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Plan your way",
      description: "Stay flexible with free cancellation and pay later options",
    },
  ]

  // Default benefits for secondary variant
  const secondaryBenefits: BenefitItem[] = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 customer support",
      description: "Contact our help team anytime you need assistance with your booking",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Earn rewards",
      description: "Collect Red Sea Quest points and get discounts on future bookings",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Millions of reviews",
      description: "Read verified reviews from travelers who've experienced our tours",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Plan your way",
      description: "Book tickets and tours with cancellation options for maximum flexibility",
    },
  ]

  // Use provided benefits or default based on variant
  const displayBenefits = benefits || (variant === "primary" ? primaryBenefits : secondaryBenefits)

  // Different styling based on variant
  const sectionClass = variant === "primary" ? "py-12 bg-white border-b" : "bg-background py-12"

  const iconClass = variant === "primary" ? "mb-4 rounded-full bg-primary/10 p-4" : "mb-4"

  const titleClass = variant === "primary" ? "font-bold text-lg mb-2" : "font-semibold text-lg mb-2"

  return (
    <section className={`${sectionClass} ${className}`}>
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8 md:mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayBenefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={iconClass}>{benefit.icon}</div>
              <h3 className={titleClass}>{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

