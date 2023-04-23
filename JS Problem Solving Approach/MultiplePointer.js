// #Multiple Pointer 
// Creating pointers or values that correspond to an index or position and move towards the beginning, middle or end based on a certain condition 
//very efficient for solving problems with minimal space complexity as well



//write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr)
{
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if((arr[left] + arr[right])===0){
            return [arr[left], arr[right]];
        }
        else if((arr[left] + arr[right]) > 0){
            right--;
        }
        else if((arr[left] + arr[right])<0){
            left++;
        }
    }
    return undefined;
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([ -2, 0, 2, 3]));
console.log(sumZero([1, 2, 3, 4]));

// Write a function called areThereDuplicates which accepts a sorted array of integers
// The function should return true if there is any duplicates and false if there is no duplicates

function areThereDuplicates(arr){
    let i = 0;
    let j = 1;
    while(i < arr.length){
        if(arr[i] == arr[j]) return true;
        i++;
        j++;
    }
    return false;
}
console.log(areThereDuplicates([1,1,1,1,1,2]));
console.log(areThereDuplicates([1,2,3,4,4,4,7,7,12]));
console.log(areThereDuplicates([1,2,3]));

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
//  it reads the same forward and backward. Alphanumeric characters include letters and numbers.

var isPalindrome = function(s) {
    const re = /[\W_]/g;
    const normalize = s.replace(re, '').toLowerCase();
    let left = 0;
    let right = normalize.length - 1;
    while(left < right){
        if(normalize[left] !== normalize[right]) return false;
        left ++;
        right --;
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

//Slidding a window
//This pattern involves creating a window which either can be a number or array from one position to another 
//Depending on a certain condition, the window either increases or closes (and a new window is created).
//Very useful for keeping track of a subset of data in an array/string etc.


//Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements of the array

// function maxSubarraySum(arr,num)
// {
//     if(arr.length < num){
//         return null;
//     }
//     let max = -Infinity;
//     for(let i = 0; i < arr.length - num + 1; i++){
//         let tempSum = 0;
//         for(let j = 0; j < num; j++ ){
//             tempSum += arr[i+j];
//         }
//         if(tempSum > max){
//             max = tempSum;
//         }
//         //we can use buildin method Math.max(tempSum, max) instead of above condition
//     }
//     console.log(max)
// }
// maxSubarraySum([1,2,5,2,8,1,5],4);
// console.log(maxSubarraySum([4,2,1,6],5));
function maxSubarraySum(arr,num){
    if(arr.length < num){
        return null;
    }
    let max = 0;
    let tempSum = 0;
    for(let i = 0 ; i< num; i++){
        max += arr[i];
    }
    // console.log(tempSum);
    tempSum = max;

    for(let j = num; j < arr.length; j++){
        tempSum = tempSum - arr[j-num] + arr[j];
        max = Math.max(tempSum, max);
    }
    console.log(max);

}

maxSubarraySum([1,2,5,2,8,1,6],3);   // 3 7 7 10 9 7

//Kadane's algorithm
//Maximum subarray

var maxSubArray = function(nums) {
    let current_sum = nums[0];
    let max_sum = current_sum;
    for(let i = 1; i < nums.length; i++){
        current_sum = Math.max(current_sum + nums[i], nums[i]);
        max_sum = Math.max(current_sum, max_sum);
    }
    return max_sum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
maxSubArray([5,4,-1,7,8]);


// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s)
{
    let i = 0; 
    let j = 0;
    let max = 0;
    const uniqueSet = new Set();
    while(i < s.length)
    {
        if( !uniqueSet.has(s[i])){
            uniqueSet.add(s[i]);
            max = Math.max(max, uniqueSet.size);
            i++;
        }else{
            uniqueSet.delete(s[j]);
            j++;
        }
    }
    return max;
}
console.log(lengthOfLongestSubstring('pwwkew'));


//minimum sub array length
// Minimum Size Subarray Sum
var minSubArrayLen = function(target, nums) {
    let result = Infinity;
    let left = 0;
    let val_sum = 0;
    for(let i = 0; i < nums.length; i++){
        val_sum += nums[i];
        while(val_sum >= target)
        {
            result = Math.min(result, i + 1 - left)
            val_sum -= nums[left];
            left++;
        }
    }
    result = result === Infinity ? 0 : result;
    console.log(result);
};
minSubArrayLen(7, [2, 3, 1, 3, 4, 3]);
minSubArrayLen(11, [1, 1, 1, 1, 1, 1]);