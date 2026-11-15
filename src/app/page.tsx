import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { about, featured, marquee, services, stats, testimonial } from "@/lib/content"
import { BoardCards } from "@/components/site/board-cards"
import { CountUp } from "@/components/site/count-up"
import { Cta } from "@/components/site/cta"
import { CtaBand } from "@/components/site/cta-band"
import { Hero } from "@/components/site/hero"
import { Marquee } from "@/components/site/marquee"
import { Reveal } from "@/components/site/reveal"
import { ThoughtLeadership } from "@/components/site/thought-leadership"
import { ValuesExplorer } from "@/components/site/values-explorer"

export default function Home() {
  return (
    <>
      <Hero />

      <div className="dark section border-y">
        <Marquee items={marquee} className="display py-5 text-2xl italic sm:text-3xl" />
      </div>

      {/* Proof points */}
      <section className="section">
        <div className="container-x py-20 lg:py-24">
          <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col-reverse gap-3 border-t-2 border-primary pt-5">
                <dt className="text-sm leading-relaxed text-muted-foreground">{stat.label}</dt>
                <dd className="display text-6xl whitespace-nowrap xl:text-7xl">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* About + testimonial */}
      <section className="section">
        <div className="container-x grid gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pb-28">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-muted-foreground">About</p>
            <h2 className="display text-5xl sm:text-6xl">
              About Leilani <em>Latimer</em>
            </h2>
            <Link
              href="/how-i-lead"
              className="group inline-flex items-center gap-2 font-medium underline decoration-primary decoration-2 underline-offset-4"
            >
              Learn more about how I lead
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-6 text-lg leading-relaxed">
              {about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Reveal>
            <Reveal>
              <figure className="relative overflow-hidden rounded-3xl bg-secondary p-8 sm:p-12">
                <span aria-hidden className="display absolute -top-6 left-6 text-[10rem] leading-none text-primary">
                  “
                </span>
                <blockquote className="display relative pt-10 text-2xl leading-snug italic sm:text-3xl">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="eyebrow mt-6 text-muted-foreground">— {testimonial.attribution}</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ways to work together */}
      <section className="dark section">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <Reveal className="flex flex-col gap-4">
            <p className="eyebrow text-primary">Let’s Work Together!</p>
            <h2 className="display max-w-4xl text-5xl sm:text-7xl">
              Four ways I partner with <em className="text-primary">leaders</em>
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 2) * 0.08} className="h-full">
                <article className="group flex h-full flex-col gap-5 bg-background p-8 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:p-10">
                  <p className="text-sm font-medium tracking-widest text-primary tabular-nums transition-colors group-hover:text-primary-foreground">
                    0{i + 1}
                  </p>
                  <h3 className="display text-4xl sm:text-5xl">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/85">
                    {service.body}
                  </p>
                  {service.link && (
                    <Link
                      href={service.link.href}
                      className="mt-auto inline-flex items-center gap-2 pt-2 font-medium underline decoration-primary decoration-2 underline-offset-4 group-hover:decoration-primary-foreground"
                    >
                      {service.link.label}
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Six values */}
      <section className="section relative isolate overflow-hidden">
        <Image
          src="/images/bay-bridge.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-35"
        />
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="flex flex-col gap-4">
              <p className="eyebrow">How I Lead</p>
              <h2 className="display text-5xl sm:text-7xl">
                Six values, <em>one way of leading</em>
              </h2>
            </div>
            <Cta href="/how-i-lead" variant="outline">
              How I Lead
            </Cta>
          </Reveal>
          <ValuesExplorer />
        </div>
      </section>

      {/* Board service */}
      <section className="section">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="flex flex-col gap-4">
              <p className="eyebrow text-muted-foreground">Current Board Service</p>
              <h2 className="display text-5xl sm:text-7xl">
                In the <em>boardroom</em>
              </h2>
            </div>
            <Cta href="/board-director-profile">See my full Board Profile</Cta>
          </Reveal>
          <BoardCards />
        </div>
      </section>

      {/* Thought leadership */}
      <section className="dark section">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <Reveal className="flex flex-col gap-4">
            <p className="eyebrow text-primary">Writing, speaking, and interviews</p>
            <h2 className="display text-5xl sm:text-7xl">
              Thought <em className="text-primary">Leadership</em>
            </h2>
          </Reveal>

          <Reveal>
            <a
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              className="group grid items-center gap-8 rounded-3xl bg-primary p-8 text-primary-foreground transition-transform duration-300 hover:-translate-y-1 sm:p-12 md:grid-cols-[auto_1fr_auto]"
            >
              <Image
                src={featured.image}
                alt=""
                width={750}
                height={767}
                className="w-32 drop-shadow-xl transition-transform duration-500 group-hover:rotate-6 sm:w-44"
              />
              <div className="flex flex-col gap-3">
                <p className="eyebrow">{featured.source}</p>
                <h3 className="display text-4xl sm:text-6xl">{featured.title}</h3>
                <p className="max-w-xl text-lg">{featured.subtitle}</p>
              </div>
              <span className="flex size-14 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:scale-110">
                <ArrowRightIcon className="size-6 -rotate-45" />
              </span>
            </a>
          </Reveal>

          <ThoughtLeadership />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
