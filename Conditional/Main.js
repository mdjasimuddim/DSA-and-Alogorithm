console.log('Environment is okey to do code');
let age = 55;

if(age<18){
    console.log('you are teen');
}else if(age > 18){
    console.log('you are now young');
}else if (age > 40)
{
    console.log('you are adult');
}

let num = 30;
let largestNumber = num >= 20 ? 'The number is bigger' : 'the number is smaller';
console.log(largestNumber);

console.log('bangladesh is a small country in south asia');
console.log('Ramjan ali is our elder brother in decent 3 & 4');

let day = 'Sunday';
switch(day)
{
    case 'saturday':
        console.log('Today is saturday');
        break;
    case 'sunday':
        console.log('Today is sunday');
        break;
    case 'monday':
        console.log('Today is monday');
        break;
    case 'tuesday':
    console.log('Today is tuesday');
    break;
    case 'wednesday':
    console.log('Today is wednesday');
    break;
    case 'thursday':
    console.log('Today is thursday');
    break;
    case 'friday':
    console.log('Today is friday');
    break;
    default:
        console.log('Don\'t Matching any day that i has mentioned here');
    }