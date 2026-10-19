import { LegalPage } from './Legal.jsx'
import { company } from '../data/company.js'

export default function Terms() {
  const e = <a href={`mailto:${company.email}`}>{company.email}</a>
  return (
    <LegalPage title="Terms of Service" updated="October 19, 2026">
      <p>These terms govern your use of {company.domain} (the “Site”), its interactive product preview and the {company.name} early-access program. By using the Site you agree to them. Separate terms will apply to the SkillSiren platform when it launches.</p>
      <h2>The Site and the preview</h2>
      <p>The Site describes a product in development. The interactive preview uses fictional sample data to demonstrate intended workflows; it is not a live service, and features, plans and prices may change before launch.</p>
      <h2>Early access</h2>
      <p>Requesting early access does not create a contract, guarantee access, or commit you to a paid plan. We may invite participants at our discretion.</p>
      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide accurate information in forms and only submit information you have the right to share.</li>
        <li>Do not misuse the Site, including attempting to disrupt it, gain unauthorised access, scrape it at scale, or send spam or malicious content through its forms.</li>
      </ul>
      <h2>Intellectual property</h2>
      <p>The Site, the {company.name} name and logo, and its content and design belong to {company.name}. You may not copy or reuse them except as allowed by law or with our written permission. Feedback you send may be used to improve the product without obligation to you.</p>
      <h2>Disclaimers</h2>
      <p>The Site and preview are provided “as is” without warranties of any kind. Sample matches and figures are illustrative and are not advice or a representation of real people, organisations or results.</p>
      <h2>Limitation of liability</h2>
      <p>To the extent permitted by law, {company.name} is not liable for indirect or consequential losses arising from your use of the Site, and our total liability relating to the Site is limited to USD 100.</p>
      <h2>Changes and termination</h2>
      <p>We may update these terms or change or withdraw the Site at any time. Continued use after an update means you accept the revised terms.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the jurisdiction in which {company.name} is established.</p>
      <h2>Contact</h2>
      <p>{company.name} · {e}</p>
    </LegalPage>
  )
}
