import { z } from 'zod';

export const ProductSchema = z.object({
	body: z.object({
		name: z.string().min(1),
		price: z.number().min(1).nonnegative(),
		image_link: z.string().url(),
		description: z.string().min(5),
	}),
});
