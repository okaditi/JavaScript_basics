let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        //console.log("I am a promise and I am resolved")
        resolve(true)
    },5000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        //console.log("I am a promise and I am rejected")
        reject(new Error("I'm an error"))
    },5000)
})

p1.then((value)=>{
    console.log(value)
})

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})

// p2.catch((error)=>{
//     console.log("some error occured in p2")
// })