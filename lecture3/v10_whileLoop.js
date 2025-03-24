//node v10_whileLoop.js

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter value of n: ",input=>{
    let n = input;
    n = Number.parseInt(n)
    
    
    let i = 0
    //while loop 
    while (i<n){
        console.log(i+1)
        i++;
    }
    console.log("\n")



    //do-while loop 
    //it is a variant of while loop
    let a = 0
    do{
        console.log(a+1)
        a++;
    } while(a<n)
    r1.close()
});