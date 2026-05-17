import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import config from "./config/env";
import { pool } from "./db";
import { userRouter } from "./modules/user/user.route";
import { profileRouter } from "./modules/profile/profile.route";

const app: Application = express();
const port = config.port;

// middleware: (amra middleware use kori jate server a client theke data ta ashe)
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  //res.send("Hello world!")
  res.status(200).json({
    message: "Express server",
    author: "al amin",
  });
});

app.use("/api/users", userRouter);

app.use("/api/profile", profileRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
