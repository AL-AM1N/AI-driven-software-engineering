//? 3-7 Static in typescript

/**
 * !Note: static use kore amra 1 ta class er static property r jonno 1 tai memory allocation korteci
 */

//----------------------------------------------------------
//* without using "static": normal way

class Counter{
    counter: number = 0;

    increment(){
        return this.counter = this.counter + 1;
    }

    decrement() {
        return this.counter = this.counter - 1;
    }
}

const instance1 = new Counter();
console.log(instance1.increment()); // output: 1
console.log(instance1.increment()); // output: 2
console.log(instance1.increment()); // output: 3

const instance2 = new Counter();
console.log(instance2.increment()); // output: 1
console.log(instance2.increment()); // output: 2

/**
 * explanation: jokhon amra alada alada instance create korteci tokhon Counter class alada alada memory allocation kortece, tai value gulaw independantly output dicche
 */

//---------------------------------------------------------------
//* with using "static" property

class Counter1 {
    static counter: number = 0; // static property

    increment(){
        return (Counter1.counter = Counter1.counter + 1 );
    }

    decrement(){
        return (Counter1.counter = Counter1.counter - 1);
    }

}


const instance3 = new Counter1();
console.log(instance3.increment()); // output: 1
console.log(instance3.increment()); // output: 2 
console.log(instance3.increment()); // output: 3

const instance4 = new Counter1();
console.log(instance4.increment()); // output: 4
console.log(instance4.increment()); // output: 5


//---------------------------------------------------------------
//* with using "static" property and method

class Counter2 {
    static counter: number = 0; // static property

    static increment(){
        return (Counter2.counter = Counter2.counter + 1 );
    }

    static decrement(){
        return (Counter2.counter = Counter2.counter - 1);
    }

}

// jokhon methos a amra static use kori tokhon r instance create kora lage na, direct call kora jay

console.log(Counter2.increment()); // output: 1
console.log(Counter2.increment()); // output: 2
console.log(Counter2.increment()); // output: 3
console.log(Counter2.increment()); // output: 4
console.log(Counter2.increment()); // output: 5