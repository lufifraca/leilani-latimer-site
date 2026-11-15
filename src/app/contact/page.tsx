import type { Metadata } from "next"
import { MapPinIcon } from "lucide-react"
import { site } from "@/lib/content"
import { ContactForm } from "@/components/site/contact-form"
import { LinkedInIcon } from "@/components/site/icons"
import { Reveal } from "@/components/site/reveal"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Leilani Latimer.",
}

export default function Contact() {
  return (
    <div className="grid min-h-[calc(100dvh-4rem)] lg:grid-cols-2">
      <section className="coral section relative overflow-hidden">
        <div aria-hidden className="blob animate-blob absolute -bottom-40 -left-40 size-[32rem] bg-cream/25 blur-2xl" />
        <div className="relative flex h-full flex-col justify-between gap-16 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Reveal className="flex flex-col gap-6">
            <p className="eyebrow">Contact</p>
            <h1 className="display text-[clamp(3.25rem,8vw,7rem)]">
              Get in <em className="text-cream">Touch</em>
            </h1>
            <p className="max-w-md text-lg leading-relaxed">
              Board opportunities, advisory engagements, speaking invitations, or a conversation about what comes
              next. Let’s work together!
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 text-lg">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-medium underline decoration-ink/40 underline-offset-4 hover:decoration-ink"
            >
              <LinkedInIcon className="size-5" />
              Connect on LinkedIn
            </a>
            <p className="inline-flex items-center gap-3">
              <MapPinIcon className="size-5" />
              {site.location}
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section flex items-center">
        <Reveal delay={0.1} className="w-full px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  )
}
