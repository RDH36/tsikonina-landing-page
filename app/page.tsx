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
    </div>
  )
}
