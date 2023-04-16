//We can use Big O notation to analyze space complexity.How much additional memory do we need to allocate
// in order to run the code in our algorithm ?

//Summarized from for space Complexity
// Most primitives (Boolean, Numbers, undefined ,null ) are constant space 
//Strings require O(n) space  (where n is the string length)
//Reference types are generally O(n), where n is the length (for arrays) or the number of keys(for Objects)

//Complexity is O(1)
function sum(arr)
{
    let total = 0; //primitives are always constant
    for(let i = 0; i< arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(sum([1,2,3,4,5]))


function double(arr)
{
    let newArr = [];         // space complexity for reference type like array are O(n)
    for(let i = 0; i< arr.length; i++) //for let i = 1 is constant 
        //O(n+1) = O(n)
    {
        newArr.push(2*arr[i]);
    }
    return newArr;
}
console.log(double([1,2,3,4,5]))

//To analyze the performance of an algorithm we use Big O Notation
//Big O Notation can give us a high level understanding of time or space complexity of an algorithm
//Time or Space complexity depends  only on algorithm , not the hardware used to run algorithm

const num = 100; //O(1)
const str = 'Bangladesh'; // O(n)
const arr = [1,2,3,4,5];    //O(n)
const obj = {
    Name : 'jasim',
    Roll: 1703035     //O(n)
}
