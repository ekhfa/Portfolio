import { z } from "astro:content";

export const projectSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date().optional(),
    title: z.string(),
    projectSlug: z.string().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
  })
  .strict();

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
