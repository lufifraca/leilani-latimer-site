import type { Metadata } from "next"
import Image from "next/image"
import { values } from "@/lib/content"
import { CtaBand } from "@/components/site/cta-band"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/site/reveal"
import { asset } from "@/lib/asset"

export const metadata: Metadata = {
  title: "How I Lead",
  description:
    "Six values shape how Leilani Latimer leads: curiosity, courage, culture, creativity, collaboration, and communication.",
}

export default function HowILead() {
  return (
    <>
      <PageHero
        eyebrow="Leadership values"
        title={
          <>
            How I <em className="text-cream">Lead</em>
          </>
        }
      >
        <p className="font-medium">
          My work is grounded in six values: curiosity, courage, culture, creativity, collaboration, and
          communication.
        </p>
        <p className="text-base text-muted-foreground sm:text-lg">
          They shape how I build trust, make decisions, lead through complexity, and help organizations move
          from strategy to execution.
        </p>
      </PageHero>

      <section className="section relative isolate overflow-hidden">
        <Image src={asset("/images/bay-bridge.jpg")} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
        <ol className="container-x flex flex-col py-12 lg:py-20">
          {values.map((value, i) => (
            <li key={value.name} className="border-b border-foreground/20 last:border-b-0">
              <Reveal className="grid gap-6 py-12 lg:grid-cols-[auto_1fr_1.1fr] lg:items-start lg:gap-12 lg:py-16">
                <p className="pt-3 text-sm font-medium tracking-widest tabular-nums">0{i + 1}</p>
                <h2 className="display text-6xl sm:text-7xl lg:text-8xl">
                  {i % 2 ? <em>{value.name}</em> : value.name}
                </h2>
                <div className="flex flex-col gap-4 rounded-3xl bg-card/85 p-8 shadow-lg shadow-ink/5 backdrop-blur-sm">
                  <p className="text-xl leading-snug font-medium">{value.tagline}</p>
                  <p className="leading-relaxed text-muted-foreground">{value.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  )
}
