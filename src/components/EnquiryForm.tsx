import { Send } from 'lucide-react'
import { cloneElement, type FormEvent, type ReactElement, useState } from 'react'
import { siteConfig } from '../config/siteConfig'
import { createMailUrl, createWhatsAppUrl } from '../utils/contact'

type FormState = {
  name: string
  phone: string
  email: string
  program: string
  experience: string
  message: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  program: siteConfig.programs.fullStack.label,
  experience: '',
  message: '',
}

export function EnquiryForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [emailFallback, setEmailFallback] = useState('')

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {}
    if (form.name.trim().length < 2) nextErrors.name = 'Enter your name.'
    if (!/^\+?[\d\s-]{8,}$/.test(form.phone.trim())) nextErrors.phone = 'Enter a valid phone number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email.'
    if (!form.experience) nextErrors.experience = 'Select your experience level.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    const body = [
      'Hi ClearFocus Academy, I want to enquire about a program.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Program: ${form.program}`,
      `Experience Level: ${form.experience}`,
      `Message: ${form.message || 'Please share the details.'}`,
    ].join('\n')

    window.open(createWhatsAppUrl(body), '_blank', 'noopener,noreferrer')
    setEmailFallback(createMailUrl('ClearFocus Academy Program Enquiry', body))
    setSubmitted(true)
  }

  return (
    <form onSubmit={submit} className="glass rounded-lg p-5 sm:p-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input value={form.name} onChange={(event) => updateField('name', event.target.value)} autoComplete="name" />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} autoComplete="tel" inputMode="tel" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input value={form.email} onChange={(event) => updateField('email', event.target.value)} autoComplete="email" inputMode="email" />
        </Field>
        <Field label="Program">
          <select value={form.program} onChange={(event) => updateField('program', event.target.value)}>
            <option>{siteConfig.programs.fullStack.label}</option>
            <option>{siteConfig.programs.fastTrack.label}</option>
          </select>
        </Field>
        <Field label="Experience Level" error={errors.experience}>
          <select value={form.experience} onChange={(event) => updateField('experience', event.target.value)}>
            <option value="">Select level</option>
            <option>Student</option>
            <option>Fresher</option>
            <option>Working Professional</option>
            <option>Career Switcher</option>
            <option>Developer</option>
          </select>
        </Field>
        <Field label="Message">
          <textarea value={form.message} onChange={(event) => updateField('message', event.target.value)} rows={4} />
        </Field>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-cyanbeam px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_16px_34px_rgba(37,99,235,0.24)] transition hover:bg-blue-700"
      >
        Send Enquiry <Send className="size-4" aria-hidden="true" />
      </button>
      {submitted ? (
        <p className="mt-4 rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-3 text-sm font-semibold text-emerald-100">
          Enquiry prepared. WhatsApp has opened. If needed,{' '}
          <a className="font-black underline decoration-emerald-200 underline-offset-4" href={emailFallback}>
            send the same enquiry by email
          </a>
          .
        </p>
      ) : null}
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactElement<{ className?: string; 'aria-invalid'?: boolean }>
}) {
  return (
    <label className={label === 'Message' ? 'sm:col-span-2' : ''}>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-slate-300">{label}</span>
      {cloneWithInputStyles(children, Boolean(error))}
      {error ? <span className="mt-2 block text-sm text-rose-200">{error}</span> : null}
    </label>
  )
}

function cloneWithInputStyles(child: ReactElement<{ className?: string; 'aria-invalid'?: boolean }>, invalid: boolean) {
  return cloneElement(child, {
    'aria-invalid': invalid,
    className:
        'w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyanbeam',
  })
}
