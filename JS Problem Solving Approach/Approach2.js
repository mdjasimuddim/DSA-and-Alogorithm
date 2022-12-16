//  Write a function which takes in a string and returns counts of each character in the string.
//
function countCharacter(str)
{
    let newArr = str.split('');
    let count = 0;
    for(let x in newArr){
        count++;
    }
    return count;
}
console.log(countCharacter('Bangladesh victory Day'));

//input - string  "Hello" output -{ h:1, e:1, l:2, o:1}
//input - string "greet" output - {g:1, r:1, e:2, t:1}

function countStringCharacter(str){
    //creating an object for tracking the frequency of element
    const obj = [];
    //if there is any case ignore it
    const normalize = str.toLowerCase();
    //looping the input and generalize the case
    for(let i = 0; i < str.length; i++){
        char = normalize[i];
        if(char == ' ') continue;
        if(char in obj){
            //check if the element exists on the object increment the existent count value
            obj[char]++;
        }else{
            //if not present assign the value 1
            obj[char] = 1;
        }
    }
   return obj;
}
console.log(countStringCharacter('Today is victory day'));
