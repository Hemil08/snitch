import { Router } from "express";
import * as productController from "../controllers/product.controller.js"
import { authenticateSeller } from "../middlewares/auth.middleware.js"
import multer from "multer"
import { createProduct } from "../controllers/product.controller.js";

const upload = multer({
    storage: multer.memoryStorage(),
    limits:{
        fileSize: 5 * 1024 * 1024
    }
})

const router = Router()

// @route POST /api/products
// @desc Create a new product
// @access Private (only sellers can create products)

router.post("/", authenticateSeller, upload.array("images", 7),productController.createProduct)

// @route GET /api/products/seller
// @desc Get products of the authenticated seller
// @access Private (only sellers can access their products)

router.get("/seller", authenticateSeller, productController.getSellerProducts)

// @route GET /api/products
// @desc Get all products (for buyers)
// @access Public

router.get("/", productController.getAllProducts)

export default router