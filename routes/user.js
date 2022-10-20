const express = require("express");
const router = new express.Router();

const authMiddleware = require("../middlewares/auth");
const getTokenMiddleware = require("../middlewares/getToken");

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

// * Token Refresh

// Middlewares
router.use("/token/refresh", getTokenMiddleware);

// Route
router.put("/token/refresh", userController.tokenRefresh);

// * Tasks

// Middlewares
router.use("/tasks", getTokenMiddleware);

// Route
router.get("/tasks", userController.getTasks);

module.exports = router;
