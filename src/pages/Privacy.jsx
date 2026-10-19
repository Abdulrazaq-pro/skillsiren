import { LegalPage } from './Legal.jsx'
import { company } from '../data/company.js'

export default function Privacy() {
  const e = <a href={`mailto:${company.email}`}>{company.email}</a>
  return (
    <LegalPage title="Privacy Policy" updated="October 19, 2026">
      <p>This policy explains how {company.name} (“we”, “us”) handles information collected through {company.domain} (the “Site”), including the early-access and contact forms. {company.name} is building its initial product; this policy covers the Site and early-access program only and will be updated before the platform launches.</p>
      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you submit:</strong> your name, email address, company, company size, primary use case, topic and message when you use a form or email us.</li>
        <li><strong>Technical information:</strong> our hosting provider may record standard server logs (such as IP address, browser type and pages requested) for security and reliability.</li>
        <li><strong>Interactive demo:</strong> the product preview runs entirely in your browser on fictional sample data. Actions you take in it are not sent to us or stored.</li>
      </ul>
      <p>The Site does not use advertising cookies or third-party analytics trackers. Fonts are loaded from Google Fonts, which receives your IP address when serving them.</p>
      <h2>How we use information</h2>
      <ul>
        <li>To respond to your enquiry and manage the early-access program.</li>
        <li>To contact you about SkillSiren’s launch and access, if you requested it.</li>
        <li>To keep the Site secure and working.</li>
      </ul>
      <p>We do not sell personal information.</p>
      <h2>Service providers</h2>
      <p>Form submissions are delivered through the form-handling or email service we configure for the Site, and messages are stored in our business email. These providers process data on our behalf. The current providers are available on request.</p>
      <h2>Retention</h2>
      <p>We keep early-access and contact information for as long as needed to respond and run the early-access program, and delete it within 24 months of our last contact with you unless you become a customer or ask us to delete it sooner.</p>
      <h2>Your rights</h2>
      <p>Depending on where you live, you may have the right to access, correct, delete or export your information, or to object to its use. To make a request, email {e}. You can also ask us at any time to remove you from the early-access list.</p>
      <h2>Security</h2>
      <p>We use reasonable measures to protect information, including HTTPS. No method of transmission or storage is completely secure.</p>
      <h2>Children</h2>
      <p>The Site is intended for professionals and is not directed at children under 16.</p>
      <h2>Changes</h2>
      <p>We will update this page when our practices change, including before the SkillSiren platform launches.</p>
      <h2>Contact</h2>
      <p>{company.name} · {e}</p>
    </LegalPage>
  )
}
