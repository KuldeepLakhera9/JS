const user = {
    username: "Kuldeep",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to our website`);
        console.log(this)
    }
    
}
// user.welcomeMessage();

// user.username = "Krishna";
// user.welcomeMessage();

console.log(this);

// function one(){
//     let username = "Alice";
//     console.log(this);
// }
// one()

const chai = ()=> {
    console.log(this);
}

chai();

// const addTwo = (num1,num2) => num1 + num2;

// console.log(addTwo(5,10));

// const addTwo = (num1,num2) => (num1 + num2);

// console.log(addTwo(5,10));

const addTwo = (num1,num2) => ({username : "Kuldeep", price : 999});

console.log(addTwo(5,10));
