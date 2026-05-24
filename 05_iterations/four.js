const myObject = {
    name: "John",
    age: 30,
    city: "New York"
}

for (const key in myObject) {
    console.log(`${key} -> ${myObject[key]}`);
}

const coding = ["js", "python", "ruby", "java", "cpp"]

for (const key in coding) {
    console.log(`${key} -> ${coding[key]}`);
}