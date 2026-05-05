//? 2-12 Explore Utility types

/**
 * ! Note:
 * 1. Pick: একটি type থেকে শুধু কিছু নির্দিষ্ট key বাছাই করে নেয়।
 * 2. Omit: একটি type থেকে নির্দিষ্ট key বাদ দেয়।
 * 3. Required: type-এর সব optional property কে required বানায়।
 * 4. Partial: type-এর সব property কে optional বানায়।
 * 5. Readonly: type-এর সব property read-only বানায় (change করা যাবে না)।
 * 6. Record: key type এবং value type দিয়ে একটি object type বানায়।
 */

// -------------------------------------------------------------
//* Pick, Omit, Required, Partial, Readonly, Record type

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "20",
  stock: 100,
  color: "black",
};

type OptionProduct = Partial<Product>;
type ProductReadonly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 222,
  name: "Mouse",
  price: "20",
};


// here in emptyObj:
/**
 * Record<string, unknown>
 * 1. string is "key" type
 * 2. the value is "unknown" type, that means it can be any type
 * 
 * id: 222,
  name: "Mouse",
  price: "20",

  here id, name, price is "key", value: 222 -> number type, "Mouse" -> string type, "20" -> string type
 */