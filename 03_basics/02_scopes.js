let a = 10;
const b = 20;
var c = 40;

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Kuldeep"
    
    function two(){
        const website = "Youtube";
        console.log(username);
        
    }
    // console.log(website);
    // two();
}

one();

if(true){
    const username = "Kuldeep";
    if(username === "Kuldeep"){
        const website = " Youtube";
        //console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ********************* Intersting **************************

addOne(5);
console.log(addOne(5));

function addOne(num){
    return num + 1;
}

const addTwo = function(num){
    return num + 2;
}


addTwo(5);
console.log(addTwo(5));


// ++++++++++++++++++++++++++++++++ 


console.log(addThree(5));

const addThree = function(num){
    return num + 3;
}
