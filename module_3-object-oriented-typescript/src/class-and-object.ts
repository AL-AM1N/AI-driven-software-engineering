//? Object Oriented Programming - class, object and method (normal way)
// ? class, object and method with "parameter property"

/**
 * !Note:
 * Key Advantages of using parameter property:
1. Less code: avoids explicit property declarations and assignments.
2. Cleaner constructor: all initialization happens inline.

*warning*
//!TypeScript "parameter property" is not supported in strip-only mode, so we have to run it from the "dist" file
 */

//------------------------------------------------------------
//* Normal way:

class Animal {
  public name: string;
  public species: string;
  public sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

const dog = new Animal("doggy", "dog", "ghew ghew");

dog.makeSound();
console.log(dog.name, dog.species, dog.sound); //output: doggy dog ghew ghew

// -------------------------------------------------------------
//* class using "parameter property" (same as normal way, but with short syntext)

class Animal1 {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makesound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

const cat = new Animal1("catty", "cat", "mew mew");

cat.makesound();

console.log(
  `Cat name: ${cat.name}, Species: ${cat.species}, Cat Sound: ${cat.sound}`
);
