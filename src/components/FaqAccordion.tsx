import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '../data/content'

export function FaqAccordion() {
  const [active, setActive] = useState(0)

  return (
    <div className="mx-auto mt-10 max-w-4xl divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
      {faqs.map(([question, answer], index) => {
        const isOpen = active === index
        return (
          <div key={question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-extrabold text-white sm:px-6"
              onClick={() => setActive(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{question}</span>
              <ChevronDown className={`size-5 shrink-0 text-cyanbeam transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-300 sm:px-6">{answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
