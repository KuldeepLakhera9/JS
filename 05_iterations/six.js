const coding = ["js", "python", "ruby", "java", "cpp"]

const val = coding.forEach(function (num) {
    console.log(num);
})
console.log(val);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const val = myNums.filter( (num) => { 
    return num > 4
} )
console.log(val);
