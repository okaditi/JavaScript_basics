let key = prompt("Enter key: ")
let value = prompt("Enter value: ")

localStorage.setItem(key,value)
console.log(localStorage.getItem(key))

if (key = "red"){
    localStorage.removeItem(key)
}

if (key == 0){
    localStorage.clear()
}

localStorage.length()
localStorage.key(1)
localStorage.key(2)

//both keys and values are saved as string in local storage