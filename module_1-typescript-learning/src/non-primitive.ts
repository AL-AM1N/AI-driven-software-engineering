//? Topic: array , object
//! new topic: touple

// -------------------------------------------------------------------
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

// -----------------------------------------------------------------

//? Object example:


// basic object with optional funtionality
const user: {
    firstName: string;
    middleName?: string; //! the middle name is optional by "?"
    lastName: string;
    isMarried: boolean;
} = {
    firstName: "mohammad",
    lastName: "al-amin",
    isMarried: false
}


//* object with "literal types"
const user1: {
    organization: "Programming Hero"; //! value => type : literal types (the value is fiexd, it can't be changed)
    firstName: string;
    lastName: string;
    isMarried: boolean;
} = {
    organization: "Programming Hero",
    firstName: "mohammad",
    lastName: "al-amin",
    isMarried: false
}


//* object with "access modifier"
const user2: {
    readonly organization: string; //! we can call it "access modifier", bacause we can't change the value of organization
    firstName: string;
    lastName: string;
    isMarried: boolean;
} = {
    organization: "Programming Hero",
    firstName: "mohammad",
    lastName: "al-amin",
    isMarried: false
}