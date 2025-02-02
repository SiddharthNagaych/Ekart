import express from "express";

import { getAllCategories } from "../controllers/category.js";

// defining the user router
const router=express.Router();

router.get('/',getAllCategories);

export default router;