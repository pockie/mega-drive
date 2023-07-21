import { defineCollection, z } from 'astro:content';

const games = defineCollection({
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		genres: z.array(z.string()),
		release: z.string(),
		wikipedia: z.string().url().optional(),
	}),
});

const hardwares = defineCollection({
	schema: z.object({
		title: z.string(),
		release: z.string(),
		sizes: z.object({
			depth: z.number(),
			width: z.number(),
			height: z.number(),
		}),
		wikipedia: z.string().url().optional(),
	}),
});

export const collections = { games, hardwares };
