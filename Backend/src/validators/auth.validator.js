import express from "express";
import { body, validationResult } from "express-validator";

function validateRequest(req, res, next) { 

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next()
}

export const validateRegisterUser = [

    body("email").isEmail().withMessage("Please provide a valid email address"),

    body("contact.country")
        .matches(/^\+\d{1,4}$/)
        .withMessage("please provide a valid country code with + sign"),
    
    body("contact.number")
        .matches(/^[0-9]{6,15}$/)
        .withMessage("Please provide a valid contact number"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),

    body("fullname")
        .notEmpty()
        .withMessage("Full name is required")
        .isLength({ min: 3 })
        .withMessage("Full name must be at least 3 characters long"),

    body("role")
        .optional()
        .isIn(["seller", "buyer"])
        .withMessage("Role must be either 'seller' or 'buyer'"),

    validateRequest

];
