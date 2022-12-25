//Write a function that return the number of vowels
//used in a string . and vowerls are 'a','e','i','o','u'
// vowels('How there!') -> 3
// vowels('why do you ask!') -> 4
// vowels('why') -> 0

function vowels(str){
    let count = 0;
    let arr = ['a','e','i','o','u'];
    for(let i of str.toLowerCase()){
        if(arr.includes(i)){
            count++;
        }
    }
    return count;
}
console.log(vowels('How there!'));
console.log(vowels('why do you ask!'));
console.log(vowels('why'));


function vowels(str){
    let count = 0;
    let arr = ['a','e','i','o','u'];
    for(let i of str.toLowerCase()){
        if(i == 'a' || i == 'e'||i == 'i' || i == 'o'||i == 'u' ){
            count++;
        }
    }
    return count;
}
console.log(vowels('How there!'));
console.log(vowels('why do you ask!'));
console.log(vowels('why'));
