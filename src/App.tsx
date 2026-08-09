import type { ReactNode } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Code2,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { CtaButton } from './components/CtaButton'
import { DeveloperVisual } from './components/DeveloperVisual'
import { EnquiryForm } from './components/EnquiryForm'
import { FaqAccordion } from './components/FaqAccordion'
import { GlassCard } from './components/GlassCard'
import { Navbar } from './components/Navbar'
import { PricingCard } from './components/PricingCard'
import { Reveal } from './components/Reveal'
import { SectionHeader } from './components/SectionHeader'
import { siteConfig } from './config/siteConfig'
import {
  aiWorkflow,
  audience,
  differentiators,
  learningTimeline,
  processSteps,
  projectCards,
  tools,
} from './data/content'
import { createWhatsAppUrl } from './utils/contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TargetLearning />
        <Projects />
        <Pricing />
        <Offer />
        <Credibility />
        <Different />
        <Tools />
        <AiDevelopment />
        <LearningApproach />
        <WhoCanJoin />
        <Terms />
        <Faq />
        <Contact />
      </main>
      <MobileStickyCta />
    </>
  )
}

function Hero() {
  const heroHighlights: Array<[string, LucideIcon]> = [
    ['Real-Time Projects', Code2],
    ['AI-Assisted Development', Sparkles],
    ['Portfolio Building', ShieldCheck],
  ]
  const heroStats = [
    ['6 Months', 'Full Stack'],
    ['3 Months', 'Fast Track'],
    ['First 10', 'Offer Seats'],
  ]

  return (
    <section id="home" className="relative overflow-hidden px-4 pt-18 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-44 max-w-5xl rounded-full bg-blue-400/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-start gap-10 py-5 lg:grid-cols-[1.02fr_0.98fr] lg:py-8">
        <Reveal className="lg:-mt-2">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyanbeam shadow-sm">
              {siteConfig.tagline}
            </p>
            <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-goldline">
              {siteConfig.offer}
            </p>
          </div>
          <h2 className="text-balance text-2xl font-black uppercase leading-[1.02] text-white sm:text-4xl lg:text-4xl xl:text-5xl">
            Learn <span className="text-cyanbeam">AI-Assisted</span>
            <span className="block">Practical Product</span>
            <span className="block">/ Project Development</span>
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            <div className="inline-flex rounded-lg bg-slate-950 px-4 py-2 text-xl font-black uppercase tracking-wide text-white shadow-[0_16px_34px_rgba(15,23,42,0.18)]">
              Full Stack
            </div>
            {heroHighlights.map(([item, Icon]) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white/82 px-3 py-2 text-xs font-black uppercase text-slate-700 shadow-sm">
                <Icon className="size-4 text-cyanbeam" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-7 rounded-lg border border-blue-100 bg-white/78 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <p className="text-2xl font-black uppercase leading-tight text-white">This is not classroom-based training.</p>
            <p className="mt-2 text-2xl font-black uppercase leading-tight text-cyanbeam">It's target-oriented learning.</p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We don't focus on teaching theory for the sake of completing a syllabus. We help learners understand real problems, build real products, use AI-assisted development, deploy their work, and become career-ready.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={createWhatsAppUrl(siteConfig.ctaMessages.general)} className="min-h-14 px-7 text-base">
              Enroll Now
            </CtaButton>
            <CtaButton href="#program" variant="secondary">
              View Program
            </CtaButton>
          </div>
          <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map(([value, label]) => (
              <div key={label} className="rounded-lg border border-blue-100 bg-white/76 p-3 text-center shadow-sm">
                <p className="text-lg font-black text-cyanbeam sm:text-xl">{value}</p>
                <p className="mt-1 text-[11px] font-black uppercase tracking-wide text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.16} className="mt-4 lg:mt-2">
          <DeveloperVisual />
        </Reveal>
      </div>
    </section>
  )
}

function TargetLearning() {
  return (
    <Section id="program">
      <SectionHeader
        eyebrow="Learn -> Build -> Deploy -> Achieve"
        title="Target-Oriented Learning"
        description="A practical flow designed around outcomes, working products and visible portfolio progress."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <GlassCard {...item} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Sample product/project categories"
        title="You Will Build Real-World Projects & Products"
        description="The program focuses on practical categories that mirror how modern software products are planned, built, integrated and deployed."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectCards.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.03}>
            <GlassCard {...item} className={index === projectCards.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeader eyebrow="Program Pricing" title="Inaugural Offer for Practical Full Stack Learning" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <PricingCard featured {...siteConfig.programs.fullStack} kicker="Full Stack Program" />
        </Reveal>
        <Reveal delay={0.12}>
          <PricingCard {...siteConfig.programs.fastTrack} kicker="Fast learn. Fast build. Faster career." />
        </Reveal>
      </div>
    </Section>
  )
}

function Offer() {
  return (
    <Section className="py-10">
      <Reveal>
        <div className="glass neon-border overflow-hidden rounded-lg p-6 text-center sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-goldline">Inaugural Offer</p>
          <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-5xl">{siteConfig.offer}</h2>
          <div className="mx-auto mt-7 grid max-w-xl grid-cols-3 gap-3">
            {['Limited', 'Focused', 'Practical'].map((label) => (
              <div key={label} className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-4">
                <Sparkles className="mx-auto mb-2 size-5 text-cyanbeam" aria-hidden="true" />
                <p className="text-xs font-black uppercase text-white">{label}</p>
              </div>
            ))}
          </div>
          <CtaButton className="mt-8" href={createWhatsAppUrl(siteConfig.ctaMessages.general)}>
            Secure Your Seat
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  )
}

function Credibility() {
  return (
    <Section>
      <div className="grid gap-4 lg:grid-cols-2">
        {[
          ['30+ Years', 'IT Industry Experience'],
          ['12+ Years', 'Practical IT Experience'],
        ].map(([value, label]) => (
          <Reveal key={value}>
            <div className="glass rounded-lg p-8">
              <BadgeCheck className="mb-5 size-10 text-goldline" aria-hidden="true" />
              <p className="text-5xl font-black uppercase text-white">{value}</p>
              <p className="mt-3 text-lg font-black uppercase tracking-wide text-cyanbeam">{label}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Practical expertise behind the program, focused on product thinking, implementation discipline and career-ready outcomes.
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Different() {
  return (
    <Section>
      <SectionHeader title="What Makes This Different" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item) => <GlassCard key={item.title} {...item} />)}
      </div>
    </Section>
  )
}

function Tools() {
  return (
    <Section>
      <SectionHeader
        title="Tools & Technologies"
        description="Tools & technologies used across the learning journey may include:"
      />
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {tools.map(({ name, icon: Icon }) => (
          <div key={name} className="glass flex min-h-24 flex-col items-center justify-center rounded-lg p-3 text-center">
            <Icon className="mb-2 size-6 text-cyanbeam" aria-hidden="true" />
            <span className="text-xs font-extrabold text-white">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

function AiDevelopment() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          align="left"
          eyebrow="AI-Assisted Development"
          title="Build with AI. Think Like an Engineer."
          description="AI is used as a development assistant, not as a replacement for understanding. Learners practice problem framing, architecture, code review, testing, iteration and deployment."
        />
        <Reveal>
          <div className="glass rounded-lg p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {aiWorkflow.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-sm font-black text-cyanbeam">{index + 1}</span>
                  <span className="font-extrabold text-white">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function LearningApproach() {
  return (
    <Section id="learning">
      <SectionHeader eyebrow="Learning Approach" title="Understand. Plan. Build. Test. Deploy. Showcase." />
      <div className="mt-12 overflow-x-auto pb-4">
        <div className="grid min-w-[920px] grid-cols-6 gap-3">
          {learningTimeline.map(([number, title, description]) => (
            <div key={number} className="glass relative rounded-lg p-4">
              <p className="text-sm font-black text-goldline">{number}</p>
              <h3 className="mt-3 text-lg font-black uppercase text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              <ArrowRight className="absolute -right-3 top-1/2 hidden size-5 text-cyanbeam last:hidden lg:block" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function WhoCanJoin() {
  return (
    <Section>
      <SectionHeader title="Who Can Join" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {audience.map((item) => <GlassCard key={item.title} {...item} />)}
      </div>
    </Section>
  )
}

function Terms() {
  const terms = [
    'Participants must have their own laptop.',
    'Participants must have their own Claude subscription.',
    "Program structure and project assignments may vary depending on the learner's progress.",
    'Placement assistance does not guarantee employment.',
    'Fees and offers are subject to program availability.',
  ]
  return (
    <Section>
      <div className="glass rounded-lg p-6 sm:p-8">
        <h2 className="text-3xl font-black uppercase text-white">Terms & Conditions</h2>
        <ul className="mt-6 grid gap-3">
          {terms.map((term) => (
            <li key={term} className="flex gap-3 text-sm leading-7 text-slate-300">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-cyanbeam" aria-hidden="true" />
              <span>{term}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function Faq() {
  return (
    <Section id="faq">
      <SectionHeader title="FAQ" />
      <FaqAccordion />
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" className="pb-28">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-goldline">Ready to build your future?</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              First 10 Students Only
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Real training. Real projects. Real growth. ClearFocus Academy, where learning meets impact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaButton href={createWhatsAppUrl(siteConfig.ctaMessages.general)}>Enroll Now</CtaButton>
              <CtaButton icon="whatsapp" variant="secondary" href={createWhatsAppUrl(siteConfig.ctaMessages.general)}>WhatsApp Us</CtaButton>
              <CtaButton icon="phone" variant="ghost" href={`tel:${siteConfig.phone}`}>Call Us</CtaButton>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300">
              <p className="flex items-center gap-3"><Phone className="size-4 text-cyanbeam" aria-hidden="true" /> {siteConfig.phone}</p>
              <p className="flex items-center gap-3"><MessageCircle className="size-4 text-cyanbeam" aria-hidden="true" /> {siteConfig.whatsapp}</p>
              <p className="flex items-center gap-3"><Mail className="size-4 text-cyanbeam" aria-hidden="true" /> {siteConfig.email}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <EnquiryForm />
        </Reveal>
      </div>
      <FinalBrand />
    </Section>
  )
}

function FinalBrand() {
  return (
    <Reveal>
      <div className="mt-14 rounded-lg border border-cyan-300/20 bg-white/70 p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <p className="text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
          Real Training. <span className="text-cyanbeam">Real Projects.</span> Real Growth.
        </p>
        <p className="mt-6 text-xl font-black uppercase text-white">{siteConfig.academyName}</p>
        <p className="mt-2 text-sm font-black uppercase tracking-[0.22em] text-goldline">Where Learning Meets Impact.</p>
        <CtaButton className="mt-7" href={createWhatsAppUrl(siteConfig.ctaMessages.general)}>Enroll Now</CtaButton>
      </div>
    </Reveal>
  )
}

function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-blue-100 bg-white/92 p-3 shadow-[0_-12px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href={createWhatsAppUrl(siteConfig.ctaMessages.general)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyanbeam px-3 text-xs font-black uppercase text-white">
          <Zap className="size-4" aria-hidden="true" /> Enroll Now
        </a>
        <a href="#pricing" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-goldline/40 bg-goldline/10 px-3 text-xs font-black uppercase text-goldline">
          <Target className="size-4" aria-hidden="true" /> Pricing
        </a>
      </div>
    </div>
  )
}

function Section({ id, className = '', children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export default App
