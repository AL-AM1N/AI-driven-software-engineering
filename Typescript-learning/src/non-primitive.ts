//? Topic: array , object
//! new topic: touple

// array example:
let shoppingList: string[] = ["shirt", "pant", "panjabi", "pajama"];

// shoppingList.push(true) //! we can't push it, because it's a boolean



let mixedArray: (string | number | boolean)[] = ["shirt", 3, true, "pant"];

mixedArray.push(true);


//? example of "touple":
let couple: [string, string] = ["husband", "wife"];

let nameAndRoll: [string, number] = ["al-amin", 25];

// 3 element touple:
let destination: [string, string, number] = ["dhaka", "chitagong", 5];