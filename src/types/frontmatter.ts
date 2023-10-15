
import type { getCollection } from "astro:content";

export type Post = Awaited<ReturnType<typeof getCollection>>[0]
export type Frontmatter = Awaited<ReturnType<typeof getCollection>>[0]["data"]