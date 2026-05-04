//? Generics with function

//* Normal function:

// const createArrayWithString = (value: string) => {
//     return [value]
// }

// const createArrayWithNumber = (value: number) => {
//     return [value]
// }

// const createArrayWithUserObj = (value: {id: number; name: string;}) => {
//     return [value]
// }

// -----------------------------------------------------------------
//* Generic with function: dynamic function

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("apple");
const arrNumber = createArrayWithGeneric(57);
const arrObject = createArrayWithGeneric({
  id: 123,
  name: "al amin",
});

// -----------------------------------------------------------------
//* function using tuple:

// Normal function
const createArrayWithTuple = (param1: string, param2: string) => {
  return [param1, param2];
};

// function with generic

const crateArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};

const res1 = crateArrayTupleWithGeneric("alamin", false);
const res2 = crateArrayTupleWithGeneric(57, { name: "al amin" });

// --------------------------------------------------------------------

const addStudentToCourse = <T>(studentInfo: T) => {
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
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);
console.log(result);

//output:
/**
 * {
  course: 'level 2',
  id: 321,
  name: 'Jhankar Mahbub',
  hasCar: true,
  isMarried: true
}
 */
