//? keyof : type operator (type er upor kaj kore)

// -------------------------------------------------------------------
//* Basic "keyof" operation
type RichPeoplesVehicle = {
  car: string; // key: value
  bike: string;
  cng: string;
};

//* "type MyVehicle1 = "bike" | "car" | "cng";" === "type MyVehicle2 = keyof RichPeoplesVehicle;"

//normal
type MyVehicle1 = "bike" | "car" | "cng";

// with keyof
type MyVehicle2 = keyof RichPeoplesVehicle;

//const myVehicle: MyVehicle2 = "ship" // ❌ it will give error, because "ship" is not one of the key of RichPeoplesVehicle

// ------------------------------------------------------------------

// normal

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222, // key: value
  name: "Mezba",
  address: {
    city: "ctg",
  },
};


//* "const myId = user.id;" === "const myId = user["id"];"
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];


// -------------------------------------------------------------------
// keyof constraint with generics

const getPropertyFromObj = <X>(obj: X, key:keyof X) => {
    return obj[key];
}

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result = getPropertyFromObj(product, "brand");
console.log(result); // output: HP

const result1 = getPropertyFromObj(student, "class");
console.log(result1); // output: "four"