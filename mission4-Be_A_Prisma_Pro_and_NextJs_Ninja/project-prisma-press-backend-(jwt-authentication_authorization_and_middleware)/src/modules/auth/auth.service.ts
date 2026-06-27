import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { ILoginUser } from "./auth.interface";

const loginUser = async (payload: ILoginUser) => {
  const { email, password } = payload;

  //* this "findUniqueOrThrow" gives us auto error if it's not find user
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: email,
    },
  });
  
  const isPasswordMtched = await bcrypt.compare(password, user.password);

  if(!isPasswordMtched){
    throw new Error("Password is incorrect");
  }
  return user;
};

export const authService = {
  loginUser,
};
