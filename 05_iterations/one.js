// for 

for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
    }
}