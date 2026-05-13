// Primitive

// 7 Types -> String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmaik;

// Reference  (NonPrimitive)

// Arrays, Objects, Functions

const heros = ["Spiderman", "Ironman", "Thor"];

let myObj = {
  name: "Kuldeep",
  age: 21,
};

const myFunction = function () {
  console.log("Hello World");
};


//**************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Kuldeep Lakhera";

let anotherName = myName;

anotherName = "Kuldeep";

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kuldeep@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);