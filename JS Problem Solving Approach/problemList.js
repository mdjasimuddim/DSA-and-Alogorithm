console.log('Hello Bangladesh');
//fizzbuzz

// function fizzbuzz(num)
// {
//     for(let i = 1; i <= num; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log('FizzBuzz ' + i);
//         }
//         else if(i % 3 == 0){
//             console.log('Fizz');
//         }
//         else if(i % 5 == 0){
//             console.log('Buzz');
//         }
//         else {
//             console.log(i);
//         }
//     }
   
// }
// fizzbuzz(100)


// function fizzBuzz(num){
//     let result = '';
//     for(let i = 1; i <= num; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             result += 'FizzBuzz \n';
//         }
//         else if(i % 3 == 0){
//             result += 'Fizz \n';
//         }
//         else if(i % 5 == 0){
//             result += 'Buzz \n';
//         }else{
//             result += i + '\n';
//         }
//     }
//     return result;
// }
// console.log(fizzBuzz(100));


//Adding sum from an array
// function sum(arr)
// {
//     let sum = 0;
//     for(let x of arr){
//         sum += x;
        
//     }
//     return sum;
// }
// console.log(sum([1,3,4,5,6]));

// let str = 'jasim';
// let arr = [...str];
// // let arr1 = [1, 2, 3, 4, 5];
// // console.log(Math.min(...arr1))


//find the minimum value 
// function minimum(arr)
// {
//     let minimum_value = arr[0];
//     for(let num of arr){
//         if(minimum_value > num){
//             minimum_value = num;
//         }
//     }
//     return minimum_value;
// }
// console.log(minimum([1,2,3,4,5,-3]));

//find the maximum value
// function maxValue(arr)
// {
//     let maxValue = arr[0];
//     for(let num of arr){
//         if(maxValue < num)
//         {
//             maxValue = num;
//         }
//     }
//     return maxValue;
// }
// console.log(maxValue([1,2,3,4,5,-3]));

//Reverse of a string
// function reverseStr(str)
// {
//     let revStr = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         revStr += str[i];
//     }
//     return revStr;
// }
// console.log(reverseStr('Bangladesh'));


//Reverse of another string
// function reverseStr(str){
//     let revStr = '';
//     for(let elem of str){
//         revStr = elem + revStr;
//     }
//     return revStr;
// }
// console.log(reverseStr('Bangladesh'));


//build in javascript method
// function reverseStr(str)
// {
//     return typeof(str.split('').reverse().join(''));
// }
// console.log(reverseStr('Bangladesh'));

//All buildin string and array method 

// function reverseStr(str)
// {
    // return [...str].reverse().join('');
    // return Object.assign([],str).reverse().join('');
    // return Array.from(str).reverse().join('');
    // return str.split('').reverse().join('');
// }
// console.log(reverseStr('Bangladesh'));

// function reverseString(str)
// {
//     // return [...str].reverse('').join('');
//     // return Array.from(str).reverse('').join('');
//     return Object.assign([], str).reverse().join('');
// }
// console.log(reverseString('md jasim uddim'));


//Given an integer, return an integer that is the reverse ordering of numbers


// function reverseInt(num)
// {
//     let reverseNum = num.toString().split('').reverse().join('');
//     if(reverseNum.endsWith('-')){
//         reverseNum = '-' + reverseNum.slice(0, reverseNum.length - 1);
//     }
//     return parseInt(reverseNum);
// }
// console.log(reverseInt(-9110));


//Given a string, return the character that is most commonly used in the string

//maxChar("abccccced") === "c"
//maxChar("apple 1231111") === "1"

// function maxChar(str)
// {
//     let charMap = {};
//     let max = 0;
//     let maxChar = '';
//     for(let char of str){
//         charMap[char] = (charMap[char]||0) + 1;

//     }
//     console.log(charMap);
//     for(let char in charMap){
//     console.log(charMap[char]);
//         if(charMap[char] > max){
//         max = charMap[char];
//         maxChar = char;
//     }
// }
//     return maxChar;
// }

// console.log(maxChar('apppppppppple 123aaaaa'));


// function findCharacter(str)
// {
//     let character = {};
//     let max = 0;
//     let maxChar ;
//     for(let charValue of str){
//         character[charValue] = (character[charValue] || 0) + 1;
//     }
//     for(let char in character){
//         if(character[char] > max){
//             max = character[char];
//             maxChar = char;
//         }
//     }
//     console.log(maxChar);
// }
// findCharacter('pakistan is a small country in asia.');

//palindrome a number
//input 'race car' output - true
//input 'car'   output - false;
//input 'radar'  outpur - true

// function palindrome(str){
//     const re = /\W/g;
//     let normalize = str.toLowerCase().replace(re, '');
//     let reverseStr = normalize.split('').reverse().join('');
//     if(reverseStr === normalize){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(palindrome(''));


//write a function of a string and count the vowel from a string

// function countVowel(str)
// {
//     let count = 0;
//     let arr = Array.from(str);
//     for(let x of arr)
//     {
//         console.log(typeof x)
//         if( x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countVowel('Bangladesh is a small country in south asia.'));

//using array method

// function countVowels(str){
//     let count = 0;
//     const arr = ['a', 'e', 'i', 'o', 'u'];
//     for(let x of str){
//         if(arr.includes(x)){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countVowels('Bangladesh is a small country of south asia.'));

//Given an array and chunk size, divide the array into many subarrays where each subarray is the of length size
//--- example
//chunk([1,2,3,4,5],2) --> [[1,2],[3,4],[5]]
//chunk([1,2,3,4],2) --> [[1,2],[3,4]]


// function chunk(arr, size){
//     const chunked = [];
//     for(let elem of arr){
//         const last = chunked[chunked.length-1];
//         //undefined
//         //[1]
//         console.log(last);
//         if(last && last.length < size ){
//             last.push(elem);
//         }else{
//             chunked.push([elem]);
//         }

//         // console.log(chunked.push(elem));[[1,]]
//     }
//     console.log(chunked)
// }




// function chunk(arr, size){
//     const chunked = [];
//     let index = 0;
//     while(index < arr.length){
//         const slicedArr = arr.slice(index, index + size);
//         chunked.push(slicedArr);
//         index += size;
//     }
//     console.log(chunked);
// }
// chunk([1,2,3,4,5],2)