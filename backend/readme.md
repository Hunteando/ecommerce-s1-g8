# API REST E-commerce Makeup

_REST API que permite operaciones CRUD, gestionando datos relacionales de maquillaje, stock, usuarios entre otros, mediante el uso de una base de datos._

Developed by [Edwin Salazar][es]

E-commerce Makeup devuelve datos en formato Json.

## Tecnologías

E-commerce Makeup utiliza una serie de proyectos de código abierto para funcionar correctamente:

- [node.js] - entorno de ejecución de JavaScript.
- [Typescript] - extiende la sintaxis de JavaScript
- [Express] - Framework para desarrollar aplicaciones web y APIs.
- [Zod] - Solicitudes seguras.
- [Typeorm] - ORM

Y, por supuesto, E-commerce Makeup en sí es de código abierto con un [repositorio público][e-com] en GitHub.

## Endpoints

### \* Productos

### Obtener lista de productos

<https://e-commerce-makeup.onrender.com/api/v1/products>

### Obtener un solo producto por id

<https://e-commerce-makeup.onrender.com/api/v1/products/1>

### Parámetros de consulta

| Query params | Type    | Detail                                                                                             |
| ------------ | ------- | -------------------------------------------------------------------------------------------------- |
| page         | Integer | Un número de página dentro del conjunto de resultados paginado. <br /> _Por defecto el valor es 0_ |
| page_size    | Integer | Número de resultados a devolver por página. <br /> _Por defecto el valor es 0_                     |
| product_type | String  | Filtro por tipo de product                                                                         |
