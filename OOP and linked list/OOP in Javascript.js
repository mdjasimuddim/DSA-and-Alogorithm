//main goal of OOP
// -> Organize code 
// -> Easier code
// -> Easy to maintain 
// -> Easy to explore
// -> Memory efficient
// -> Dry (Dont't repeat yourself)
// -> Clean + understandable 


// Alterative methods to Option

// -> Structured or moducular programming
// -> Functional programming
// -> imperative programming
// -> Declarative programming 

//Why use OOP instead of others ?
// -> Most using and widely using programming paradigm for large project 

//Four principles of OOP
// 1.Abstraction  - Hide something for simplicity
// 2. Encapsulation - Keep properties and method private, that will not work outside of the class
// 3. inheritance   - class child will take matching properties and values from parent class
// 4. Polymorphism  - this will behave many ways, a child class overwrite a method that inherited from a prarent class



//There are three ways to make object in oop
// 1. functional construtor
// 2. Classes
// 3. Object.create()

//create function constructor
// const Computer = function(name, model)
// {
//     this.name = name;
//     this.model = model;
//     this.aboutComputer = function()
//     {
//         console.log(`${this.name} is a computer that's model is ${this.model}`);
//     }
// }

// const hp = new Computer('hp', 'intel core i3');
// console.log(hp);
// console.log(hp.name);
// console.log(hp.model);
// hp.aboutComputer();


//inheritance
class Computer{
    constructor(name, model)
    {
        this.name = name;
        this.model = model;
    }
    aboutComputer()
    {
        console.log(`${this.name} is very invent for us and ${this.model} is charming for modern science`);
    }
}

class Hp extends Computer{
    constructor(name, model, warenty)
    {
        super(name, model);
        this.warenty = warenty;
    }
    aboutComputer()
    {
        console.log(`${this.name} is very invent for us and ${this.model} is charming for modern science`);
    }
    aboutWarenty()
    {
        console.log(`${this.name} provider ${this.warenty} year of warenty`);
    }
    useComputer(value)
    {
        console.log(`${(this.warenty * 12 * 30) - value*30} month warenty remaining`);
    }
}

let hp = new Hp("HP", "core i7", 3);
hp.aboutComputer();
hp.aboutWarenty();
hp.useComputer(5)