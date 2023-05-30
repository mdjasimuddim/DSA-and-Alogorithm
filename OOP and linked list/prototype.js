// const arr = [2, 3, 5, 6, 7];
// const evenNumber = arr.filter(element => element % 2 === 0);
// console.log(Array.prototype);
// console.log(evenNumber);


const Computer = function(name, brand){
    this.name = name;
    this.brand = brand;
}
Computer.prototype.aboutComputer  = function()
{
    console.log(`${this.name} is a new computer and this brand is ${this.brand}`);
}
Computer.sayAboutComputer = function()
{
    console.log('this is computer');
}
const dell = new Computer('dell', 'corev4');
console.log(dell);
dell.aboutComputer();
Computer.sayAboutComputer();


// Array.prototype.filter = function(){
//     let arr = [];
//     for(let i = 0; i < this.length; i++){
//         if(this[i] % 2 === 0) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }
// console.log([2,3,4,5,7].filter());

// let arr = [2,3,5];
// let obj = {
//     name:'Code abc'
// }
// console.log(obj);
// console.log(Object());
// console.log(arr);
// console.log(new Array())

const HouseRent = function(ammount)
{
    this.ammount = ammount;
}


HouseRent.prototype.increaseRentByYearly = function()
{
    this.ammount += 1000;
    console.log(`next year my house rent will be ${this.ammount}`);
}
HouseRent.prototype.decreaseRentByYearly = function()
{
    this.ammount -= 1000;
    console.log(`next year my house rent will be ${this.ammount}`);
}
const myHouse = new HouseRent(16000);
console.log(myHouse);
console.log(myHouse.increaseRentByYearly());
console.log(myHouse.increaseRentByYearly());
console.log(myHouse.increaseRentByYearly());
console.log(myHouse.decreaseRentByYearly());
console.log(myHouse.decreaseRentByYearly());


class person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    personDetails()
    {
        console.log(`${this.name} is an honest man and his age is ${this.age}`);
    }
    static sayAboutComputer = function()
    {
        console.log('This is a computer');
    }
    get computerName()   //getter
    {
        return this.name;
    }
    set computerName(value)   //setter
    {
        this.name = value;
    }
}
const person1 = new person('Rahim',23);
console.log(person1);
console.log(person1.computerName);
person1.computerName = 'Jasim';
console.log(person1.computerName);

//getter and setter
const device = {
    name:'',
    price:'',
    details:function()
    {
        console.log(`${this.name} is highly demanded and price is ${this.price}`);
    }
}
device.name = 'mobile';
device.price = 30000;
device.details();
console.log(device.name)





