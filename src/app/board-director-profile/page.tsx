import type { Metadata } from "next"
import Image from "next/image"
import { DownloadIcon } from "lucide-react"
import { boardProfile, site, stats } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { BoardCards } from "@/components/site/board-cards"
import { CountUp } from "@/components/site/count-up"
import { Cta } from "@/components/site/cta"
import { CtaBand } from "@/components/site/cta-band"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/site/reveal"

export const metadata: Metadata = {
  title: "Board Director Profile",
  description: boardProfile.valueProp,
}

function DownloadBio({ className }: { className?: string }) {
  return (
    <Cta href={site.bioPdf} download arrow={false} className={className}>
      <DownloadIcon data-icon="inline-start" />
      Download Full Bio
    </Cta>
  )
}

function CheckList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 border-b py-3.5 last:border-b-0">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function BoardDirectorProfile() {
  return (
    <>
      <PageHero
        eyebrow="Board Director Profile"
        title={
          <>
            In the <em className="text-cream">boardroom</em>
          </>
        }
      >
        <ul className="flex flex-wrap gap-2">
          {boardProfile.headline.map((h) => (
            <li key={h}>
              <Badge className="h-auto px-3 py-1.5 text-sm">{h}</Badge>
            </li>
          ))}
        </ul>
        <p className="text-base sm:text-lg">{boardProfile.intro}</p>
        <div>
          <DownloadBio />
        </div>
      </PageHero>

      {/* Value proposition */}
      <section className="section">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-[auto_1fr] lg:gap-20 lg:py-28">
          <Reveal className="flex items-center gap-6 lg:flex-col">
            <Image
              src="/images/nacd.png"
              alt="NACD Directorship Certified"
              width={500}
              height={500}
              className="size-28 sm:size-40"
            />
            <a
              href={boardProfile.credentials[0].href}
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/dtw-2026.webp"
                alt="Directors & Boards: Director to Watch 2026"
                width={750}
                height={767}
                className="w-28 sm:w-40"
              />
            </a>
          </Reveal>
          <Reveal className="flex flex-col gap-6">
            <p className="eyebrow text-muted-foreground">Board Value Proposition</p>
            <p className="display text-3xl leading-tight sm:text-4xl lg:text-5xl">{boardProfile.valueProp}</p>
          </Reveal>
        </div>
      </section>

      {/* Current board service */}
      <section className="section">
        <div className="container-x flex flex-col gap-10 pb-20 lg:pb-28">
          <Reveal>
            <h2 className="display text-5xl sm:text-6xl">
              Current Board <em>Service</em>
            </h2>
          </Reveal>
          <BoardCards />
        </div>
      </section>

      {/* Competencies */}
      <section className="dark section">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <h2 className="display text-5xl sm:text-6xl">
              Board <em className="text-primary">Competencies</em>
            </h2>
            <div>
              <DownloadBio />
            </div>
          </Reveal>
          <ol className="flex flex-col">
            {boardProfile.competencies.map((c, i) => (
              <li key={c} className="border-b last:border-b-0">
                <Reveal delay={i * 0.04} className="flex items-baseline gap-6 py-5">
                  <span className="text-sm font-medium tracking-widest text-primary tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl sm:text-2xl">{c}</span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Operating experience */}
      <section className="section">
        <div className="container-x flex flex-col gap-14 py-20 lg:py-28">
          <Reveal className="flex max-w-4xl flex-col gap-6">
            <h2 className="display text-5xl sm:text-6xl">
              Operating Experience <em>Relevant to Boards</em>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{boardProfile.operating}</p>
          </Reveal>
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

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
            <Reveal className="flex flex-col gap-5">
              <h3 className="display text-4xl">Industries</h3>
              <ul className="flex flex-wrap gap-2">
                {boardProfile.industries.map((industry) => (
                  <li key={industry}>
                    <Badge variant="secondary" className="h-auto px-3 py-1.5 text-sm">
                      {industry}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-2">
              <h3 className="display text-4xl">Credentials</h3>
              <CheckList
                items={boardProfile.credentials.map((c) =>
                  c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-primary decoration-2 underline-offset-4"
                    >
                      {c.label}
                    </a>
                  ) : (
                    c.label
                  )
                )}
              />
            </Reveal>
            <Reveal delay={0.16} className="flex flex-col gap-2">
              <h3 className="display text-4xl">Education</h3>
              <CheckList items={boardProfile.education} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="coral section">
        <div className="container-x grid gap-10 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-28">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <h2 className="display text-5xl sm:text-6xl">
              Board Profile <em className="text-cream">Snapshot</em>
            </h2>
            <div>
              <DownloadBio />
            </div>
          </Reveal>
          <Reveal>
            <dl className="flex flex-col">
              {boardProfile.snapshot.map(([term, detail]) => (
                <div key={term} className="grid gap-1 border-b py-4 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt className="font-semibold">{term}</dt>
                  <dd className="leading-relaxed">{detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
