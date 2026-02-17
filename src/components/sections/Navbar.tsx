'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation } from '@/lib/data'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'flex w-full max-w-3xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 border',
          scrolled
            ? 'bg-[rgba(3,15,10,0.85)] backdrop-blur-2xl border-[rgba(16,185,129,0.3)]'
            : 'bg-[rgba(3,15,10,0.6)] backdrop-blur-xl border-[rgba(16,185,129,0.15)]'
        )}
      >
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-[#10b981] tracking-tight">
          AL
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#e8faf3]/60 transition-colors duration-200 hover:text-[#10b981]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button size="sm" href="#features">Launch App</Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#e8faf3] md:hidden" aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-4 right-4 rounded-2xl border border-[rgba(16,185,129,0.2)] bg-[rgba(3,15,10,0.95)] backdrop-blur-xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-[#e8faf3] transition-colors hover:text-[#10b981]"
              >
                {item.label}
              </a>
            ))}
            <Button href="#features" className="mt-2 w-full">Launch App</Button>
          </div>
        </div>
      )}
    </div>
  )
}
