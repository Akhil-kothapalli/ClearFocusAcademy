import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type CtaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: 'arrow' | 'whatsapp' | 'phone'
  children: ReactNode
}

const icons = {
  arrow: ArrowRight,
  whatsapp: MessageCircle,
  phone: Phone,
}

export function CtaButton({ variant = 'primary', icon = 'arrow', children, className = '', ...props }: CtaButtonProps) {
  const Icon = icons[icon]
  const styles = {
    primary:
      'bg-cyanbeam text-white shadow-[0_16px_34px_rgba(37,99,235,0.28)] hover:bg-blue-700',
    secondary:
      'border border-blue-200 bg-white text-slate-900 shadow-sm hover:border-cyanbeam hover:bg-blue-50',
    ghost: 'border border-amber-300 bg-amber-50 text-amber-700 hover:bg-goldline hover:text-white',
  }

  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-black uppercase tracking-wide transition ${styles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <Icon className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  )
}
