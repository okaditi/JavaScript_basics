let a = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(456)
        },4000)
    })
}

// let f = async()=>{
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// }
// f()


//IIFE => as soon this block of code runs the memory saved for b c d will be reset to null hence can be used somewhere else
//it is only used to async await functions 
(async()=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()
