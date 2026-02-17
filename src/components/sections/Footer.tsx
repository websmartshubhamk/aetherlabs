'use client'

import { footerSections, socialLinks } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-[rgba(16,185,129,0.1)] bg-[#041510]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        {/* Top: Brand + Newsletter */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <span className="text-2xl font-bold text-[#10b981]">AetherLabs</span>
            <p className="mt-2 text-sm text-[#e8faf3]/30">Where intelligence meets nature</p>
            <p className="mt-4 text-sm leading-relaxed text-[#e8faf3]/40">
              Building sustainable AI solutions that empower organisations to make better decisions while reducing their environmental impact.
            </p>
          </div>
          <div className="flex max-w-sm flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-[rgba(16,185,129,0.2)] bg-[rgba(3,15,10,0.8)] px-4 py-2.5 text-sm text-[#e8faf3] placeholder:text-[#e8faf3]/25 focus:border-[#10b981] focus:outline-none"
            />
            <button className="rounded-lg bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-[#030f0a] transition-colors hover:bg-[#0ea572] cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle: Link Columns */}
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#e8faf3]/50">{section.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#e8faf3]/35 transition-colors hover:text-[#10b981]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-14 flex items-center gap-6">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-[#e8faf3]/30 transition-colors hover:text-[#10b981]" aria-label={link.label}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-[rgba(16,185,129,0.08)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#e8faf3]/25">&copy; 2026 AetherLabs. All rights reserved.</p>
          <p className="text-xs text-[#e8faf3]/20">Designed for a sustainable future</p>
        </div>
      </div>
    </footer>
  )
}
