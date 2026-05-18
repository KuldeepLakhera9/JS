function sayMyName(){
    console.log("K");
    console.log("U");
    console.log("L");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}
sayMyName()

function add(num1, num2){
    console.log(num1 + num2)
}

add(9,4)
add(3,"4")
add(3,"a")
add(3,null)

function loginUserMassage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMassage())
