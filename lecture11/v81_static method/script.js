class Animal{
    constructor(name){
        this.name = Animal.capitalize(name)
    }

    walk(){
        alert("Animal ",(this.name)," is walking")
    }

    capitalize(name){
        return name.charAt(0).toUpperCase()+name.substr(1,name.lenght)
    }
}

j = new Animal("jack")
j.walk()