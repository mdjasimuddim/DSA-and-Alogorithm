// Searching Algorithm
// linear searching
// time complexity is -> big o of n or O(n)
// space complexity is _> big o of 1 or O(1)
function searchAlgorithm(arr,searchIndex)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == searchIndex) return i;
    }
    return -1;
}

console.log(searchAlgorithm([1,2,3,4,5],7));

var fizzBuzz = function(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            arr.push("FizzBuzz");
        }else if(i % 3 == 0){
            arr.push("Fizz");
        }else if (i % 5 == 0){
            arr.push("Buzz")
        }else{
            arr.push((String(i)));
        }
    }
    return arr;
};
console.log(fizzBuzz(15));


var reverse = function(x) {
    let reverseStr = x.toString().split('').reverse().join('');
    // return reverseStr;
    if(reverseStr.includes('-')){
        reverseStr = '-' + reverseStr.slice(0,reverseStr.length - 1);
    }
     if(reverseStr >= 2147483648 || reverseStr <= -2147483648) return 0;
    return reverseStr;
};

console.log(reverse(-2147483648));

