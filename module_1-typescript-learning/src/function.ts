//? Function in typescript

//-------------------------------------------------------------
//* Normal function

function normalFuntion(num1: number, num2: number): number {
  return num1 + num2;
}

// -------------------------------------------------------------
//* Arrow function

const arrowFunction = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(arrowFunction(5, 6));

// --------------------------------------------------------------
//* Object method: when we use a function into an object

const poorUser = {
  name: "al amin",
  balance: 0,
  addBalance(amount: number): number {
    const totalBalance = this.balance + amount;
    return totalBalance;
  },
};

poorUser.addBalance(100000);

// -----------------------------------------------------------------
//* map function in array

const arr: number[] = [2, 4, 5];

const sqrArray = arr.map((element: number): number => {
    return element*element;
});

console.log(sqrArray);
