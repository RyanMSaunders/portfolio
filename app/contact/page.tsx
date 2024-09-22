import ContactForm from '../../components/contact-form'

export default function Contact() {
  return (
    <section id="contact" className='pb-24 pt-40'>
      <div className='container max-w-3xl p-0'>
        <h2 className='title'>Let&apos;s Get In Touch!</h2>

        <ContactForm />
      </div>
    </section>
  )
}