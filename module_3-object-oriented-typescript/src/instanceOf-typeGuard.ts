//? Type guard using instance of

/**
 * !Note: instance of type guard means narrowing the type
 */

//-------------------------------------------------------------
//* parent class (Person) with two childs (Student and Teacher)

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta ghumai`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta study kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta class ney`);
  }
}

//-----------------------------------------------------------
//* using "instanceof" type guard

// Arrow function that takes an instance
const getUserInfo = (user: Person) => {
  if (user instanceof Student) {
    user.doStudy(10);
  } else if (user instanceof Teacher) {
    user.takeClass(8);
  } else {
    user.getSleep(6);
  }
};

const student1 = new Student("al amin");
const teacher1 = new Teacher("md amin");
const person1 = new Person("mr. person");

getUserInfo(teacher1);

//-----------------------------------------------------------
//* using "function" and "instanceof" guard

const isStudent = (user: Person) => {
    return user instanceof Student; // user is Student
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher; // user is Teacher 
}

const getUserInfo1 = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(8);
  } else {
    user.getSleep(6);
  }
};

const student2 = new Student("Mr. student");
const teacher2 = new Teacher("Mr. teacher");
const person2 = new Person("Mr. Person");

getUserInfo(person2);