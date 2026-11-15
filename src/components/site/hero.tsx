import Image from "next/image"
import { roles } from "@/lib/content"
import { Cta } from "./cta"
import { Reveal } from "./reveal"
import { asset } from "@/lib/asset"

function BadgeRing() {
  const text = "NACD Directorship Certified ✦ Directors to Watch 2026 ✦ "
  return (
    <div className="relative size-36 sm:size-44">
      <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <path id="ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <circle cx="100" cy="100" r="99" className="fill-ink" />
        <text className="fill-cream text-[15.5px] font-medium tracking-[0.2em] uppercase">
          <textPath href="#ring" textLength="495">
            {text}
          </textPath>
        </text>
      </svg>
      <Image
        src={asset("/images/nacd.png")}
        alt="NACD Directorship Certified badge"
        width={500}
        height={500}
        className="absolute inset-0 m-auto size-[46%] rounded-full"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="coral section relative overflow-hidden">
      <div
        aria-hidden
        className="blob animate-blob absolute -top-40 -right-40 size-[38rem] bg-cream/25 blur-2xl"
      />
      <div className="container-x relative grid items-center gap-14 pt-14 pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pt-20 lg:pb-28">
        <div className="flex flex-col gap-8">
          <Reveal>
            <ul className="eyebrow flex flex-wrap gap-x-3 gap-y-1.5">
              {roles.map((role, i) => (
                <li key={role} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden>/</span>}
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display text-[clamp(3rem,6.6vw,6.25rem)]">
              <span className="block whitespace-nowrap">
                Bringing <em className="text-cream">clarity</em>
              </span>
              <span className="block whitespace-nowrap">to complexity.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16} className="flex max-w-2xl flex-col gap-4 text-lg leading-relaxed sm:text-xl">
            <p className="font-medium">
              Scaling B2B, SaaS, and enterprise technology companies through revenue growth, business
              transformation, and strategic execution.
            </p>
            <p className="text-base text-muted-foreground sm:text-lg">
              Leilani partners with CEOs, boards, and VC/PE firms to align teams, strengthen governance, and
              unlock enterprise value.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="flex flex-wrap gap-3">
            <Cta href="/contact">Let’s work together</Cta>
            <Cta href="/board-director-profile" variant="outline">
              Board Director Profile
            </Cta>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="blob animate-blob relative aspect-[4/5] overflow-hidden bg-cream shadow-2xl shadow-ink/25">
            <Image
              src={asset("/images/portrait.jpg")}
              alt="Leilani Latimer"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 90vw"
              className="object-cover object-[58%_30%]"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 sm:-left-10">
            <BadgeRing />
          </div>
          <a
            href="https://www.directorsandboards.com/directors-to-watch/directors-to-watch-2026-leilani-c-latimer/"
            target="_blank"
            rel="noreferrer"
            className="absolute -top-6 -right-2 w-24 rotate-6 transition-transform hover:scale-105 hover:rotate-0 sm:w-28"
          >
            <Image
              src={asset("/images/dtw-2026.webp")}
              alt="Directors & Boards: Director to Watch 2026"
              width={750}
              height={767}
              className="drop-shadow-xl"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
