import { Cta } from "./cta"
import { Reveal } from "./reveal"

export function CtaBand() {
  return (
    <section className="coral section">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center lg:py-28">
        <Reveal>
          <h2 className="display text-[clamp(2.75rem,7vw,6rem)]">
            Let’s work <em className="text-cream">together!</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Cta href="/contact" className="h-14 px-8 text-base">
            Contact Me
          </Cta>
        </Reveal>
      </div>
    </section>
  )
}
