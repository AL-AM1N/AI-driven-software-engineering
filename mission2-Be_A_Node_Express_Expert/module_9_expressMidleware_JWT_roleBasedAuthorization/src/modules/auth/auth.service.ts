import bcrypt from "bcryptjs";
import { pool } from "../../db";

import jwt, { type JwtPayload } from "jsonwebtoken";
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
    role: user.role,
    is_active: user.is_active,
  };

  const accessToken = jwt.sign(jwtpayload, config.secret as string, {
    expiresIn: "1d",
  });

  const refreshToken = jwt.sign(jwtpayload, config.refresg_secret as string, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

const generateRefreshToken = async (token: string) => {
  // 1st validation: check if the token exists,
  if (!token) {
    throw new Error("Unauthorized");
  }

  // 2nd validation: find the user into database
  const decoded = jwt.verify(
    token as string,
    config.refresg_secret as string,
  ) as JwtPayload;

  const userData = await pool.query(
    `
      SELECT * FROM users WHERE email=$1
      `,
    [decoded.email],
  );

  const user = userData.rows[0];

  if (userData.rows.length === 0) {
    throw new Error("User not found!");
  }

  // 3rd validation: is the user active or not
  if (!user?.is_active) {
    throw new Error("Forbidden!!");
  }

  const jwtpayload = {
    id: user.id,
    name: user.name,
    role: user.role,
    is_active: user.is_active,
    email: user.email,
  };

  const accessToken = jwt.sign(jwtpayload, config.secret as string, {
    expiresIn: "7d",
  });

  return { accessToken };
};

export const authService = {
  loginUserIntoDB,
  generateRefreshToken,
};
