import { motion } from 'framer-motion'
import { BadgeIndianRupee, Clock, Sparkles } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { createWhatsAppUrl } from '../utils/contact'
import { CtaButton } from './CtaButton'

type PricingCardProps = {
  name: string
  regularFee: string
  offerFee: string
  duration: string
  message: string
  featured?: boolean
  kicker?: string
}

export function PricingCard({ name, regularFee, offerFee, duration, message, featured, kicker }: PricingCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className={`glass relative overflow-hidden rounded-lg p-6 ${featured ? 'neon-border border-cyanbeam/45 lg:scale-[1.03]' : ''}`}
    >
      {featured ? <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyanbeam via-white to-goldline" /> : null}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-2xl font-black uppercase text-white">{name}</h3>
        <span className="rounded-full border border-goldline/40 bg-goldline/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-goldline">
          {siteConfig.offer}
        </span>
      </div>
      {kicker ? <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-cyanbeam">{kicker}</p> : null}
      <div className="mt-7 grid gap-4">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-2 text-sm font-bold uppercase text-slate-400">
            <BadgeIndianRupee className="size-4" aria-hidden="true" />
            Regular Fee
          </div>
          <p className="mt-2 text-2xl font-black text-slate-400 line-through">{regularFee}</p>
        </div>
        <div className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-5">
          <div className="flex items-center gap-2 text-sm font-black uppercase text-cyanbeam">
            <Sparkles className="size-4" aria-hidden="true" />
            Inaugural Offer
          </div>
          <p className="mt-2 text-5xl font-black tracking-tight text-white">{offerFee}</p>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <span className="flex items-center gap-2 text-sm font-bold uppercase text-slate-300">
            <Clock className="size-4 text-goldline" aria-hidden="true" />
            Duration
          </span>
          <span className="text-lg font-black text-white">{duration}</span>
        </div>
      </div>
      <CtaButton className="mt-6 w-full" href={createWhatsAppUrl(message)}>
        Secure Your Seat
      </CtaButton>
    </motion.article>
  )
}
