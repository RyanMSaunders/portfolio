'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '../lib/schemas'
import ContactFormEmail from '../emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  console.log("sendEmail called with data:", data)


  if (result.error) {
    console.error("Schema validation error:", result.error.format())
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    console.log("Sending email with:", { name, email, message })
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      cc: ['ryan.s.maguire@gmail.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })
    
    console.log("Resend API response:", { data, error })

    if (!data || error) {
      throw new Error('Failed to send email')
    }
    

    return { success: true }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    return { error }
  }
}

// 
export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // TODO: Send a welcome email

    return { success: true }
  } catch (error) {
    return { error }
  }
}