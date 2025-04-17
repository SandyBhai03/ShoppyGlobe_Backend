import express from "express";
const router = express.Router(); // create router object

import {
  createProduct,
  getAllProducts,
  getProductById,
} from '../controllers/productController.js' // import controller functions

import { verifyToken } from "../middleware/verifyToken.js";
import { isAdmin } from "../middleware/isAdmin.js";


// Route to fetch all products
router.get('/', getAllProducts); // GET /api/products

// Route to fetch single product by ID
router.get('/:id', getProductById); // GET /api/products/:id

// ~~~~~ Only Admin can add new products ~~~~~~~~~
// Route to add new Product in MongoDB
router.post('/', verifyToken, isAdmin, createProduct) // POST /api/products

export default router;