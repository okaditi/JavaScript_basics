btn.addEventListner('click',function(e){
    alert("Hello World1!")
})

btn.addEventListner('click',function(e){
    alert("Hello World2!")
})

let a = prompt("What is your favorite number?");
if (a==2){
    btn.removeEventListner('click',function(e){
        alert("Hello World!")
    })
}