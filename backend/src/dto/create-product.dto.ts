import { z } from 'zod';

export interface CreateProductDto {
	readonly name: string;
	readonly price: number;
	readonly image_link: string;
	readonly description: string;
}

export const ProductSchema = z.object({
	name: z.string().min(1),
	price: z.number(),
	image_link: z.string(),
	description: z.string(),
});
