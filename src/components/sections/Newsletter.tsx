'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(16,185,129,0.15)] bg-[rgba(3,20,13,0.6)] p-12 text-center sm:p-20" data-section-heading>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(16,185,129,0.05)] to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay in the loop</h2>
            <p className="mx-auto mt-4 max-w-md text-[#e8faf3]/45">
              Get the latest updates on AI innovations, product launches, and industry insights.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-xl border border-[rgba(16,185,129,0.2)] bg-[rgba(3,20,13,0.8)] px-4 py-3 text-sm text-[#e8faf3] placeholder:text-[#e8faf3]/30 focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
