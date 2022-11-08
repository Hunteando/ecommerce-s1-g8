import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const schemaValidation =
	(schema: AnyZodObject) => (req: Request, _: Response, next: NextFunction) => {
		try {
			const { body, params, query } = req;
			schema.parse({
				body,
				params,
				query,
			});
			next();
		} catch (err) {
			next(err);
		}
	};
