import { z } from 'zod';

const defaultString = z.string().min(1).max(50);

export const ProductSchema = z.object({
	body: z.object({
		name: z.string().min(1),
		price: z.number().min(1).nonnegative(),
		image_link: z.string().url(),
		description: z.string().min(5),
		brand: z.number().min(1).nonnegative(),
		category: z.number().min(1).nonnegative(),
		typepro: z.number().min(1).nonnegative(),
		tags: z.array(
			z.object({
				name: defaultString,
			})
		),
		colors: z.array(
			z.object({
				hex_value: defaultString,
				colour_name: defaultString,
			})
		),
	}),
});
