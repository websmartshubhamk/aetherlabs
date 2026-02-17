'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger, DURATION, EASE, STAGGER } from '.'

export function ScrollReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroLines = document.querySelectorAll('[data-hero-line]')
      const heroCtas = document.querySelectorAll('[data-hero-cta]')
      gsap.set([heroLines, heroCtas], { opacity: 0, x: -40 })
      const tl = gsap.timeline({ delay: 0.3 })
      tl.to(heroLines, { opacity: 1, x: 0, duration: DURATION.slow, ease: EASE.out, stagger: STAGGER.normal })
        .to(heroCtas, { opacity: 1, x: 0, duration: DURATION.normal, ease: EASE.out, stagger: STAGGER.tight }, '-=0.3')

      document.querySelectorAll('[data-section-heading]').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          opacity: 0, y: 40, duration: DURATION.slow, ease: EASE.out,
        })
      })

      document.querySelectorAll('[data-section-items]').forEach((container) => {
        const items = container.querySelectorAll('[data-section-item]')
        gsap.from(items, {
          scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none none' },
          opacity: 0, y: 30, duration: DURATION.normal, ease: EASE.out, stagger: STAGGER.normal,
        })
      })
    })
    return () => ctx.revert()
  }, [])
  return null
}
