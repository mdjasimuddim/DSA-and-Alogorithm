//Write a program that prints the number from 1 to 100. But for the multiplies of three print "Fizz" instead of the number and for the multiplies of five print "Buzz". For numbers which are multiplies of both three and five print "FizzBuzz"

function getNumber(num)
{
 for(let i = 1; i <= num; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i,"FizzBuzz");
    }
   else if(i % 3 == 0){
        console.log(i+ "="+"FizzBuzz");
    }
    else if(i % 5 == 0){
        console.log(i+ "="+"FizzBuzz");
    }
    else{
        console.log(i);
    }
 }
}
console.log(getNumber(20));