console.log('Hello world!');

//Big(O) is worst case
//How Number of operation increase/ relates with input
//For worst case O(n)
//For Best case O(1)
function logAtLeast5(n){
    for(let i = 1; i <= Math.max(5, n); i++){
        console.log(i);
    }
}
logAtLeast5(3)