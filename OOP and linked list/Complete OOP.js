class car{
    constructor(name,tier)
    {
        this.name = name;
        this.tier = tier;
    }
    aboutCar()
    {
        return `this car name is ${this.name} and have ${this.tier} tier`;
    }
}
const ferari = new car('Ferari',3);
console.log(ferari);
console.log(car.prototype);
console.log(ferari.__proto__);
console.log(car.prototype === ferari.__proto__);