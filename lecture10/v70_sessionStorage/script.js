//it is hardly used 
//local storage is mostly used 

//properties and methods are same but sesson storage exists only within the current browser tab. another tab with same page will have a diff session storage

window.onstorage = (e) =>{
    alert("changed")
    console.log(e)
}