//node v20_mapFilterReduce.js

//map is used to make a new array w the existing array
let arr = [2,4,5,6,7,7]
let a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index
})
console.log(a)
console.log("\n")

//array filter method
let arr2 = [3,5,6,2,1,9]
let new_arr = arr2.filter((a)=>{
    return a>5
})
console.log(new_arr)
console.log("\n")


//Reduce 
let arr3 = arr.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr3)
console.log("\n")