const express = require("express");
const router = new express.Router();

const authMiddleware = require("../middlewares/auth");
const userController = require("../controllers/userController");

// * Sing Up
// Middlewares
router.use("/sign-up", authMiddleware.usernameAndPasswordCheck);
router.use("/sign-up", authMiddleware.usernameCheck);
router.use("/sign-up", authMiddleware.passwordCheck);

// Route
router.post("/sign-up", userController.signUp);

// * Sing In
// Middlewares
router.use("/sign-in", authMiddleware.usernameAndPasswordCheck);
router.use("/sign-in", authMiddleware.passwordCheck);

// Route
router.post("/sign-in", userController.signIn);

module.exports = router;
