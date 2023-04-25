//searching algorithm
//indexOf(1,-1)
//includes(true, false)
// [1, 3, 5, 7, 9]
// 10

//time complexity - O(n)
//space complexity - O(1)
function searchElement(arr, searchElem){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === searchElem) return i;
    }
    return -1;
}
console.log(searchElement([1, 3, 5, 7, 9],5))



// function linearSearch(arr, searchElem)
// {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === searchElem){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch([1,2,3,4,5,6,7,8],6))


//Binary search, //Divide and conquer
//best searching algorithm
//O(logn)
function searchElemIndex(arr, searchElem)
{
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid =Math.floor((left + right)/2);
        let midValue = arr[mid];
        if(searchElem == midValue){
            return mid;
        } else if(searchElem > midValue){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}
console.log(searchElemIndex([1,3,5,7,9],10))

/*
[1,3,5,7,9]     7
l        h

*/



