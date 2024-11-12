import { Router } from "express";

import * as userController from "./../controllers/userController";

const userRoutes = Router();

userRoutes.get("/users", userController.list);
userRoutes.get("/users/:id", userController.show);
userRoutes.post("/users", userController.create);
userRoutes.put("/users/:id", userController.update);
userRoutes.delete("/users/:id", userController.destroy);

export default userRoutes;