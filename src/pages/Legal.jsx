export function LegalPage({ title, updated, children }) {
  return (
    <article className="container-x max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-[40px] font-semibold leading-tight text-ink-950 sm:text-[52px]">{title}</h1>
      <p className="mt-3 text-[14px] text-ink-500">Last updated {updated}</p>
      <div className="mt-10 space-y-6 text-[16px] leading-relaxed text-ink-700 [&_h2]:mt-10 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:text-ink-950 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2 [&_a]:text-siren-600 [&_a]:underline">
        {children}
      </div>
    </article>
  )
}
