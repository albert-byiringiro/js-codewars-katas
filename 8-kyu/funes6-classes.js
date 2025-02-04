class Dog {
    constructor(name, age, gender, species, size, master, loyal) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = species;
        this.legs = 4;
        this.size = size;
        this.master = master;
        this.loyal = loyal;
    }
}

class Labrador extends Dog {
    constructor(name, age, gender, master) {
        super(name, age, gender, master)
        this.species = "Labrador";
        this.size = "Large";
        this.master = master;
        this.loyal = true;
    }
}

const spitsy = new Labrador("Spitsy", 10, "Male", "Donald");

console.log(spitsy)