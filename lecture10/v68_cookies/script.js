console.log(document.cookie)
document.cookie = "name = aditi1234"
document.cookie = "name = aditi"  //replaces the above cookie value for name
document.cookie = "name2 = aditisingh1234" // adds a new cookie by "name2"
console.log(document.cookie)

//cookies are key value pairs that are saved on any site

//to print all the cookies of a website you have to run the command "console.log(document.cookie)"

let key = prompt("Enter your key: ")
let value = prompt("Enter your value: ")
document.cookie = `${encodeURIComponent(key)}= ${encodeURIComponent(value)}`