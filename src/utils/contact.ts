import { siteConfig } from '../config/siteConfig'

export const cleanPhoneNumber = (phone: string) => phone.replace(/[^\d]/g, '')

export const createWhatsAppUrl = (message: string, phone = siteConfig.whatsapp) => {
  const normalizedPhone = cleanPhoneNumber(phone)
  const encodedMessage = encodeURIComponent(message)

  if (!normalizedPhone || normalizedPhone === 'WHATSAPPNUMBER') {
    return `https://wa.me/?text=${encodedMessage}`
  }

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`
}

export const createMailUrl = (subject: string, body: string) => {
  const email = siteConfig.email === 'EMAIL_ADDRESS' ? '' : siteConfig.email
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
