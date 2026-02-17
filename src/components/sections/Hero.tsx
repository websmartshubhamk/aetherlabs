'use client'

import dynamic from 'next/dynamic'
import { Play } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { heroData } from '@/lib/data'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas').then((m) => m.HeroCanvas), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-[#030f0a] via-[#041a10] to-[#030f0a]" />,
})

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroCanvas />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030f0a] to-transparent z-[5]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <div data-hero-line>
            <Badge>
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse-emerald" />
              {heroData.badge}
            </Badge>
          </div>
          <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" data-hero-line>
            {heroData.headlineTop}
            <br />
            <span className="gradient-text-nature">{heroData.headlineBottom.replace('.', '')}</span>.
          </h1>
          <p className="mt-6 max-w-lg text-base text-[#e8faf3]/50 sm:text-lg leading-relaxed" data-hero-line>
            {heroData.subline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row" data-hero-cta>
            <Button size="lg" href={heroData.primaryCTA.href}>
              {heroData.primaryCTA.label}
            </Button>
            <Button variant="ghost" size="lg" href={heroData.secondaryCTA.href}>
              <Play className="h-4 w-4" />
              {heroData.secondaryCTA.label}
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm" data-hero-cta>
            {heroData.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                {i > 0 && <span className="h-8 w-px bg-[rgba(16,185,129,0.3)]" />}
                <div>
                  <span className="text-lg font-bold text-[#10b981]">{stat.value}</span>
                  <span className="ml-1.5 text-[#e8faf3]/40">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
