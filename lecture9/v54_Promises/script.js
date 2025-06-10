let promise = new Promise(function(resolve, reject){
    console.log("Promise")
    resolve(56)
})

console.log("Hello")
setTimeout(function(){
    console.log("Hello after 2 seconds")
},2000)
console.log("My name is Aditi")

console.log(promise)

//fetch google.com homepage => console.log("Google.com homepage done")
//fetch data from the data api
//fetch pictures from the server
//print downloading...

//promise is used for parallel execution so the thread does not stop for one work to be completed before mooving onto the next.