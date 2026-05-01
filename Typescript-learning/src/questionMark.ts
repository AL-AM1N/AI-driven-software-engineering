//? ternary, nullish coalescing & optional chaining

/**
 * ! Note:
 * 1. "?" = ternary operator (we use this for decision making)
 * 2. "??" = nullish coalescing (we use it when the variable value is null or undefined)
 * 3. "?." = optional chaining (optional chaining korle amader application crashed korbe na)
 */

//------------------------------------------------------------------
//* ternary operator

const biyerJonnoEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log("You are eligible");
  //   } else {
  //     console.log("You are not eligible !");
  //   }

  const result = age >= 21 ? "You are eligible" : "You are not eligible !";

  console.log(result);
};

biyerJonnoEligible(25); // output: You are eligible

//------------------------------------------------------------------
//* nullish coalescing

// when the value is undefined or null then it shows the default value , here default value is "Light theme"
const userTheme = undefined;
const selectedTheme = userTheme ?? "Light theme";
console.log(selectedTheme); // output: Light theme

const userTheme1 = "Dark theme";
const selectedTheme1 = userTheme1 ?? "Light theme";
console.log(selectedTheme1); // output: Dark theme

//------------------------------------------------------------------
//* comparison between ternary operator and nullish coalescing

//const isAuthenticated = null;
const isAuthenticated = "yes";

const resultWithTernery = isAuthenticated
  ? isAuthenticated
  : "You are a guest !";
const resultWithNullish = isAuthenticated ?? "You are a guest !";

console.log(resultWithTernery, resultWithNullish);

//------------------------------------------------------------------
//* optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string; //! optional
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};
 
const postalCode = user?.address?.postalCode; // optional chaining
console.log(postalCode);
