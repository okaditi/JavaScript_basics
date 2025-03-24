//node v12_practiceSet.js

const obj = {
    aditi: 90,
    anvesh: 95,
    jeremy: 80,
    ishita: 99,
    paarth: 97
}

//question 1
//print the keys and values using for loop
for (let i=0; i<Object.keys(obj).length; i++){
    console.log(Object.keys(obj)[i],":",obj[Object.keys(obj)[i]])
}
console.log("\n")



//question 2
//print the keys and values using for in loop
for (let i in obj){
    console.log(i,":",obj[i])
}console.log("\n")



//question 4
//write a function to find the sum of five numbers 

function sumOfFiveNumbers(a,b,c,d,e){
    console.log("Sum of five numbers are: ")
    return a+b+c+d+e;
}
const sum = sumOfFiveNumbers(1,2,3,4,5);
console.log(sum)



//question 3
//print try again till the values match
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const pass = 1234
function pin(){
    r1.question("Enter the PIN: ",input=>{
        if (input==pass){
            console.log("Correct Pin");
           r1.close();
        } else{
          console.log("Try Again");
          pin();
        }
    });
}

pin();
