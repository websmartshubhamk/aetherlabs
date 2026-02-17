'use client'

import { logoCloud } from '@/lib/data'

export function LogoCloud() {
  return (
    <section className="border-y border-[rgba(16,185,129,0.1)] bg-[rgba(3,15,10,0.5)] py-8 overflow-hidden">
      <p className="mb-6 text-center text-xs uppercase tracking-widest text-[#e8faf3]/30">
        Trusted by innovative teams
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logoCloud, ...logoCloud].map((name, i) => (
          <span
            key={i}
            className="mx-10 shrink-0 text-lg font-semibold text-[#e8faf3]/20 transition-colors hover:text-[#e8faf3]/40"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
