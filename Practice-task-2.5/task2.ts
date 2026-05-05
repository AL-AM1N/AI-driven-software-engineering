//? Merging User Profiles

/**
 * input:
 * Instructions:
Create a new type Employee that combines Person and JobDetails.
Write a function getProfile that accepts an Employee.
Return a string: "Name: [name], Role: [role]".
 */

type Person = {
    name: string;
    age: number;
}

type JobDetails = {
    role: string;
    salary: number;
} 

type Employee = Person & JobDetails;

const getProfile = ( emp: Employee ) => {
    return `Name: ${emp.name}, Role: ${emp.role}`;
}

