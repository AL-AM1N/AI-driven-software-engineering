//?Generics in typescript

/**
 * !Note: Generics mean "dynamically generalize"
 * 1. this both is same to same just lekhar style alada:
 *  const friends: string[] = ["x", "amin", "al"];
 *    =
 *  const friends: Array<string> = ["x", "amin", "al"];
 */

//------------------------------------------------------
//* Nomal array:

type GenericArray<T> = Array<T>;

//const friends: string[] = ["x", "amin", "al"];
const friends: Array<string> = ["x", "amin", "al"];

//const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

//const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

//--------------------------------------------------------
//* Array of object:

type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];


//--------------------------------------------------------
//* another example:

type Coordinates<X, Y> = [X, Y];

const coordinate1: Coordinates<number, number> = [20, 30]; // this array contains number
const coordinate2: Coordinates<string, string> = ["20", "30"]; // this array contains string
