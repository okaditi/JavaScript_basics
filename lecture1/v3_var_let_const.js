// const let and var in js
console.log("JavaScript tutorial 3: var, let and const")
var a = 45;
var b = "Harry";
var c = null
{
    var b = "This";   //this works like a global variable ,outside the loop as well
     let e = "This";  //this works like a local variable ,only inside the loop
     console.log(b)
     console.log(e)
}
var d = undefined 
console.log(d)
// console.log(e) --> this gives error and shows the variable is not defined 

const user = "aditi";  //this value cannot be changed 

// use const max then let and dont use var