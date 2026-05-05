//? Union & intersection types

//! literal type =  literal type is a type that represents a specific exact value, not just a general category of values.

// ---------------------------------------------------------
//* union ("|")

type UserRole = "admin" | "user"; //! here "admin" or "user" is a literal type

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard.";
  } else if (role === "user") {
    return "User Dashboard.";
  } else {
    return "Guest Dashboard";
  }
};

getDashboard("user");

// --------------------------------------------------------------
//* intersection ("&")

type Employee = {
  id: number;
  name: string;
  phoneNo: string;
};

type Manager = {
  designatino: string;
  teamSize: number;
};

//intersection of two (Employee and Manager)  type alias using "&"
type EmployeeManager = Employee & Manager;

const amin: EmployeeManager = {
    id: 123,
    name: "al amin",
    phoneNo: "01254",
    designatino: "manager",
    teamSize: 50
}