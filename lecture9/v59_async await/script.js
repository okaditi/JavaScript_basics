// async/await
// there is a special syntax to work withpromises in js

// an async function always returns a Promise. 
// other values are wrapped in a promise automatically

async function harry() {
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },1000)
    })

    let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },2000)
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)

    console.log("Fetching Delhi Weather...")
    let delhiW = await delhiWeather
    console.log("Fetching Bangalore Weather...")
    let bangaloreW = await bangaloreWeather
    console.log("Returning Value=>")
    return [delhiW,bangaloreW]
}

console.log("Welcome to weather control room")
harry()