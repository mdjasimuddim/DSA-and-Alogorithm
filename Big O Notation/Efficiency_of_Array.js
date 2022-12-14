console.log('Bangladesh');

let arr = ['a', 'b', 'c'];

//access element of an array is O(1)
console.log(arr[arr.length-1]);
console.log(arr[2]);

//add an element of an array is O(1) because no index is changed here.
arr.push('d');
arr[arr.length] = 'd';
console.log(arr); 

//remove an element of an array is O(1) because no index is changed from first to last.
arr.pop();
console.log(arr);

//add element in first index of an array is O(n) because all index is replace from left to right
arr.unshift('k');
console.log(arr);

//remove first element of an array is O(n) because of all index is shift 1 index from right to left
arr.shift();
console.log(arr)

//forEach,map, filter, reduce, slice, splice all are O(n) because we traverse every elements of an array