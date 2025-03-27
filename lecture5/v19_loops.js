//node v19_loops.js

let num = [3,4,5,6,7]
for (let i=0; i<num.length; i++){
    console.log(num[i])
}


//forEach loop is used to run the code or each element
num.forEach((element)=>{
    console.log(element*element)
})

//Array.from
let name = "Aditi"
let arr = Array.from(name)
console.log(arr)

//for ...of (prints value of element)
for(let i of num){
    console.log(i)
}

//for... in (printes index)
for (let i in num){
    console.log(i)
}



