const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Kuldeep"
tinderUser.email = "kuldeep@gmail.com"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "kuldeep@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Kuldeep",
            lastname: "Lakhera"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}

console.log(obj5);

const users = [
    {
        id: 1,
        email: "kuldeep@gmail.com"
    },
    {
        id: 2,
        email: "kuldeep@gmail.com"
    },
    {
        id: 3,
        email: "kuldeep@gmail.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));