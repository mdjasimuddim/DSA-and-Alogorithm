var isPowerOfTwo = function(n) {
    if(n<1) return false;

    let newNumber = n;
    while(newNumber !== 1){
        if(newNumber % 2 !== 0){
            return false;
        }
        newNumber = newNumber/2;
    }
    return true;
};
console.log(isPowerOfTwo(20));

//20 % 2 =0
//10%2 = 0
//5%2 = 1;
// 2 % 2 = 0

// 3^0 = 1, 3^1=3, 3^2 = 9, 3^3 = 27

function power(base, exponent)
{
    if(exponent === 0){
        return 1;
    }
    return base*power(base,exponent - 1);
}
console.log(power(3,4))