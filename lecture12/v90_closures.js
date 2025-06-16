message = "Good Global"
function hello1(){
    message = "Good Morning"
    console.log("Hello 1" + message)

    let c = function hello2(){
        console.log("I am c"+message)
    }
    return c
}

c = hello1()
c()