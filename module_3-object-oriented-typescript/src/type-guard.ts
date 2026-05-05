//? 3-3 Type guard using "typeof" and "in"

//---------------------------------------------------------
//* "typeof" type guard

type Alphaneumeric = number | string;

const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "number") {
    return Number(num1) + num2;
  } else if (typeof num1 === "number" && typeof num2 === "string") {
    return num1 + Number(num2);
  } else {
    return Number(num1) + Number(num2);
  }
};

console.log(add(2, "2"));


//---------------------------------------------------------
//* "in" type guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "Admin";
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if("role" in user){
        console.log(`Admin name ${user.name} and role: ${user.role}`);
    }
    else{
        console.log("This is normal user: ", user.name);
    }
}

getUserInfo({
    name: "al amin"
})

getUserInfo({
    name: "md. al-amin",
    role:"Admin"
})