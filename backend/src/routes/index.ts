import { Router } from 'express';
import brands from './brands.router';
import loadData from './load-data.router';
import products from './products.router';

const router: Router = Router();
router.use('/products', products);
router.use('/brands', brands);
router.use('/load-data', loadData);

export default router;
