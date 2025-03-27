//node v18_arrManipulation.js

let num = [1,2,3,4,5,6]
console.log("Original array: ",num)
console.log("Length of original array: ",num.length)

//delete => it not a method but an operation 
//on deleting an element, the length remains same just one element gets empty
console.log("deleting element: ",delete num[0])
console.log("new array after element deletion: ",num)
console.log("Length of array after deletion: ",num.length)


//concat => used to add multiple arrays
let n = [7,8,9,10]
console.log("adding two arrays: ",num.concat(n))


//sort => sorts alphabetically 
let natural = [412,2,3,56,2,46,34,9]
console.log("After sorting: ",natural.sort())

//sorting in ascending order
let compare = (a,b)=>{
    return a-b
}
let numbers = [412,2,3,56,2,46,34,9]
numbers.sort(compare)
console.log("sorting in ascending order: ",numbers)


//sorting in descending order
let desc = (a,b)=>{
    return b-a
}
numbers.sort(desc)
console.log("sorting in descending order: ",numbers)

//reverse 
console.log("Reversing: ",num.reverse())

//splice 
//syntax=>
    //arr.slice(start,end,numbers to add)
    //arr.slice(start,end,num1,num2,num3)
console.log("after splicing: ",num.splice(2,4,123,456,789,1234,45678))


//slice
//slices out a piece from an array and creates a new array
console.log("sorting: ",num.slice(3,7))

