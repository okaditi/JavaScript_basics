//node v16_array.js

//syntax
let a = [1,2,3,4]
let marks = [98,99,30,89,null,"Absent"]

//to print
console.log(marks)

//to print using indexing 
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])

//if it is out of index "undefined" will get printed
console.log(marks[6])

//to print length of an array
console.log(marks.length)

//adding new value to the array 
marks[6]=88
console.log(marks[6])
console.log(marks.length)

//changing the existing value
marks[0]=96
console.log(marks)

//type of array =>object 
console.log(typeof marks)

//print the elements of an array using for loop
for (let i=0; i<(marks.length);i++){
    console.log(marks[i])
}
