'use client'

import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] px-4 py-1.5 text-xs font-medium text-[#10b981]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
