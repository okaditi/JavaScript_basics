const loadScript = async(src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script")
        script.src = src
        script.onload = ()=>{
            resolve(src)
        }
        document.head.append(script)
    })
}


//Problem number 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
// a.then(value=>{
//     console.log(value)
// })


//Problem number 2
// const main1 = async()=>{
//     let a = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
//     console.log(a)
// }
// main1()


//Problem number 3
// let p =()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("Promise Being Rejected"))
//         },3000)
//     })
// }

// let a = async function check() {
//     try{
//         let c = await p()
//         console.log(c)
//     } catch(err){
//         console.log("This error is handled")
//     }
// }
// a()


//Problem number 4
let p1 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        },2000)
    })
}
let p2 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
    })
}
let p3 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
    })
}

const run =async()=>{
    // let a1 = await p1()
    // let a2 = await p2()
    // let a3 = await p3()
    // console.log(a1,a2,a3)

    let a1 =  p1()
    let a2 =  p2()
    let a3 =  p3()
    let b = await Promise.all([a1,a2,a3])
    console.log(b)
    console.timeEnd("run")
}
run()
