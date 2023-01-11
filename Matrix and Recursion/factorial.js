//Factorial
//5! = 5*4*3*2*1

function factorial(num)
{
    let result = 1;
    let count = 0;
    for(let i = num ; i>=1;i--){
        result = result * i;
    }
    if(result % 10 ===0){
        count ++;
    }
    return count;
}
console.log(factorial(10));

//recursive
function factorialFind(num)
{
    if(num == 0) return 1;
    return num * factorialFind(num - 1);
}
console.log(factorialFind(10));