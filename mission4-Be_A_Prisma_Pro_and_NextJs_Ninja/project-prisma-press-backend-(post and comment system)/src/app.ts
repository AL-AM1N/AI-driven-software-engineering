import express, { application, Application, Request, Response } from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import config from "./config";
import { userRoutes } from "./modules/user/user.route";
import { authRoutes } from "./modules/auth/auth.routes";
import { postRoutes } from "./modules/post/post.routes";

const app: Application = express();

// middleware
app.use(cors({
    origin : config.app_url,
    credentials : true,
}))

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/posts", postRoutes);
// app.use("app/comments")

export default app;