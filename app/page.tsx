"use client"

import Navigation from "@/components/Navigation/Navigation"
import Hero from "@/components/Hero/Hero"
import Feature from "@/components/Features/Feature"
import PopularDishes from "@/components/Popular/PopularDishes"
import ScreenShoot from "@/components/Screenshoots/ScreenShoot"
import Testimonial from "@/components/Testimonial/Testimonial"
import Pricing from "@/components/Pricing/Pricing"
import Cta from "@/components/Cta/Cta"
import Footer from "@/components/Footer/Footer"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Navigation />
      <Hero />
      <Feature />
      <PopularDishes />
      <ScreenShoot />
      <Testimonial />
      <Pricing />
      <Cta />
      <Footer />
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="h-12 w-12 fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50 cursor-pointer"
        aria-label="Remonter en haut"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  )
}
