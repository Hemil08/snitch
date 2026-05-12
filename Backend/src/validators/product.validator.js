import express from "express"
import { body, validationResult } from "express-validator"

function validateRequest(req, res, next) {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next()
}

export const validateCreateProduct = [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("priceAmount").isNumeric().withMessage("Price amount must be a number greater than 0"),
    body("priceCurrency").notEmpty().withMessage("Price currency must be a 3-letter code"),
    validateRequest
]