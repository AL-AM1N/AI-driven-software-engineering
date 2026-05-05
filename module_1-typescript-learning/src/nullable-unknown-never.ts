//? nullable, unknown & never type

// --------------------------------------------------------------
//* nullable types

const getUser = (input: string | null) => {
  // nullable types
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: ALL USER");
  }
};

// --------------------------------------------------------------
//* unknown types

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {

    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
    
  } else if (typeof input === "string") {

    // const spiltedInput = input.split(" "); //! .split(" ") breaks the string into pieces wherever it finds a space (" ")
    // console.log(spiltedInput);

    const [discountedPrice] = input.split(" "); //array destructuring
    console.log(Number(discountedPrice) * 0.1); // convert a string to a number
  } else {
    console.log("wrong input");
  }
};

discountCalculator(100); // output: 10
discountCalculator("100 TK"); // output: 10
discountCalculator(null); // output: wrong input


//-----------------------------------------------------------
//* never types: it will never return anything

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");
