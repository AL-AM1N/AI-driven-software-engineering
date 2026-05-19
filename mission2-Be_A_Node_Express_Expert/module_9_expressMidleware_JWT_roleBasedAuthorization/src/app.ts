import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import config from "./config/env";
import { userRouter } from "./modules/user/user.route";
import { profileRouter } from "./modules/profile/profile.route";
import { authRouter } from "./modules/auth/auth.route";
import logger from "./middleware/logger";
import CookieParser from "cookie-parser"; // we should install: npm i --save-dev @types/cookie-parser
import cors from "cors"; // npm i --save-dev @types/cors
import globalErrorHandler from "./middleware/globalErrorHandler";


const app: Application = express();
const port = config.port;

// middleware: (amra middleware use kori jate server a client theke data ta ashe)
app.use(CookieParser())
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
app.use(logger);

app.use(
  cors({
    origin: "http://localhost:5000",
  }),
);

app.get("/", (req: Request, res: Response) => {
  //res.send("Hello world!")
  res.status(200).json({
    message: "Express server",
    author: "al amin",
  });
});

app.use("/api/users", userRouter);

app.use("/api/profile", profileRouter);

app.use("/api/auth", authRouter);

// Global Error Handling Middleware
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
