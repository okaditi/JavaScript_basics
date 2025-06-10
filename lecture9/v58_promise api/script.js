//PROMISE API
// THERE ARE 6 STATIC METHODS OF PROMISE CLASS:

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 1")
    },1000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 2")
    },2000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 3")
    },3000)
})

//1. Promise.all (promises) => waits for all promises to resolve and return . if any one fail, it becomes and error and all other results are ignored

// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })



//2. Promise.allSettled(promises)=> Writes for all the promises to settle and returns their results as an array of objects with status and value

// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })



//3.Promise.race(promises)=> waits for the first promise to settle and its result/error becomes the outcome

// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })



//4. Promise.any(promises)=> waits for the first promise to fulfill and its result becomes the outcome. throws aggregateError if all the promises are rejected
// let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })



//5. Promise.resolve(value)=> makes a resolved promise with the given value
// let promise_all = Promise.resolve(6)
// promise_all.then((value)=>{
//     console.log(value)
// })

//6. Promise.reject(error)=>makes a rejected promise with the give error
// let promise_all = Promise.reject(new Error("Nah"))
// promise_all.then((value)=>{
//     console.log(value)
// })

