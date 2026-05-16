import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import { userController } from "./user.controler";

const route = Router();

//* create a new user
route.post("/", userController.createUser );


export const userRouter = route;