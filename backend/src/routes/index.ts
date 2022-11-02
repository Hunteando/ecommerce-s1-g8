import { Router } from "express";
import products from "./products.router";

const router: Router = Router();
router.use("/products", products);

export default router;
