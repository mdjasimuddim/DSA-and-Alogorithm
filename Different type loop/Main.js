console.log('Environmet is okey to do code properly');
//for 
//while
//for of  //declarative
//for in   //declarative
// do while

for(let i = 1; i<=10;i++){
    console.log(i);
}

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//for loop in array
let arr = [ 'rahim', 34, 'student'];
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
    console.log(i);
}

for(let x in arr)
{
    console.log(x)
}

//object looping
const obj = {
    name:'jasim',
    age:30
}
console.log('name' in obj);
for(let x in obj){
    console.log(obj[x]);
    console.log(obj.x);  //becasue x is not element in obj
    console.log(x)
}