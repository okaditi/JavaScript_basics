class RailwayForm {
    submit(){
        alert("form submitted")
    }

    cancel(){
        alert("form cancelled")
    }

    fill(name){
        this.name = name
    }
}

let harry = new RailwayForm()
let rohan = new RailwayForm()

harry.fill("Harry")
harry.submit()
rohan.submit()
rohan.cancel()