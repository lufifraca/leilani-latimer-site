import { cn } from "@/lib/utils"

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 pr-8 whitespace-nowrap">
          <span>{item}</span>
          <span aria-hidden className="text-primary">
            ✦
          </span>
        </li>
      ))}
    </ul>
  )
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {row()}
        {row(true)}
      </div>
    </div>
  )
}
