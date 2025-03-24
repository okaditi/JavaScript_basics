//node v17_arrayManipulation.js
let num = [1,2,3,4,5]
console.log("Original array: ",num)
console.log("Original type of array: ",typeof num)

//to convert to string 
let b = num.toString()
console.log("converted to string: ",b)
console.log("Type after conversion: ",typeof b)

//to join all elements using a separator 
let c = num.join("^")
console.log("Join operation: ",c)

//pop 
console.log("popped element: ",num.pop())
console.log("new array after popping: ",num)

//push => push returns the new array length and adds new element 
console.log("adding new element '7' to the list and printing the length: ",num.push(7))
console.log("printing the new array w the new pushed value: ",num)

//shift => removes thefirst element and returns it 
console.log("using shift and removing and printing first element of the array: ",num.shift())
console.log("printing the new array after using shift: ",num)

//unshift => adds element to the beginning of the array and returns new array length 
console.log("returns length after using unshift: ",num.unshift(4))
console.log("New array after using unshift: ",num)
