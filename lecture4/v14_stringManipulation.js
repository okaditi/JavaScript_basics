//node v14_stringManipulation.js

// string manipulation methods-
//variable.length
//variable.toUpperCase()
//variable.toLowerCase()
//variable.slice(start,end)
//variable.replace(to_replace,with)
//variable.trim() =>removes white space
//variable1.concat("sentence",variable2)


let name = "Aditi"
let author = "Aditi\n"
let friend = "Aditya"


//as there is an escape sequence character the total length will be length of string +1 so in this example => 6


console.log("Length w backslash chracter: ",author.length);
console.log("Length w/o backslash chracter: ",name.length);
console.log("Upper case: ",name.toUpperCase());
console.log("Lower case: ",name.toLowerCase());
console.log("Slicing: ",name.slice(1,3));
console.log("Replacing ti with tya and making name aditya: ",name.replace("ti","tya"));
console.log("Removing whitespaces: ",name.trim());
console.log(name.concat(" is a friend of ",friend,"and Ishita"));

