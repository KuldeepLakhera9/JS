const name = "Kuldeep";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Kuldeep");

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log("Length=",gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-2, 4);
console.log(anotherString);
