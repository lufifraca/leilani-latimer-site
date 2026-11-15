"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"
import { values } from "@/lib/content"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

/** The six leadership values: a hover/keyboard explorer on desktop, an accordion on small screens. */
export function ValuesExplorer() {
  const [active, setActive] = useState(0)
  const current = values[active]

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const delta = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (active + delta + values.length) % values.length
    setActive(next)
    document.getElementById(`value-tab-${next}`)?.focus()
  }

  return (
    <>
      <div className="hidden grid-cols-[1.1fr_0.9fr] items-center gap-16 lg:grid">
        <div role="tablist" aria-label="Leadership values" aria-orientation="vertical" onKeyDown={onKeyDown}>
          {values.map((value, i) => (
            <button
              key={value.name}
              id={`value-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls="value-panel"
              tabIndex={active === i ? 0 : -1}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={cn(
                "display group flex w-full items-baseline gap-5 rounded-lg py-1.5 text-left text-[clamp(3rem,5.6vw,5.25rem)] transition-all duration-300 outline-none focus-visible:ring-3 focus-visible:ring-ring/60",
                active === i ? "translate-x-3 text-foreground" : "text-foreground/30 hover:text-foreground/60"
              )}
            >
              <span className="w-8 font-sans text-sm font-medium tracking-widest tabular-nums">0{i + 1}</span>
              <span className={cn(active === i && "italic")}>{value.name}</span>
            </button>
          ))}
        </div>
        <div
          id="value-panel"
          role="tabpanel"
          aria-labelledby={`value-tab-${active}`}
          className="relative min-h-80 rounded-3xl bg-card/85 p-10 shadow-xl shadow-ink/10 backdrop-blur-sm"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5"
            >
              <p className="eyebrow text-muted-foreground">
                0{active + 1} / 0{values.length}
              </p>
              <h3 className="text-2xl leading-snug font-medium">{current.tagline}</h3>
              <p className="leading-relaxed text-muted-foreground">{current.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Accordion defaultValue={[values[0].name]} className="rounded-3xl bg-card/85 px-5 backdrop-blur-sm lg:hidden">
        {values.map((value) => (
          <AccordionItem key={value.name} value={value.name}>
            <AccordionTrigger className="display items-center py-4 text-3xl hover:no-underline">
              {value.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3 pb-2">
                <p className="text-base font-medium">{value.tagline}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
