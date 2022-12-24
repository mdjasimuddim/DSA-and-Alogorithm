//Adding sum from an Array
//you have been provide an array of number
//you have to sum the number
function SumOfArrayELements(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length;i++){  //using for loop
        sum += arr[i];
    }
    return sum;
}
console.log(SumOfArrayELements([10,20,30,40,80]))


function SumOfArrayELements(arr)
{
    let sum = 0;
    for(let i of arr){  //using for of loop and Descriptive property
        sum += i;
    }
    return sum;
}
console.log(SumOfArrayELements([10,20,30,40,80]))
