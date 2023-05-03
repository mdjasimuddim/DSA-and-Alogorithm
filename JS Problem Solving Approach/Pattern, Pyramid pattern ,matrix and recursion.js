//Write a function that accepts a positive number N.
//The function should console.log a step shape
//with N levels using the character #. Make sure the space has spaces on the right hand side.

// function steps(n)
// {
//     let steps = '';
//     for(let row = 1; row <= n; row++){
        
//         for(let column = 0; column < row; column++){
//             steps = steps + '#' + '';
//         }
//         steps+='\n';
//     }
//     return steps;
// }
// console.log(steps(3));


// let n = 5; // row or column count
// defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//       string += "*";
//     }
    // else {
    //   if(j === 0 || j === n - 1) {
    //     string += "*";
    //   }
    //   else {
    //     string += " ";
    //   }
    // }
    // else{
    //     string += ' ';
    // }
//   }
  // newline after each row
//   string += "\n";
// }
// printing the string
// console.log(string);


// function steps(n)
// {
//     //for row
//     for(let row = 0; row < n; row++)
//     //for column
//     {
//         let str = '';
//         for(let column = 0; column < n; column++){
//             if(column <= row){
//                 str+='#';
//             } else{
//                 str +=' '
//             }
//         }
//         // str+= '\n';
//         console.log(str);



//     }
// }
// console.log(steps(3));

// function pyramid(n)
// {
//     let string = "";
//     for(let i = 1; i <=n ; i++){
//        for(let j = 0; j < n - i; j++){
//         string += " ";
//        } 
//        for(let k = 0; k < i; k++){
//         string += "*";
//        } 
//        string += '\n';
//     }
//     return string;
// }
// console.log(pyramid(5));

//pyramid pattern
//Write a function that takes a positive Number N
//The function should console log pyradmid a shape
// with N levels using the # character. Make sure the pyramid has spaces on both left and right sides 

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// function pyramid(n)
// {
//   let string = '';
//   let midpoint = Math.floor((2 * n - 1)/2);
//   //for row
//   for(let i = 0; i < n; i++){
//     //for column
//     for(let j = 0; j < 2 * n - 1; j++){
//       if(midpoint - i <= j && midpoint + i >= j){
//         string +='*';
//       }else{
//         string+=' ';
//       }
//     }
//     string+='\n';
//   }
//   return string;
// }
// console.log(pyramid(3));

// //spiral matrix

// function matrix(n)
// {
//   let results = [];
//   for(let i = 0; i < n; i++){
//     results.push([]);
//   }
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   let counter = 1;

//   while(startColumn <= endColumn && startRow <= endRow)
//   {
//     //for top row
//     for(let i = startColumn; i <= endColumn; i++){
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;
//     for(let i = startRow; i <= endRow; i++){
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;
//     //Bottom Row
//     for(let i = endColumn; i >= startColumn; i--){
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;
//     //start column
//     for(let i = endRow; i >= startRow; i--){
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;

//   }

//   return results;
// }
// console.log(matrix(4));

//Function countToZeo
// function countToZero(num)
// {
//   if(num == 0) return;
//   console.log(num);
//   countToZero(num - 1);
// }
// countToZero(10);

// function countToZero(num)
// {
//   for(let i = num; i >= 0; i--){
//     console.log(i);
//   }
// }
// countToZero(10);

//iterative sum range
// function sumRange(num1, num2){
//   let total = 0;
//   for(let i = num2; i >= num1; i--){
//     total += i;
//   }
//   return total;
// }
// console.log(sumRange(1, 10));

//using Recursion
// function sumRange(num){
//   if(num == 0) return 0;
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(10));


//iterative solution
// function factorial(num)
// {
//   let result = 1;
//   for(let i = 1; i <= num; i++){
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5));


//Recursive solution
//time complexity O(n)
// function factorial(num){
//   if(num == 0) return 1;
//   return num* factorial(num - 1);
// }
// console.log(factorial(5))

//iterative solution
//create a range
// function createRange(num1, num2){
//   let rangeArr = [];
//   for(let i = num1; i <= num2; i++){
//     rangeArr.push(i);
//   }
//  return rangeArr;
// }
// console.log(createRange(10,20));


//recursion
//impure recursive solution
// function createRange(num1, num2,rangeArr = []){
  // let ;
//   function helper(helperInput, targetNum){
//     rangeArr.push(helperInput);
//     //base case
//     if(helperInput === targetNum) return;
//     helper(helperInput+1, targetNum);
//   }
//   helper(num1, num2);
//   return rangeArr;
// }
// console.log(createRange(10,20));

// function createRange(num, target,rangeArr = []){
//   // let ;
//   rangeArr.push(num);
//   if(num === target) return rangeArr;
//   return createRange(num + 1,target=20, rangeArr);
//   // return rangeArr;
// }
// console.log(createRange(10,20))

//fibonacci series [0,1,1,2,3,5,8]
// find out the nth number of fibonacci series 

// function factorial(n){
//   let result = [0,1];
//   for(let i = 2; i <= n; i++){
//     result.push(result[i - 1] + result[i-2]);
//   }
//   console.log(result[n]);
//   return result;
// }
// console.log(factorial(10));

function fibonacci(n)
{
  if(n <= 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(8));

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


var threeSum = function(nums) {
  const output = []
  nums.sort((a,b) => a-b);
  for(let i = 0; i < nums.length - 2; i++)
  {
    let left = i+1;
    let right = nums.length - 1;
    if(i > 0 && nums[i] === nums[i-1]) continue;
    while(left < right){
      let total = nums[i] + nums[left] + nums[right];
      if(total === 0){
        output.push([nums[i], nums[left], nums[right]]);
        while(left < right && nums[right] === nums[right - 1]){
          right--;
        }
        left++;
        right--;
      }
      else if(total > 0){
        right--;
      }else{
        left++;
      }
    }
  }
  return output;
};
threeSum([-1,0,1,2,-1,-4])







