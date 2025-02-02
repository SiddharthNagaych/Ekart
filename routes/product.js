import express from "express";

import { getProductByCategoryId } from "../controllers/product.js";

// defining the user router
const router=express.Router();

router.get('/:categoryId',getProductByCategoryId);

export default router;