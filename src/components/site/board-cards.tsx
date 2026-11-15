import { ArrowUpRightIcon } from "lucide-react"
import { boards } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "./reveal"

export function BoardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {boards.map((board, i) => (
        <Reveal key={board.company} delay={i * 0.08} className="h-full">
          <Card className="h-full transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="display text-3xl">
                <a
                  href={board.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-primary decoration-2 underline-offset-4 hover:decoration-foreground"
                >
                  {board.company}
                </a>
              </CardTitle>
              <CardDescription className="text-base">{board.role}</CardDescription>
              <CardAction>
                <ArrowUpRightIcon className="size-5 text-muted-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <ul className="flex flex-col gap-2 text-sm">
                {board.committees.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
              {board.tag && (
                <Badge variant="secondary" className="mt-auto">
                  {board.tag}
                </Badge>
              )}
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
