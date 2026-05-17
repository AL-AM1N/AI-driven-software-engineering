import { pool } from "../../db";
import type { IUser } from "./user.interface";

const createUserIntoDB = async (payload: IUser) => {
  const { name, email, password, age } = payload;

  const result = await pool.query(
    `
     INSERT INTO users(name,email,password,age) VALUES($1,$2,$3,$4) RETURNING *
    `,
    [name, email, password, age],
  );

  return result;
};

const getAllUsersFromDB = async () => {
  const result = await pool.query(`
           SELECT * FROM users  
            `);

            return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await pool.query(
      `
       SELECT * FROM users WHERE id=$1  
        `,
      [id],
    );
    return result;
}

const updateUserFromDB = async (payload: IUser, id: string) => {
  const {name, password, age, is_active} = payload;
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

    return result;
}

export const userService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
};
