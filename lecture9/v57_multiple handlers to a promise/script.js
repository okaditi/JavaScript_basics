let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hey I am not resolved yet")
        resolve(1)
    },2000)
})

p1.then(()=>{
    console.log("Congratulation this promise is now resolved")
})

p1.then(()=>{
    console.log("this is an ex of multiple handlers to a promise")
})

p1.then(()=>{
    alert("Hurray!!!")
})