import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import { userController } from "./user.controler";

const route = Router();

//* create a new user
route.post("/", userController.createUser);

//* get all user info
route.get("/", userController.getAllUsers);


export const userRouter = route;