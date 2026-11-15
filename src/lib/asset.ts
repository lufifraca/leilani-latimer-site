/** Prefixes a file in /public with the configured base path (see next.config.ts). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
