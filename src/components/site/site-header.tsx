"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { nav, site } from "@/lib/content"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LinkedInIcon } from "./icons"

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="container-x grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform hover:after:scale-x-100",
                pathname === item.href && "font-medium after:scale-x-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon-lg" })} aria-label="Open menu">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className="display text-2xl">{site.name}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact Me" }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-2 py-3 text-lg hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="display justify-self-center text-2xl whitespace-nowrap sm:text-[1.7rem]">
          Leilani <span className="italic">Latimer</span>
        </Link>

        <div className="flex items-center justify-end gap-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Leilani Latimer on LinkedIn"
            className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "hidden sm:inline-flex")}
          >
            <LinkedInIcon />
          </a>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-10 rounded-full px-4 sm:px-5")}
          >
            <span>
              Contact<span className="hidden sm:inline"> Me</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
