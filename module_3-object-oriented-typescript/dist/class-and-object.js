"use strict";
//? Object Oriented Programming - class, object and method (normal way)
// ? class, object and method with "parameter property"
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * !Note:
 * Key Advantages of using parameter property:
1. Less code: avoids explicit property declarations and assignments.
2. Cleaner constructor: all initialization happens inline.
 */
//------------------------------------------------------------
//* Normal way:
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
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
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makesound() {
        console.log(`${this.name} is making sound: ${this.sound}`);
    }
}
const cat = new Animal1("catty", "cat", "mew mew");
cat.makesound();
console.log(`Cat name: ${cat.name}, Species: ${cat.species}, Cat Sound: ${cat.sound}`);
//# sourceMappingURL=class-and-object.js.map