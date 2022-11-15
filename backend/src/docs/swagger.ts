import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
	openapi: '3.0.3',
	info: {
		title: 'REST API E-commerce Makeup',
		version: '1.0.0',
		description:
			'REST API que permite operaciones CRUD, gestionando datos relacionales de maquillaje, stock, usuarios entre otros, mediante el uso de una base de datos',
		contact: {
			names: 'API support',
			email: 'dev@edwinsalazar.com',
		},
		license: {
			name: 'MIT',
			url: 'https://opensource.org/licenses/MIT',
		},
	},

	servers: [
		{
			url: 'http://localhost:3000/api/v1/',
			description: 'Development server',
		},
	],

	components: {
		schemas: {
			product: {
				type: 'object',
				required: [
					'name',
					'price',
					'image_link',
					'description',
					'brand',
					'category',
					'typepro',
					'tags',
					'colors',
				],
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
					brand: {
						type: 'number',
					},
					category: {
						type: 'number',
					},
					typepro: {
						type: 'number',
					},
					tags: {
						type: 'object',
						required: ['name'],
						properties: {
							name: {
								type: 'string',
							},
						},
					},
					colors: {
						type: 'object',
						required: ['hex_value', 'colour_name'],
						properties: {
							hex_value: {
								type: 'string',
							},
							colour_name: {
								type: 'string',
							},
						},
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
