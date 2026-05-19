import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config/env";
import { pool } from "../db";
import type { ROLES } from "../types";

const auth = (...roles: ROLES[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(roles);
    // console.log("This is protected Route");
    // console.log(req.headers.authorization);

    try {
      const token = req.headers.authorization;
      // console.log(token);

      // 1st validation: check if the token exists,
      if (!token) {
        res.status(401).json({
          seccess: false,
          message: "Unauthorized access!",
        });
      }

      // 2nd validation: find the user into database
      const decoded = jwt.verify(
        token as string,
        config.secret as string,
      ) as JwtPayload;
      // console.log(decoded);

      const userData = await pool.query(
        `
      SELECT * FROM users WHERE email=$1
      `,
        [decoded.email],
      );
      // console.log(userData);

      const user = userData.rows[0];
      // console.log(user);

      if (userData.rows.length === 0) {
        res.status(404).json({
          seccess: false,
          message: "User not found!",
        });
      }

      // 3rd validation: is the user active or not
      if (!user?.is_active) {
        res.status(403).json({
          success: false,
          message: "Forbidden!!",
        });
      }

      console.log("auth role:", user.role);

      // roles = ["admin","agent"]
      // user.role = "admin" | "user" | "agent"

      if (roles.length && !roles.includes(user.role)) {
        res.status(403).json({
          success: false,
          message: "Forbidden!!,This role have no access!",
        });
      }

      req.user = decoded; // req: { user: {} } //! req object er moddhe user bolte kichu nei, tai amra eitake manually set korechi middleware/index.d.ts file er moddhe, tai r error dicche na (eitake "Namespace" bole)

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
