import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";

const route = Router();

//* create a new user
route.post("/", userController.createUser);

//* get all user info
route.get("/", auth(), userController.getAllUsers);

//* get single user info
route.get("/:id", userController.getSingleUser);

//* update user api
route.put("/:id", userController.updateUser);

//* delete single user info api
route.delete("/:id", userController.deleteUser);



export const userRouter = route;