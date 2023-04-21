//two arrays are same
function isSame(arr1, arr2)
{
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++){
        let index = arr2.indexOf(arr1[i]);
        console.log(index);

        if(index === -1)
        {
            return false;
        }
        else{
            arr2.splice(index, 1);
        }
        console.log(arr2)
    }
    return true;
}
console.log(isSame([1,2,4,5],[1,4,5,2,1]));




function isSame(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    let hashmap1 = {};
    let hashmap2 = {};
    for(let elem of arr1){
        hashmap1[elem] = (hashmap1[elem] || 0) + 1;
    }
    console.log(hashmap1);
    for(let elem of arr2){
        hashmap2[elem] = (hashmap2[elem] || 0) + 1;
    }
    for(let elem in hashmap1){
        if(!elem in hashmap2 && (hashmap1[elem]!==hashmap1[elem])){
            return false;
        }
    }
    return true;
}
console.log(isSame([1,2,4,5],[1,4,5,2]));

// TwoSUm
//find the sum from a array


// function twoSum(arr, target)
// {
 
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             console.log(i,j);
//             if(arr[i] + arr[j] === target){
//                 return [i,j];
//             }
//         }
//     }

// }
// console.log(twoSum([1,2,4,5],5));


// function twoSum(nums, target)
// {
//     const hashTable = {};
//     for(let i = 0; i < nums.length; i++){
//         const want = target - nums[i];
//         console.log(want);
//         if(want in hashTable){
//             return [hashTable[want], i];
//         }
//         hashTable[nums[i]] = i;
//     }
//     console.log(hashTable)
// }
// console.log(twoSum([1,2,4,5],5));

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// var subarraySum = function(nums, k) {
//     const hashMap = {
//         0:1,
//     };
//     let sum = 0;
//     let result = 0;
//     for(let i = 0; i < nums.length; i++){
//         sum += nums[i];
//         if([sum - k] in hashMap){
//             result += hashMap[sum - k];
//         }
//         hashMap[sum] = (hashMap[sum]||0)+1;
//     }
//     return result;
// };

// console.log(subarraySum([1,1,1],2));



// function isAnagram(s, t){
//     const normalizeStr1 = s.replace(/[^\w]/g, '').toLowerCase();
//     const normalizeStr2 = t.replace(/[^\w]/g, '').toLowerCase();

//     // console.log(normalizeStr1, normalizeStr2);
//     const frequency1 = {};
//     const frequency2 = {};
//     if(s.length !== t.length) return false;
//     for(let elem of normalizeStr1){
//         frequency1[elem] = (frequency1[elem] || 0) + 1;
//     }
//     for(let elem of normalizeStr2){
//         frequency2[elem] = (frequency2[elem] || 0) + 1;
//     }

//     if(Object.keys(frequency1).length !== Object.keys(frequency2).length) return false;
//     for(let x in frequency1){
//         if( !x in frequency2 || (frequency1[x] !== frequency2[x])){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAnagram("anagram", "nagaram"));



//first unique character in a string
// var firstUniqChar = function(s) {
//     const hashTable = {};
//     for(let elem of s){
//         hashTable[elem] = (hashTable[elem]||0)+1;
//     }
//     for(let i = 0; i < s.length; i++){
//         if(hashTable[s[i]] === 1){
//             return i;
//         }
//     }
//     return -1;
//     // console.log(hashTable);
// };
// console.log(firstUniqChar("loveleetcode"));


//group anagrams
//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function(strs) {
    const hashTable = {};
    for(let elem of strs){
        const sorted = elem.split('').sort().join('');
        // console.log(hashTable[sorted]);
        if(hashTable[sorted]){
            hashTable[sorted].push(elem);
        }else{
            hashTable[sorted] = [elem];
        }
    }
    return Object.values(hashTable);
    // console.log(sorted);
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
