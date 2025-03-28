alert("Enter the value of a!")
let a = prompt("Enter your value here")
alert("You entered the value of a: "+ a)
a = Number.parseInt(a)
alert("Type: "+typeof a)
console.log("Hello ladies!")
function showMessage() {
    alert("Hello from an external file!");
}
let write = confirm("Do you want me to write: ")
if (write){
    document.write("The value of a is : "+a)
}
else{
    document.write("Please let me write to the page?")
}

//alert,prompt,confirm is not used much in js
//modals/module are used 

