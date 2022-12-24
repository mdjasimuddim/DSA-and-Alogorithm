//String Reversal
//---Directions
//Given a string ,return a new string with the reversed
//order of characters
//---Examples 
// reverse('Apple') --elppA
//reverse('Orange') --egnarO
//reverse('jasim')--misaj

function reverseString(str)
{
    let reverseString = '';
    for(let i = str.length - 1; i >= 0; i--)
    {
        reverseString += str[i];
    }
    return reverseString;
}
console.log(reverseString('Orange'))
console.log(reverseString('Jasim'))
console.log(reverseString('Apple'))


function reverseString1(str)
{
    let reverseString = '';
    for(let i of str)
    {
        reverseString = i + reverseString;
    }
    return reverseString;
}
console.log(reverseString1('jasim'))