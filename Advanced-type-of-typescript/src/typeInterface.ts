//? 2-2 Type Interface
/**
 * !Note:
 * 1. "type interface" is similar to a "type alias", but it is typically used to define object types such as arrays, objects, and functions.
 *
 * 2. For clean code:
 * i. in object, we should use "type interfcace"
 * ii. in function and array: we should use "type alias"
 */

// -------------------------------------------------------
// in type alias:

type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

// intersection two custom types
type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "Mr.X",
  age: 100,
  role: "admin",
};

// -------------------------------------------------------
//* type interface

interface IUser {
  name: string;
  age: number;
}

// interface extension
interface IuserWithRole extends IUser {
  role: "admin" | "user";
}

const user2: IuserWithRole = {
  name: "Mr.X",
  age: 100,
  role: "admin",
};

// -------------------------------------------------------
//* type interface: function

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

// -------------------------------------------------------
//* type interface: array

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ['a', 'b', 'c'];


/**
 * here:
 * the array is string type: ['a', 'b', 'c']
 * the index is number type:   0    1    2
 * 
 * thats why: [idex: number]: string (array element type) 
 */
