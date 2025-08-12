"use client";

import Cta from "@/components/Cta/Cta";
import FAQ from "@/components/FAQ/FAQ";
import Feature from "@/components/Features/Feature";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import PopularDishes from "@/components/Popular/PopularDishes";
import ScreenShoot from "@/components/Screenshoots/ScreenShoot";
import Testimonial from "@/components/Testimonial/Testimonial";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="bg-white">
        <Feature />
        <PopularDishes />
        <ScreenShoot />
        <Testimonial />
        <Newsletter />
        <Cta />
        <FAQ />
      </div>
      {showScrollTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="h-12 w-12 fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50 cursor-pointer"
          aria-label="Remonter en haut"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
