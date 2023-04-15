console.log('Hello world!');

//Big(O) is worst case
//How Number of operation increase/ relates with input
//For worst case O(n)  - when the input value is greater than 5
//For Best case O(1)   - when the input value is less than 5
function logAtLeast5(n){
    for(let i = 1; i <= Math.max(5, n); i++){
        console.log(i);
    }
}
logAtLeast5(3)
//O(1) for Number is greater than 5
//O(n) for Number is less than 5

function logAtLeast5(n){
    for(let i = 1; i <= Math.min(5, n); i++){
        console.log(i);
    }
}
logAtLeast5(20)

//O(n+m) because a and b are differnt input
//if O(n) then a and b are same input
function log3(a,b)
{
    for(let i = 0; i < a; i++){
        console.log(a);
    }
    for(let i = 0; i < b; i++){
        console.log(b);
    }
}
log3(3,5)

//For Binaray search O(logn)
//For Sorting algorithm O(nlogn) Best case
//O(1) -> O(logn) -> O(n) -> O(nlogn) -> O(n^2)
