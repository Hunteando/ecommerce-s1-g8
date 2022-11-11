// import swaggerJSDoc, { Options } from 'swagger-jsdoc';
// import { version } from '../../package.json';

// const options: Options = {
// 	definition: {
// 		openapi: '3.0.0',
// 		info: {
// 			title: 'REST API E-commerce Makeup',
// 			version,
// 			description:
// 				'REST API que permite operaciones CRUD, gestionando datos relacionales de maquillaje, stock, usuarios entre otros, mediante el uso de postgres',
// 			license: {
// 				name: 'MIT',
// 				url: 'https://opensource.org/licenses/MIT',
// 			},
// 			components: {},
// 		},
// 	},
// 	apis: ['./src/routes/products.router.ts', './src/schemas/*.ts'],
// };

// const swaggerSpec = swaggerJSDoc(options);
// export { swaggerSpec };

import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
	openapi: '3.0.3',
	info: {
		title: 'REST API E-commerce Makeup',
		version: '1.0.0',
		description:
			'REST API que permite operaciones CRUD, gestionando datos relacionales de maquillaje, stock, usuarios entre otros, mediante el uso de una base de datos',
		license: {
			name: 'MIT',
			url: 'https://opensource.org/licenses/MIT',
		},
	},

	servers: [
		{
			url: 'http://localhost:3000/api/v1/',
		},
	],

	components: {
		schemas: {
			product: {
				type: 'object',
				required: ['name', 'price', 'image_link', 'description'],
				properties: {
					name: {
						type: 'string',
					},
					price: {
						type: 'number',
					},
					image_link: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
				},
			},
		},
	},
};

const swaggerOptions: OAS3Options = {
	swaggerDefinition,
	apis: ['./src/routes/*.ts'],
};

export default swaggerJSDoc(swaggerOptions);
