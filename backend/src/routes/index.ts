import { Router } from 'express';
// import brands from './brands.router';
import products from './products.router';

const router: Router = Router();
router.use('/products', products);
// router.use('/brands', brands);

export default router;
