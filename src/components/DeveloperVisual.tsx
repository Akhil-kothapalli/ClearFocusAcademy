import { motion } from 'framer-motion'
import { Bot, Braces, CheckCircle2, CloudUpload, Cpu, DatabaseZap, GitBranch, Rocket, Sparkles, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteConfig } from '../config/siteConfig'

const nodes = [
  { label: 'AI', icon: Bot, className: 'left-4 top-8' },
  { label: 'API', icon: Braces, className: 'right-5 top-14' },
  { label: 'DATA', icon: DatabaseZap, className: 'left-7 bottom-24' },
  { label: 'DEPLOY', icon: Rocket, className: 'right-5 bottom-20' },
]

const steps = ['Problem', 'Plan', 'Build', 'Review', 'Deploy']

const offers = [
  {
    title: siteConfig.programs.fullStack.label,
    regular: siteConfig.programs.fullStack.regularFee,
    offer: siteConfig.programs.fullStack.offerFee,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: siteConfig.programs.fastTrack.label,
    regular: siteConfig.programs.fastTrack.regularFee,
    offer: siteConfig.programs.fastTrack.offerFee,
    color: 'from-purple-400 to-pink-400',
  },
]

export function DeveloperVisual() {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-300/35 via-cyan-200/25 to-amber-200/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white/86 p-4 shadow-[0_28px_90px_rgba(37,99,235,0.18)] backdrop-blur-xl">
        <div className="rounded-xl border border-slate-200 bg-slate-950 p-4 shadow-inner">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-rose-400" />
              <span className="size-3 rounded-full bg-amber-300" />
              <span className="size-3 rounded-full bg-emerald-400" />
            </div>
            <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">
              Product Studio
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                <Cpu className="size-4" aria-hidden="true" />
                AI Build Flow
              </div>
              <div className="mt-4 grid gap-2">
                {steps.map((step, index) => (
                  <motion.div
                    key={step}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2"
                    initial={{ opacity: 0.55 }}
                    animate={{ opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.18 }}
                  >
                    <CheckCircle2 className="size-4 text-emerald-300" aria-hidden="true" />
                    <span className="text-sm font-bold text-white">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#07111f] p-4">
              <motion.div
                key={currentOfferIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  <Sparkles className="size-4" aria-hidden="true" />
                  <span>LIMITED OFFER</span>
                </div>
                <div className={`rounded-lg bg-gradient-to-r ${offers[currentOfferIndex].color} p-px`}>
                  <div className="rounded-[5px] bg-slate-950 p-4">
                    <p className="mb-2 text-xs font-bold text-slate-400">{offers[currentOfferIndex].title}</p>
                    <div className="mb-2 flex items-baseline gap-2">
                      <span className="line-through text-xs text-slate-500">{offers[currentOfferIndex].regular}</span>
                      <span className="text-2xl font-black text-white">{offers[currentOfferIndex].offer}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-300">
                      <CheckCircle2 className="size-3" aria-hidden="true" />
                      <span>FIRST 10 STUDENTS ONLY</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex gap-1 text-xs text-slate-400">
                  {offers.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        index === currentOfferIndex ? 'bg-cyan-400' : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {['React', 'API', 'Cloud'].map((item) => (
              <div key={item} className="rounded-lg border border-cyan-300/15 bg-cyan-300/10 px-3 py-2 text-center text-xs font-black uppercase text-cyan-100">
                {item}
              </div>
            ))}
          </div>
        </div>

        {nodes.map(({ label, icon: Icon, className }, index) => (
          <motion.div
            key={label}
            className={`absolute ${className} hidden items-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2 shadow-[0_12px_34px_rgba(15,23,42,0.12)] sm:flex`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon className="size-4 text-cyanbeam" aria-hidden="true" />
            <span className="text-xs font-black text-slate-800">{label}</span>
          </motion.div>
        ))}

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
            <CloudUpload className="mb-2 size-5 text-cyanbeam" aria-hidden="true" />
            <p className="text-sm font-black uppercase text-slate-950">Deployable Products</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">Build work that can be shown, tested and improved.</p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <GitBranch className="mb-2 size-5 text-goldline" aria-hidden="true" />
            <p className="text-sm font-black uppercase text-slate-950">Portfolio Proof</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">Move from learning notes to visible outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
