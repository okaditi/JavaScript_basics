for (let i=1; i<6; i++){
    console.log(i)
}
console.log("\n")

//program to add first n natutral numbers 
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



let obj = {
    aditi : 90,
    anvesh : 95,
    paarth : 97,
    jeremy : 70,
    ishita : 99
}

for (let a in obj){
    console.log(a,":",obj[a])
}

console.log("\n")

//this wont worry as obj is not iterable
//GIVES ERROR 
// for (let b of obj){
//     console.log(b)
// }


// prints the characters of the string 
//in other words the values or elements of the given obj type
for (let b of "Harry"){
    console.log(b)           
}
console.log("\n")



//prints the index of each character/element of the given obj type
for (let c in "Harry"){
    console.log(c)
}

console.log("\n")




//as we use var in the loop the to create variable d for iteration, it will get globally defined and we can print the value of d even outside the loop

//whereas in let the iteration variable has only value for the loop it is taken in and hence the variables can be reused in other loops as well 
let s = 0
for (var d=0; d<11; d++){
    s += d
}
console.log(d)
console.log(s)
console.log("\n")




//user input and printing sum will n integer!!!
r1.question("Enter the number till which you want to find sum: ",(input)=>{
    let n = input;
    n = Number.parseInt(n)
    let sum = 0
    for (let i=0; i<n+1; i++){
        sum += i
    }
    console.log(sum)

    r1.close()
})


//node v9_forLoop.js