//Finding out max or min sum
//you have been provide an array of number
//you have to find the maximum number
function MaxElementFromArray(arr)
{
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(MaxElementFromArray([23,2,10,8,7,5,12,19,4,6]))

function MaxElementFromArray(arr)
{
    return Math.max(...arr);
}
console.log(MaxElementFromArray([23,2,10,8,7,5,12,19,4,6]))

