import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import { sendResponse } from "../utility/sendResponse";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  // /products =>  /products/1  => ['','products','1']

  const urlParts = url?.split("/");
  // console.log(urlParts);

  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  // console.log("This is the acutal id : ", id);

  //* Get all products

  if (url === "/products" && method === "GET") {
    try {
      const products = readProduct();

      return sendResponse(
        res,
        200,
        true,
        "Products retrived successfully",
        products,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
};
