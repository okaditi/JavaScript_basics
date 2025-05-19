const changeBodyRed = () =>{
    document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First Child of body is:",b.firstChild)
console.log("First Element Child of body is:",b.firstElementChild)