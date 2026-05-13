// Problem 1:

const filterEvenNumbers = (array: number[]): number[] => {
  return array.filter((arr) => arr % 2 === 0);
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//----------------------------------------------------------------------
// Problem 2:

const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

console.log(reverseString("typescript"));

//-------------------------------------------------------------------------
// Problem 3:

type StringOrNumber = number | string;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }
};

console.log(checkType("Hello"));

//----------------------------------------------------------------------------
// Problem 4:

const getProperty = <T, X extends keyof T>(obj: T, key: X) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

//-----------------------------------------------------------------------------
// Problem 5:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface IsRead extends Book {
  isRead: boolean;
}

const toggleReadStatus = (obj: Book): IsRead => {
  return {
    ...obj,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));

//---------------------------------------------------------------------------------
// Problem 6:

class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

//-------------------------------------------------------------------------
// Problem 7:

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};

console.log(getIntersection([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7]));
