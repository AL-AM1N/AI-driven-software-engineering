import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
import config from "./config/env";

const app: Application = express();
const port = config.port;

// middleware: (amra middleware use kori jate server a client theke data ta ashe)
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

const pool = new Pool({
  connectionString: config.connection_string,
});

const initDB = async () => {
  try {
    await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(20),
            email VARCHAR(20) UNIQUE NOT NULL,
            password VARCHAR(20) NOT NULL,
            is_active BOOLEAN DEFAULT true, 
            age INT,

            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            )
            `);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

initDB();

app.get("/", (req: Request, res: Response) => {
  //res.send("Hello world!")
  res.status(200).json({
    message: "Express server",
    author: "al amin",
  });
});


//* create a new user
app.post("/api/users", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;

  try {
    const result = await pool.query(
      `
    INSERT INTO users(name, email, password, age) VALUES($1, $2, $3, $4)
    RETURNING *
    `,
      [name, email, password, age],
    );

    // console.log(result);

    res.status(201).json({
      message: "User Created successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

//* get all user info
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
           SELECT * FROM users  
            `);
    res.status(200).json({
      success: true,
      message: "Users retrived successfully!",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

//* get single user info
app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
       SELECT * FROM users WHERE id=$1  
        `,
      [id],
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User Not found!",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "User retrived successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

//* update user api
app.put("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, age, is_active } = req.body;

  // console.log(id);
  // console.log({name, password, age, is_active});

  try {
    const result = await pool.query(
      // // UPDATE users SET name=$1, password=$2, age=$3, is_active=$4
      //* amra shob shomoy shob value update nao korte pari, jei value gula amra update korbo na shegula by default "null" value kore pathay, so amra jodi chai jegula value update korbo na shegula jemon ase omon thakbe tahole amader "COALESCE" use korte hobe
      `
          UPDATE users 
    SET 
    name=COALESCE($1,name),
    password=COALESCE($2,password),
    age=COALESCE($3,age),
    is_active=COALESCE($4,is_active)
        WHERE id=$5 RETURNING *
      `,
      [name, password, age, is_active, id],
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User Not found!",
        data: {},
      });
    }

    // console.log(result);
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});


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
