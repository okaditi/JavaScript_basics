let a = {
    name : "Harry",
    language : "Javascript",
    run : ()=>{
        alert("run")
    }
}

console.log(a)

let p = {
    run : ()=>{
        alert("run")
    }
}

p.__proto__ = {
    name2 : "Jackie"
}

a.__proto__ = p
a.run()
a.name2()