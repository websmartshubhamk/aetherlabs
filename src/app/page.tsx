'use client'

import { SmoothScroll } from '@/components/motion/SmoothScroll'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { Features } from '@/components/sections/Features'
import { Solutions } from '@/components/sections/Solutions'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Newsletter } from '@/components/sections/Newsletter'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Solutions />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
