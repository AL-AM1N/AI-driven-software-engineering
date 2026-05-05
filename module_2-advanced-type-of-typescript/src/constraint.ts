//? constraint: apply strict rules on generics

/**
 * !Note:
 * In TypeScript generics, extends is used to constrain a generic type.

<T extends Student> means:
--“T can be any type, as long as it has all the properties of Student.”
--This prevents passing objects that are missing required fields like id, name, dateOfBirth, or class.
--It still allows T to have extra properties, but it must include at least what Student defines.

//?--T jekono properties hote pare problem nai, but Student er property gula must thakte hobe

 */


type Student = {
  id: number;
  name: string;
  dateOfBirth: string;
  class: number;
};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "level 2",
    ...studentInfo,
  };
};


const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};


const student2 = {
  id: 444,
  name: "Abdur Rakib",
  hasWatch: true,
  dateOfBirth: "20-20-2020",
  class: 1,
};

const result = addStudentToCourse(student2) // ❌ the student 1 is incomplete

const result1 = addStudentToCourse(student2) // ✅ Valid, because it fill-up all the requirements