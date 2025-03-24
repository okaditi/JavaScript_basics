//node v11_functions.js

let a = 1;
let b = 2;
let c = 3;
// console.log("Sum of a+b: ", a+b)
// console.log("Done")
// console.log("Sum of b+c: ", b+c)
// console.log("Done")
// console.log("Sum of a+C: ", a+c)
// console.log("Done")

function sumofnumbers(x,y){
    console.log("Done")
    return x+y
}

console.log("Sum of a+b: ", sumofnumbers(a,b))
console.log("Sum of b+c: ", sumofnumbers(b,c))
console.log("Sum of a+c: ", sumofnumbers(a,c))