'use client'

import { Container } from '@/components/ui/Container'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What People <span className="gradient-text-nature">Say</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-section-items>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[rgba(16,185,129,0.12)] bg-[rgba(3,20,13,0.6)] p-7"
              data-section-item
            >
              <span className="text-3xl font-serif text-[#10b981]">&ldquo;</span>
              <p className="mt-2 text-sm leading-relaxed text-[#e8faf3]/60">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#10b981] to-[#14b8a6]" />
                <div>
                  <p className="text-sm font-semibold text-[#e8faf3]">{t.name}</p>
                  <p className="text-xs text-[#e8faf3]/40">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
