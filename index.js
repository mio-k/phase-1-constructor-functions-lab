class Scooter {
    constructor(year, color, model){
        this.year = year;
        this.color = color;
        this.model = model;
    };
};

class Driver {
    constructor(name, age, experience){
        this.name = name;
        this.age = age;
        this.experience = experience;
    };
};
const mio = new Driver("Mio", "80", "a lot");
console.log(mio);

class PickupLocation{
    constructor(address, city){
        this.address = address;
        this.city = city;
    };
};
const ashbyStation = new PickupLocation("6465 San Pablo Ave", "Oakland");
console.log(ashbyStation);