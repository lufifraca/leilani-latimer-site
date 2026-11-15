import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type Props = {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost"
  className?: string
  download?: boolean
  arrow?: boolean
}

/** Large pill call-to-action rendered as a link. */
export function Cta({ href, children, variant = "default", className, download, arrow = true }: Props) {
  const cls = cn(
    buttonVariants({ variant, size: "lg" }),
    "h-12 rounded-full px-6 text-[0.95rem] font-medium",
    variant === "outline" && "border-foreground/30 bg-transparent hover:bg-foreground/5",
    className
  )
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowUpRightIcon
          data-icon="inline-end"
          className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
        />
      )}
    </>
  )
  if (download || href.startsWith("http")) {
    return (
      <a href={href} className={cls} {...(download ? { download: true } : { target: "_blank", rel: "noreferrer" })}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}
