import bcrypt from "bcryptjs";
import { pool } from "../../db";

import jwt from "jsonwebtoken";
import config from "../../config/env";

const loginUserIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;

  //* There are three steps:
  // 1. Check if the user exists -> Done
  // 2. Compare the password -> Done
  // 3. Generate Token -> Done

  // 1. Check if the user exists
  const userData = await pool.query(
    `
    SELECT * FROM users WHERE email = $1
    `,
    [email],
  );

  if (userData.rows.length === 0) {
    throw new Error("Invalid Credentials!");
  }

  // 2. Compare the password
  const user = userData.rows[0];
  const mathchPassword = await bcrypt.compare(password, user.password);

  //console.log(mathchPassword); // output: true or false

  if (!mathchPassword) {
    throw new Error("Invalid Credentials!");
  }

  // 3. Generate Token

  const jwtpayload = {
    id: user.id,
    email: user.email,
    name: user.name,
    is_active: user.is_active,
  };

  const accessToken = jwt.sign(jwtpayload, config.secret as string, {
    expiresIn: "7d",
  });

  return {accessToken};
};

export const authService = {
  loginUserIntoDB,
};
