
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
        this.name=0
    }
}