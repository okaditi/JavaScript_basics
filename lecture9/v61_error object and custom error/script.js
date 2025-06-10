try{
    console.log(harry)
    throw new ReferenceError("harry is not good")
}catch(error){
    console.log(error.name) // what type of error (here referenceError)
    console.log(error.message)
    console.log(error.stack)
}