'use client'

import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { solutions } from '@/lib/data'

export function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="gradient-text-nature">Solutions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#e8faf3]/50">
            Purpose-built platforms that solve real-world challenges with AI.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-section-items>
          {solutions.map((sol) => (
            <div
              key={sol.name}
              className="rounded-2xl border border-[rgba(16,185,129,0.12)] bg-[rgba(3,20,13,0.6)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(16,185,129,0.3)]"
              data-section-item
            >
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#10b981] to-[#14b8a6]" />
              <sol.icon className="mt-6 h-8 w-8 text-[#10b981]" />
              <h3 className="mt-4 text-xl font-bold text-[#e8faf3]">{sol.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#14b8a6]">{sol.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#e8faf3]/45">{sol.description}</p>
              <ul className="mt-5 space-y-2">
                {sol.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#e8faf3]/60">
                    <span className="h-1 w-1 rounded-full bg-[#10b981]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#10b981] transition-colors hover:text-[#14b8a6]"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
