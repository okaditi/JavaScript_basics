class Employee{
    login(){
        console.log("Employee has logged in")
    }
    logout(){
        console.log("Employe has logged out")
    }
    leave(){
        console.log("No of leaves approved: ",leaves)
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log("Employee requested coffee")
    }
    leave(){
        super.leave(4)
    }   
}

let e = new Programmer()
e.login()