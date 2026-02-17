'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps { variant?: Variant; size?: Size }
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type Props = ButtonProps | AnchorProps

const variants: Record<Variant, string> = {
  primary: 'bg-[#10b981] text-[#030f0a] hover:bg-[#0ea572] font-semibold',
  secondary: 'bg-[#041510] text-[#e8faf3] hover:bg-[#062a1f] border border-[rgba(16,185,129,0.2)]',
  ghost: 'bg-transparent text-[#e8faf3] hover:text-[#10b981]',
  outline: 'bg-transparent text-[#10b981] border border-[#10b981] hover:bg-[rgba(16,185,129,0.1)]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded-lg',
  md: 'h-11 px-6 text-sm rounded-xl',
  lg: 'h-13 px-8 text-base rounded-xl',
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2 focus:ring-offset-[#030f0a] cursor-pointer',
    variants[variant], sizes[size], className
  )
  if ('href' in props && props.href) return <a className={classes} {...(props as AnchorProps)} />
  return <button className={classes} {...(props as ButtonProps)} />
}
