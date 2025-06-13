// wrapping it in an async function
const createTodo = async ()=>{
    let options = {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            title: 'Aditi',
            body: 'Singh',
            userId: 1000,
        }),
    }

    let p =await fetch('https://jsonplaceholder.typicode.com/posts',options)
    let response = await p.json()
    return response 
}

const mainFunc = async()=>{
    let todo = await createTodo()
    console.log(todo)
}

mainFunc()

// fetch('https://jsonplaceholder.typicode.com/posts',options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));