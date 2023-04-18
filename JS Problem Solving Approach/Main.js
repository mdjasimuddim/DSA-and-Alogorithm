console.log('hello');
// hello {h:1, e:1, l:2, o:1}
//count the string character

function countString(str)
{
    let charMap = {};
    let normalize = str.toLowerCase();
    console.log(normalize);
    for(let i = 0; i < normalize.length; i++){
        let char = normalize[i];
        console.log(char);
        if(char == ' ') continue;
        if(char in charMap){
            charMap[char]++;
            // console.log(charMap);
        }else{
            charMap[char] = 1;
            // console.log(charMap);
        }
    }
    return charMap;
}

console.log(countString('jasim uddim'));


// isElement exists
// check the element of first array in 2nd array
//return true
//otherwise false

// input - ['a', 'b', 'c'],[1, 2, 3, 'z']  -- output - false 

// function isElementExist(arr1, arr2){
//     for(let elem of arr1){
//         console.log(elem)
        // if(arr2.includes(elem)){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        // console.log(elem);
//     }
// }
// console.log(isElementExist(['a', 'b', 'c'], [1, 2, 3, 'b']));



//time complexity is O(n^2)
//space complexity is O(1)

// function isElementExists(arr1, arr2)
// {
//     let exists = false;
//     for(let elem of arr1)
//     {
//         console.log(elem);
//         if(arr2.includes(elem)){
//             exists = true;
//         }
//     }
//     return exists;
// }

// console.log(isElementExists(['a','b','c'],[1, 2, 3, 'a']));


//frequency counter
function frequecyCounter(arr1, arr2){
    const frequecyCounter = {};
    for(let elem of arr1){
        frequecyCounter[elem] = 1;
    }
    for(let elem of arr2){
        if(elem in frequecyCounter){
            return true;
        }
        // else{
        //     return false;
        // }
    }
    // console.log(frequecyCounter);
}
console.log(frequecyCounter(['a','b','c'],[1, 2, 3, 'a']));