"use client"

import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Teachers from "@/components/Teachers";
import CoursesList from "@/components/coursesList";

export default function Home() {
  return (
  <>
  
  <Features />
  <HeroSection />
  <CoursesList />
  <Teachers />
  <Testimonials />
  </>
  )
}
