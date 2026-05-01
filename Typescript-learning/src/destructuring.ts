//? Destructuring in typescript

// --------------------------------------------------------------
//* object destructuring

const user = {
    id: 123,
    name: {
        firstName: "md",
        lastName: "al-amin"
    },
    gender: "male",
    favouriteColor: "black"
}

const myFavouriteColor = user.favouriteColor; //! without destructuring
const myFirstName = user.name.firstName; //! without destructuring  


// with destructuring:
const { id, name: {lastName}, gender, favouriteColor: myColor } = user;

console.log(lastName,": My favourite color is", myColor);


// -------------------------------------------------------------------
//* array destructuring

const friends = ["rohim", "karim", "jabbar", "shofiq"];

const [ , secondFriend ] = friends;  // const [ firstFriend, secondFriend, thirdFriend, fourthFriend ] = friends;

console.log(secondFriend); // output: karim