//Fibonacci series
//iterative
function Fibonacci(num){
    let result = [0,1];
    for(let i = 2; i <= num; i++){
        result.push(result[i-1] + result[i-2]);
    }
    return result[num];
}
console.log(Fibonacci(4))

//recursive

function fibo(n)
{
  if(n <=2 ) return 1;
  return fibo(n-1) + fibo(n-2);
}
console.log(fibo(4));


function fibonacci(n)
{
    if(n > 0 && n <= 1){
        return 1;
    }else{
        return n * fibonacci(n-1);
    }

}
console.log(fibonacci(4));