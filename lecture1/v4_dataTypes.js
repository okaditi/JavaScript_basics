// primitive data type (built in)
// null 
// Number
// Symbol
// String
// Boolean
// BigInt
// undefined

let a = null;
let b = 23;
let c = true; 
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("Iam a symbol")
let g = undefined // if you remove = undefined from the code it will still remain undefined and print the same output
console.log(a,b,c,d,e,f,g)
console.log(typeof d)
console.log(typeof c)

//objects - are non primitve data types
const item = {
    "Harry": true,
    "Aditi": false,
    "Lovish": 65,
    "Rohan": undefined
}
console.log(item["Harry"])
console.log(item["Aditya"]) //value prints as undefined 