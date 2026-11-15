import { Reveal } from "./reveal"

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="coral section relative overflow-hidden">
      <div aria-hidden className="blob animate-blob absolute -top-48 -right-32 size-[34rem] bg-cream/25 blur-2xl" />
      <div className="container-x relative flex flex-col gap-8 py-16 lg:py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display text-[clamp(3.25rem,9vw,7.5rem)]">{title}</h1>
        </Reveal>
        {children && (
          <Reveal delay={0.16} className="flex max-w-3xl flex-col gap-4 text-lg leading-relaxed sm:text-xl">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  )
}
