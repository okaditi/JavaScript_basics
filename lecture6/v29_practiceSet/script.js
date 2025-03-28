//question1 
//ask for age and print the eligibilty to drive

//question2
//confirm if the user wants to see the prompt again

//question3
//use console.error to show invalid age (-ve)

function check(){
    let age = prompt("Enter your age: ")
    if (age>=18){
        alert("You are eligible to drive")
    } else if (age<0){
        console.error("Age entered invalid")
    } else{
        alert("You cant drive")
    }
}

check()

let answer = confirm("Do you want to see the prompt again?")
if (answer){
    check()
} else{
    console.log("Ok") 
}


//wap to change the url to google.com if user enters a num greater than 4

let num = prompt("Enter a number: ")
if (num>4){
    window.location.href = "https://www.google.com";
}

//change the background to color of user's choice 
let color = prompt("Enter the color you want to set for the page: ")
document.body.style.background = color







