console.log('It\'s environment now okey');
//var, let and const
var firstName = 'jasim';   //bad practise and should avoid this
var lastName = 'hasan';
const email = 'jasimuddim231@gmail.com';

// const email = 'mdjasimuddim231@gmail.com'; it's not possible to reassign with declare const variabe
//using declare variable with let is possible to reassign
// primitive data type - use for single data to store
//string
var str = 'jasim';
console.log(typeof str);//string
let str1 = new String('Bangladesh');
console.log(typeof str1);//object
let num = 10;
console.log(typeof num);//number
num = 10.20;
console.log(typeof num)  //number
let condition = true;
console.log(typeof condition); //boolean
condition = false;
console.log(typeof condition) //boolean
let nul = null;
console.log(typeof null)   //object

let val = undefined;
console.log(typeof val)  //undefined
//Symbol
console.log(Symbol('jasim') == Symbol('jasim'));
//unique value generate kore Symbol()

//BigInt
val = 123n; //when value range is out of capacity then use BigInt
console.log(typeof val); 


//complex data type - use for multiple data to store
//Object
let person = {
    firstName:'jasim',
    lastName : 'uddim',
    zilla : 'chapaiNawaganj',
    age:25
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.zilla);
let Bioage = 'age';
console.log(person['age'])
console.log(person[Bioage]) //using square bracket

//Array

let arr = ['rahim', 'karim', 'tasnim', 'bimugdho'];
console.log(arr[arr.length-1])

function fullName(firstName, lastName)
{
    return (fullName + ' ' + lastName);
}

console.log(fullName('jasim', 'uddim'));
console.log(fullName('Rahim', 'Ali'));
