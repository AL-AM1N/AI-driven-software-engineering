//? Spread (...) and Rest (...) operator

// --------------------------------------------------------------------
//* spread operator: ak shathe thaka element guloke choray dey

// spread operator for array

const friends = ["rahim", "karim"];
const schoolFriends = ["jobbar", "sakib"];
const collegeFriends = ["jullu", "shofiq"];

friends.push(...schoolFriends, ...collegeFriends); // eikhane ak shathe thaka schoolFriends and collegeFriends guloke alada kore then 1 ta 1ta kore push koreche

//friends.push(...collegeFriends);

console.log(friends); // output: [ 'rahim', 'karim', 'jobbar', 'sakib', 'jullu', 'shofiq' ]

// ----------------------------------------

// spread operator for object

const user = {
  name: "al amin",
  phoneNo: "0152144",
};

const otherInfo = {
  hobby: "outing",
  favColor: "black",
};

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);
/**
 * output: 
 * {
  name: 'al amin',
  phoneNo: '0152144',
  hobby: 'outing',
  favColor: 'black'
} 
 */

// -------------------------------------------------------------
//* rest operator: choriye thaka element guloke ak shathe kore [jemon array]

const sendInvite = (...friends: string[]) => {

    console.log(friends); // output: [ 'rohim', 'karim', 'jobbar', 'shofiq' ]

  friends.forEach((friend: string) => {
    console.log(`Sent invitation to ${friend}`);
  });
};

sendInvite("rohim", "karim", "jobbar", "shofiq");

//! explanation: sendInvite function a amra array dei nai but "rest operator (...friends)" use kore amra alada alada element k array te convert kore tar upor forEach loop use korechi. 