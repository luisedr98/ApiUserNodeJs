import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.route("/users")
    .get(userController.index)
    .post(userController.create);

router.route("/users/:id")
    .get(userController.findById)
    .put(userController.edit)
    .delete(userController.destroy);

export default router;
