//Given an integer , return an integer that is reverse
//ordering the number
//ReverseInt(15)===51
//reverseInt(981) === 181
//reverseInt(-81) === -18
//reverseInt(-90) === -9

function reverseInt(num)
{
    let numStr = num.toString();
    let reverseInt = numStr.split('').reverse().join('');
    if(reverseInt.endsWith('-')){
        reverseInt = '-'+ reverseInt.slice(0,reverseInt.length-1);
    }
    return Number(reverseInt)
}
console.log(reverseInt(-102020290))
console.log(reverseInt(-12))