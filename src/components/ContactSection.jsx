import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="https://myaccount.microsoft.com/?ref=MeControl" text="zeus.cansancio@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/ZeusCans" text="github.com/ZeusCans" />
        
      </ul>
    </section>
  )
}

export default ContactSection