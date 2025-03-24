const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter your age: ",input => {
    let age = input;
    age = Number.parseInt(age)


    //question 1 
    //to find if entered age is between 10 and 20
    if (age>10 && age<20){
        console.log("Your age is between 10 and 20")
    } else{
        console.log("Your age is not between range 10 and 20")
    }


    //question 2
    // use switch case statement in javascript 
    switch (age){
        case(17):
        console.log("Iam sorry but you cannot drive just yet")
        break
        case(18):
        console.log("You are eligible to drive now!")
        break
        case(19):
        console.log("You must have already been driving since the last year")
        break
        default:
        console.log("i am sorry!,i dont want to make more cases")
        break
    }


    //question 3
    //check if a number is divisible by 2 and 3 
    if (age%2==0 && age%3==0){
        console.log("Age is divisible by both 2 and 3")
    } else{
        console.log("No age is not divible by both 2 and 3")
    }



    //question 4
    //check if a number is divible by 2 or 3
    if (age%2==0 || age%3==0){
        console.log("Age is divisible by either 2 or 3")
    } else{
        console.log("No age is not divible by euther 2 or 3")
    }



    //question 5
    //print "You can drive" or "You cannot drive" based on age being greather than 18 using ternary operator
    console.log("You can",age>=18?"drive":"not drive")

    r1.close()
});

//node v8_practiceSet.js
