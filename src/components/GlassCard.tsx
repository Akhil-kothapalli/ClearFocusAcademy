import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type GlassCardProps = {
  title: string
  description?: string
  icon?: LucideIcon
  children?: ReactNode
  className?: string
}

export function GlassCard({ title, description, icon: Icon, children, className = '' }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`glass flex h-full flex-col rounded-lg p-5 ${className}`}
    >
      <div className="flex items-start gap-3">
        {Icon ? (
          <div className="mt-0.5 inline-flex size-10 flex-shrink-0 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyanbeam">
            <Icon className="size-5" aria-hidden="true" />
          </div>
        ) : null}
        <h3 className="text-lg font-extrabold uppercase leading-snug text-white">{title}</h3>
      </div>
      {description ? <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p> : null}
      {children}
    </motion.div>
  )
}
