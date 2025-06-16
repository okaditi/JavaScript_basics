// let arr = [3,5,8]
// let [a,b,c] = arr
// console.log(a,b,c)


// let arr = [3,5,8,9,10,11,12,13,14]
// let [a,b,c,...rest] = arr
// console.log(a,b,c,rest)  //prints the rest

let arr = [3,5,8,9,10,11,12,13,14]
let [a,,,...rest] = arr
console.log(a,rest)  //gives a = 3 and skips 5,8 and the left value will be printed as their value goes into rest

//spread operator
let array = [3,5,8,9,10]
let obj = {...array}
console.log(obj)
//this gets converted into key-value pairs 
//console saves value 0:3 1:5 2:8 3:9 4:10 like this

function sum(v1,v2,v3,v4,v5){
    return v1 + v2 + v3 +v4 +v5
}
console.log(sum(...array))

let object = {
    name : "Harry",
    company : "Birla",
    address : "A-45"
}

console.log({...object,name:"Atul"}) //changes the name from harry to atul