//node v18_arrManipulation.js

let num = [1,2,3,4,5,6]
console.log("Original array: ",num)
console.log("Length of original array: ",num.length)

//delete => it not a method but an operation 
//on deleting an element, the length remains same just one element gets empty
console.log("deleting element: ",delete num[0])
console.log("new array after element deletion: ",num)
console.log("Length of array after deletion: ",num.length)
