'use client'

import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[rgba(16,185,129,0.15)] bg-[rgba(3,20,13,0.8)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
