import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { siteConfig } from '../config/siteConfig'
import { createWhatsAppUrl } from '../utils/contact'
import { CtaButton } from './CtaButton'

const navItems = [
  ['Home', '#home'],
  ['Program', '#program'],
  ['Projects', '#projects'],
  ['Learning Approach', '#learning'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100 bg-white/86 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a
          href="#home"
          className="flex items-center rounded-lg border border-black bg-black px-3 py-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
          aria-label={`${siteConfig.academyName} home`}
        >
          <img
            src={logo}
            alt={siteConfig.academyName}
            className="h-10 w-auto max-w-[180px] object-contain sm:h-12 sm:max-w-[220px]"
            width="230"
            height="56"
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-cyanbeam">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <CtaButton href={createWhatsAppUrl(siteConfig.ctaMessages.general)}>Enroll Now</CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-blue-100 bg-white text-slate-950 shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="glass mx-4 mb-4 rounded-lg p-4 lg:hidden">
          <div className="grid gap-2">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-200 hover:bg-white/8"
              >
                {label}
              </a>
            ))}
            <CtaButton className="mt-2 w-full" href={createWhatsAppUrl(siteConfig.ctaMessages.general)}>
              Enroll Now
            </CtaButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}
