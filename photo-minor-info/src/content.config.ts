import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/announcements' }),
  schema: z.object({
    title: z.string().min(1), date: z.coerce.date(),
    draft: z.boolean().default(false), sample: z.boolean().default(false),
  }),
});
const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    code: z.string().min(1), title: z.string().min(1), offered: z.boolean(),
    semester: z.string().min(1),
    subjectArea: z.string().min(1),
    catalogUrl: z.url().refine(url => {
      const parsed = new URL(url);
      return parsed.protocol === 'https:' && parsed.hostname === 'courses.newschool.edu';
    }, 'Use an HTTPS link to courses.newschool.edu'),
    order: z.number().default(100), draft: z.boolean().default(false), sample: z.boolean().default(false),
  }),
});
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string() }),
});
export const collections = { announcements, courses, pages };
