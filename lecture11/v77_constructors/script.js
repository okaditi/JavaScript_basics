
class RailwayForm {
    constructor(name){
        console.log("Constructor called...")
        this.name = name
    }

    submit(){
        alert("form submitted")
    }

    cancel(){
        alert("form cancelled")
    }
}

let harry = new RailwayForm()
let rohan = new RailwayForm()

harry.fill("Harry")
harry.submit()
rohan.submit()
rohan.cancel()