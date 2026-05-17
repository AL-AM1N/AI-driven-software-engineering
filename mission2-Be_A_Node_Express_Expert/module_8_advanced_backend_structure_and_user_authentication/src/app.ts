import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import config from "./config/env";
import { pool } from "./db";
import { userRouter } from "./modules/user/user.route";

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

//* delete single user info api
app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `
    DELETE FROM users WHERE id=$1  
      `,
      [id],
    );

    console.log(result);
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User Not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
