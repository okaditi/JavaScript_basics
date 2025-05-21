//change the card title to red 
// let a = document.getElementsByClassName('card-title')[0]
// a.style.color = "red"

let b = document.getElementById('changing-color')
b.style.color = "blue"

let t = document.querySelectorAll(".card-title")
console.log(t)
t[0].style.color = "violet"
t[1].style.color = "grey"
t[2].style.color = "maroon"

document.querySelector(".this").style.color = "beige"
document.querySelector(".this").style.background = "maroon"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))