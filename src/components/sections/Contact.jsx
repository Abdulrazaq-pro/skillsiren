import { Linkedin, Mail } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { Field, FormStatus, Honeypot, inputClass, SubmitButton } from '../ui/FormBits.jsx'
import { useForm } from '../../hooks/useForm.js'
import { company } from '../../data/company.js'

const INITIAL = { name: '', email: '', topic: '', message: '', website: '' }
const RULES = {
  name: { required: true, message: 'Enter your name.' },
  email: { required: true, email: true, message: 'Enter your email address.' },
  topic: { required: true, message: 'Choose a topic.' },
  message: { required: true, min: 10, message: 'Write a short message.' },
}

export function Contact() {
  const f = useForm('contact', INITIAL, RULES)
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink-950 py-24 text-paper sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading id="contact-title" tone="dark" eyebrow="Contact" title="Talk to the SkillSiren team."
            description="Questions about the product, partnerships, press or a demo walkthrough. Write to us directly or use the form." />
          <Reveal className="mt-10 space-y-3">
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 p-4 transition hover:border-white/25">
              <Mail className="h-5 w-5 text-siren-400" aria-hidden="true" />
              <span><span className="block text-[12px] text-ink-400">Email</span><span className="font-medium">{company.email}</span></span>
            </a>
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 transition hover:border-white/25">
              <Linkedin className="h-5 w-5 text-siren-400" aria-hidden="true" />
              <span><span className="block text-[12px] text-ink-400">LinkedIn</span><span className="font-medium">linkedin.com/company/skillsiren.site</span></span>
            </a>
          </Reveal>
        </div>
        <Reveal className="relative rounded-2xl bg-paper p-6 text-ink-900 sm:p-8">
          {f.status === 'sent' ? (
            <FormStatus status={f.status} values={f.values} onReset={f.reset} />
          ) : (
            <form noValidate onSubmit={f.onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Honeypot bind={f.bind} />
              <Field label="Name" id="contact-name" error={f.errors.name}><input autoComplete="name" className={inputClass(f.errors.name)} {...f.bind('name')} /></Field>
              <Field label="Email" id="contact-email" error={f.errors.email}><input type="email" autoComplete="email" className={inputClass(f.errors.email)} {...f.bind('email')} /></Field>
              <Field label="Topic" id="contact-topic" error={f.errors.topic} className="sm:col-span-2">
                <select className={inputClass(f.errors.topic)} {...f.bind('topic')}>
                  <option value="">Select…</option>
                  <option>Product question</option>
                  <option>Demo walkthrough</option>
                  <option>Hiring teams & agencies</option>
                  <option>Partnerships</option>
                  <option>Press & media</option>
                  <option>Privacy request</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Message" id="contact-message" error={f.errors.message} className="sm:col-span-2">
                <textarea rows={5} className={inputClass(f.errors.message)} {...f.bind('message')} />
              </Field>
              <div className="flex justify-end sm:col-span-2"><SubmitButton status={f.status}>Send message</SubmitButton></div>
              <div className="sm:col-span-2" aria-live="polite"><FormStatus status={f.status} subject={`SkillSiren contact: ${f.values.topic || 'General'}`} values={f.values} onReset={f.reset} /></div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
