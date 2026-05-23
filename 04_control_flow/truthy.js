const userEmail = "kuldeep@gmail.com";

if(userEmail){
    console.log("Got user email");
}

// const userEmail = [];

// if(userEmail){
//     console.log("Got user email");
// }

//falsy values: false, 0, -0, BigInt(0), "", null, undefined, NaN

//truthy values: "0", "false", " ", [], {}, function() {}

const userEmail1 = "";
if (userEmail.length === 0) {
    console.log("Got user email");
}

//nullish coalescing operator (??): null undefined

let val1 = null ?? 10;
console.log(val1);

//terniary operator(?)

const age = 25;

age >= 18 ? console.log("allowed") : console.log("not allowed");


