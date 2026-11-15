import Link from "next/link"
import { nav, site } from "@/lib/content"
import { LinkedInIcon } from "./icons"

export function SiteFooter() {
  return (
    <footer className="dark section">
      <div className="container-x flex flex-col gap-12 py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-muted-foreground">Follow me</p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="display group flex items-center gap-4 text-4xl sm:text-6xl"
            >
              <LinkedInIcon className="size-9 text-primary sm:size-12" />
              <span className="underline decoration-transparent decoration-2 underline-offset-8 transition-colors group-hover:decoration-primary">
                LinkedIn
              </span>
            </a>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {[...nav, { href: "/contact", label: "Contact Me" }].map((item) => (
              <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {site.name}</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
