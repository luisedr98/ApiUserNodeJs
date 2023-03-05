import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.route("/users").get(userController.index).post(userController.create);

export default router;
