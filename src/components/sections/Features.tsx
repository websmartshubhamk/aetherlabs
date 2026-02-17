'use client'

import { Container } from '@/components/ui/Container'
import { features } from '@/lib/data'

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powered by <span className="gradient-text-nature">Innovation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#e8faf3]/50">
            Core capabilities designed to transform how you work with data and intelligence.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-section-items>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-[rgba(16,185,129,0.12)] bg-[rgba(3,20,13,0.6)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]"
              data-section-item
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(16,185,129,0.1)] transition-colors group-hover:bg-[rgba(16,185,129,0.2)]">
                <feature.icon className="h-6 w-6 text-[#10b981]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#e8faf3]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#e8faf3]/45">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
