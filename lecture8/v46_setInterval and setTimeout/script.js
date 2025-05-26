document.write("Hello")

const sum = (a,b) => {
    console.log("Yes i m running",a+b)
    a+b
}

setTimeout(sum,5000,1,2)

// setInterval(function(){
//     alert("SetInterval")
// },3000)

// let a = setTimeout(function(){   
//     alert("This is set timeout")
// },2000) //time is in ms

// let b = prompt("Do you want to run the settimeout?")
// if ("n" == b){
//     clearTimeout(a)
// }


// clearInterval(time) => will stop showing the alert after this time


// console.log(a) //a stores time id
