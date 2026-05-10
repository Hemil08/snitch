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

router.post("/", authenticateSeller, upload.array("images", 7),createProduct)

router.post("/products", authenticateSeller ,productController.createProduct)