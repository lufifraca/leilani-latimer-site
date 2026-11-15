"use client"

import { useState } from "react"
import { CheckCircle2Icon, SendIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Set NEXT_PUBLIC_FORM_ENDPOINT to a form backend (e.g. Formspree) that accepts a JSON POST.
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT

type Status = "idle" | "sending" | "sent" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!ENDPOINT) {
      setStatus("error")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      })
      setStatus(res.ok ? "sent" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-10">
        <CheckCircle2Icon className="size-12 text-primary" />
        <p className="display text-4xl">Thank you!</p>
        <p className="text-muted-foreground">Your message is on its way. Leilani will be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
            <Input id="firstName" name="firstName" autoComplete="given-name" required className="h-11" />
          </Field>
          <Field>
            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
            <Input id="lastName" name="lastName" autoComplete="family-name" required className="h-11" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" name="email" type="email" autoComplete="email" required className="h-11" />
        </Field>
        <Field data-invalid={status === "error" || undefined}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" name="message" required rows={6} className="min-h-36" />
          {status === "error" && (
            <FieldDescription role="alert" className="text-destructive">
              Your message could not be sent. Please reach out on LinkedIn instead.
            </FieldDescription>
          )}
        </Field>
        <div>
          <Button type="submit" size="lg" className="h-12 rounded-full px-7 text-base" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send"}
            <SendIcon data-icon="inline-end" />
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}
