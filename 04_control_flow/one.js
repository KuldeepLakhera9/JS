// if(2 == 2){
//     console.log("Executed");
// }

// if(2 === 2){
//     console.log("Executed");
// }

// const score = 200;
// if(score){
//     console.log("Executed");
// }

// const balance = -1000;
// if(balance){
//     console.log("Executed");
// }

// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // Error (const is block scope)

// const balance = 1000;
// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1000");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allowed to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}