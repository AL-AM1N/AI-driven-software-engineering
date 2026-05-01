//? Type Alias in typescript

// ------------------------------------------------------
//* object type alias

// assigning type using "type" keyword, //! accordingthe to the convention, first letter should be capital of the type name

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contractNo: string;
  address: {
    division: string;
    city: string;
  };
};

// using type alias
const user1: User = {
  id: 123,
  name: {
    firstName: "md",
    lastName: "al-amin",
  },
  gender: "male",
  contractNo: "0125",
  address: {
    division: "Dhaka",
    city: "dhaka",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "female",
  contractNo: "01999",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

console.log(user1);

// ------------------------------------------------------

//* boolean type alias

type IsAdmin = true;
const isAdmin: IsAdmin = true;

// ------------------------------------------------------

//* string type alias

type Name = string;

const myName: Name = "al amin";


// ------------------------------------------------------

//* function type alias

type AddFunction = (num1: number, num2: number) => number; //! here after "=> number" is a "return type"

const add: AddFunction = (num1, num2) => num1 + num2;