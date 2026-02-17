'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { pricingPlans } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent <span className="gradient-text-nature">Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#e8faf3]/50">
            Start free, scale as you grow. No hidden fees.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={cn('text-sm', !yearly ? 'text-[#e8faf3]' : 'text-[#e8faf3]/40')}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={cn('relative h-7 w-12 rounded-full transition-colors duration-200 cursor-pointer', yearly ? 'bg-[#10b981]' : 'bg-[rgba(16,185,129,0.2)]')}
              role="switch"
              aria-checked={yearly}
            >
              <span className={cn('absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200', yearly && 'translate-x-5')} />
            </button>
            <span className={cn('text-sm', yearly ? 'text-[#e8faf3]' : 'text-[#e8faf3]/40')}>
              Yearly <span className="text-[#10b981]">(Save 20%)</span>
            </span>
          </div>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-section-items>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-2xl border p-8 transition-all duration-300',
                plan.highlighted
                  ? 'border-[#10b981] bg-[rgba(16,185,129,0.05)] shadow-[0_0_40px_rgba(16,185,129,0.1)]'
                  : 'border-[rgba(16,185,129,0.12)] bg-[rgba(3,20,13,0.6)]'
              )}
              data-section-item
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block rounded-full bg-[#10b981] px-3 py-1 text-xs font-semibold text-[#030f0a]">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-[#e8faf3]">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-[#e8faf3]">{yearly ? plan.price.yearly : plan.price.monthly}</span>
                {plan.price.monthly !== 'Free' && plan.price.monthly !== 'Custom' && (
                  <span className="text-[#e8faf3]/40 text-sm">/{yearly ? 'year' : 'month'}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-[#e8faf3]/45">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#e8faf3]/60">
                    <Check className="h-4 w-4 text-[#10b981] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant={plan.highlighted ? 'primary' : 'outline'} className="w-full" href="#">{plan.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
