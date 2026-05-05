//? 3-2 Inheritance, the 1st Pillar of OOP

/**
 * !Note: inheritance holo babar property chele pawa
 * 
 * 2nd piller: Polymorphism
 * 3rd piller: abstraction
 * 4th piller: Encapsulation
 */

//-------------------------------------------------------------
class ParentClass {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHour: number){
    console.log(`${this.name} ${numOfHour} ghonta ghumay.`);
  }
}

class ChildClass extends ParentClass{

}

class AnotherChildClass extends ParentClass{

    designation: string; // this is AnotherChildClass's own property

    constructor(name: string, age: number, address: string, designation: string){

        super(name, age, address);
        this.designation = designation;
    }

    // this is AnotherChildClass's own method
    takeClass(numOfClass: number){
        console.log(`${this.name} ${numOfClass} ghonta class ney`);
    }
}


/**
 *! explanation: 
 "extends" mane parent er shob kichu child peye jabe


 * 1. jokhon parent class er same to same child class banabo (jemon eikhane ChildClass) tokhon amader constructor , ba onno kichu likhte hobe na, typescript automatically sheta define kore dey, er jonno child class faka
 * 
 * 2. jokhon kono class er own property (jemon designation in AnotherChildClass) thakbe tokhon amader constructor er moddhe shobar first a "super()" likhte hobe, ebong parent class er j j property amra use korbo shegula amader define kore dite hobe constructor er moddhe, tar pore own propertyr jinish gulo define korte hobe
 */

 const teacher1 = new AnotherChildClass("al amin", 25, "saudi colony", "Job holder (intern)");

 teacher1.getSleep(6);

 console.log("Though we are using AnotherChildClass but we can access all the property of parents: ", teacher1.name, teacher1.age, teacher1.address, teacher1.designation);


teacher1.takeClass(8);



const student = new ChildClass("amin", 24, "cantonment");
student.getSleep(5);
console.log(student.name, student.age, student.address);