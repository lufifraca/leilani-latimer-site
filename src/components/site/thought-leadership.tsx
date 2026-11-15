"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRightIcon, HeadphonesIcon, PlayIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { categories, pieces, type Piece } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const ALL = "All"
const INITIAL = 6

function PieceCard({ piece }: { piece: Piece }) {
  const KindIcon = piece.kind === "Video" ? PlayIcon : piece.kind === "Podcast" ? HeadphonesIcon : null
  return (
    <a
      href={piece.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all duration-300 outline-none hover:-translate-y-1 hover:ring-primary focus-visible:ring-3 focus-visible:ring-ring"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={piece.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {KindIcon && (
          <span className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
            <KindIcon className="size-6" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">{piece.source}</Badge>
          <ArrowUpRightIcon className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
        <h3 className="text-lg leading-snug font-medium text-balance">{piece.title}</h3>
        {piece.subtitle && <p className="text-sm leading-relaxed text-muted-foreground">{piece.subtitle}</p>}
      </div>
    </a>
  )
}

export function ThoughtLeadership() {
  const [filter, setFilter] = useState(ALL)
  const [expanded, setExpanded] = useState(false)

  const matching = filter === ALL ? pieces : pieces.filter((p) => p.category === filter)
  const visible = filter === ALL && !expanded ? matching.slice(0, INITIAL) : matching

  return (
    <div className="flex flex-col gap-8">
      <ToggleGroup
        aria-label="Filter by topic"
        value={[filter]}
        onValueChange={(v) => v.length && setFilter(v[0] as string)}
        variant="outline"
        size="lg"
        spacing={2}
        className="flex-wrap"
      >
        {[ALL, ...categories].map((c) => (
          <ToggleGroupItem
            key={c}
            value={c}
            className="rounded-full px-4 data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground"
          >
            {c}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((piece) => (
            <motion.li
              key={piece.href}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <PieceCard piece={piece} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {filter === ALL && !expanded && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-6"
            onClick={() => setExpanded(true)}
          >
            Show all {pieces.length} pieces
          </Button>
        </div>
      )}
    </div>
  )
}
