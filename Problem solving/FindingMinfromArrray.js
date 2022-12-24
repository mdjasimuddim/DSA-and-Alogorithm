//Finding out max or min sum
//you have been provide an array of number
//you have to find the minimum number
function MinElementFromArray(arr)
{
    let min = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] <  min){
            min = arr[i];
        }
    }
    return min;
}
console.log(MinElementFromArray([23,2,10,8,7,5,12,19,4,6]))


function MinElementFromArray1(arr)
{
    // console.log(Math.min(arr))
    return Math.min(...arr);
    
}
console.log(MinElementFromArray1([23,2,10,8,7,5,12,19,4,6]))


function reverseStr(str)
{
    return str.split('').reverse().join('');
}
console.log(reverseStr('jasim'));
console.log(reverseStr('nahid'));
console.log(reverseStr('delowar'));
