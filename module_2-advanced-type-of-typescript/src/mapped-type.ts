//? 2-11 Explore mapped types

// ------------------------------------------------------------------
// normal map operation:

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap = arrayOfNum.map((num) => {
  return num.toString();
});

console.log(arrayOfStringUsingMap);

// ------------------------------------------------------------------
//* appling "map" concept in custom type:

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"]; // output: number

// now:
type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: string }> = {
  height: 50,
  width: "20",
};


/**
 * ? explanation:
 * 1️⃣ T কি?

T হল generic type, অর্থাৎ যেকোনো object type হতে পারে।
উদাহরণ: { height: number; width: string } এই object type আমরা পরে পাঠাচ্ছি।

2️⃣ keyof T কি?

keyof T দিয়ে আমরা T এর সব key বের করি।
উদাহরণ:
keyof { height: number; width: string }  →  "height" | "width"
অর্থাৎ আমরা জানতে চাই T-এর property গুলো কি কি।

3️⃣ Mapped Type [key in keyof T]: T[key] কি করছে?

[key in keyof T] মানে: T-এর প্রতিটি key এর জন্য
T[key] মানে: ওই key-এর type ঠিক রেখে রাখা।
সহজভাবে: মূল object type-এর structure copy করা।
jemon:
T[height] = number;
T[width] = string;
 * 
 */