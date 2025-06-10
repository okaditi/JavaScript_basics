// // Syncronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");

// console.log(a," is ",b," years old and has ",c," favorite color.");

// // Asynchronous Programming
// setTimeout(function(){
//     console.log("Hey i am good")
// },3000)
// console.log("End")

//callbacks
function loadScript(src){
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
}

