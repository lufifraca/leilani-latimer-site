"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRightIcon, PlayIcon } from "lucide-react"
import type { Video } from "@/lib/content"

/** Shows a poster with a play button; the video (YouTube or self-hosted) loads and plays in place on click. */
export function VideoPlayer({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="flex flex-col gap-4">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-xl shadow-ink/15">
        {playing ? (
          video.youtube ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtube}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          ) : (
            <video
              src={video.file}
              poster={video.poster}
              controls
              autoPlay
              playsInline
              className="absolute inset-0 size-full object-contain"
            />
          )
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="group absolute inset-0 size-full outline-none focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-inset"
          >
            <Image
              src={video.poster}
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 92vw"
              className={
                video.file
                  ? "object-contain"
                  : "object-cover transition-transform duration-700 group-hover:scale-105"
              }
            />
            <span className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/10" />
            <span className="absolute inset-0 m-auto flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
              <PlayIcon className="size-8 translate-x-0.5 fill-current" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex flex-col gap-1.5">
        <p className="text-xl leading-snug font-medium text-balance">{video.title}</p>
        {video.note && <p className="text-sm text-muted-foreground">{video.note}</p>}
        {video.more && (
          <a
            href={video.more.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 self-start text-sm font-medium underline decoration-primary decoration-2 underline-offset-4"
          >
            {video.more.label}
            <ArrowUpRightIcon className="size-4" />
          </a>
        )}
      </figcaption>
    </figure>
  )
}
