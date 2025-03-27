// //node v21_practiceSet.js
// let arr1 = [1,2,3,4,5]

// // //question1 
// // //create an array of numbers and take input from the user to add numbers to this array 
// const readline = require("readline");
// // const r1 = readline.createInterface({
// //     input:process.stdin,
// //     output:process.stdout
// // });

// // r1.question("Enter array elements separated by space: ",input=>{
// //     arr2 = input.trim().split(" ").map(Number);
// //     console.log("your array is: ",arr2);
// //     let arr = arr1.concat(arr2)
// //     console.log(arr)
// //     r1.close();
// // });



// //question2 
// //keep adding numbers until the new number added is 0
// const r2 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// let arr3=[];
// function askForNumber(){
//     r2.question("Enter element: ",(input)=>{
//         if (input==='0'){
//             console.log("Your array: ",arr3);
//             console.log(arr1.concat(arr3))
//             r2.close();
//         } else{
//             const number = parseInt(input);
//             arr3.push(number);
//             askForNumber();
//         } 
//     });
// }
// askForNumber();


//question3 
//filter for numbers divisible by 10 
let arr = [1,4,6,7,8,9,10,20,40,3]
let new_arr = arr.filter((a)=>{
    return a%10==0;
})
console.log(new_arr)


//question4 
//create an array of square of given numbers
let arr1 = [1,2,3,4,5]
let arr2= []
for (let i =0; i<arr1.length;i++){
    arr2.push(arr[i]*arr[i])
}
console.log(arr2)

