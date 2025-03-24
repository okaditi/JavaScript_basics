// let a = prompt("hey whats your age?") //gives an error
//prompt does not work on js or node js
//equivalent code --->
const readline = require('readline');   //readline is a module used to take input

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Hey, what's your age? ", (input) => {
    let a = (input);   
//   console.log(typeof a);    
    a = Number.parseInt(a) 
//   console.log(typeof a)

    if (a>=18){
        console.log("This is a valid age!",a)
    } else {
        console.log("Under age",a)
    }
    
    console.log("You can",a>=18?"drive":"not drive")

  rl.close();
});


//prompt is used to take input from the user 
//typeof a is string 

//converts a to integer from string



//node v7_conditionalExpressions.js
