function one()
{
    return 1;
}
function two()
{
    return 2;
}
function three()
{
    return 3;
}
console.log(one());
console.log(two());
console.log(three());

//Iterative method
function reverseNum(num){
    for(let i = num; i >= 0; i--){
        console.log(i);
    }
}
console.log(reverseNum(10))

//Recursive function
function reverseNumber(num){
    console.log(num);
    if(num == 0) return;
    reverseNumber(num - 1);
}


console.log(reverseNumber(10));


//recursive function

function sum(num)
{
    if(num == 0) return 0;
    return num + sum(num-1);
}
console.log(sum(5));

function recursionfunc(n)
{
    console.log('hello world');
    if (n == 1) return ;
    recursionfunc(n-1)
}
console.log(recursionfunc(5));
//iterative er alternative hocche recursive