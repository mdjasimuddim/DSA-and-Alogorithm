//Built in sort
//Sorting(organizing data in order)
//ascending order(smaller to larger)
//descending order(larger to smalller)

/*
    [3,1,6,5,10] - random
    [1, 3, 5, 6, 10] - ascending order
    [10, 6, 5, 3, 1] - decending order
*/


// function sortArr(arr)
// {
//     console.log(arr.sort());
// }
// // sortArr([3,1,6,5,9,10])
// sortArr(['Banana', 'Orange', 'Apple', 'Grapes'])

// primitive or quadratic sort 
//bubble sort
//insertion sort
//selection sort


// more efficient sort 
//quick sort
//merge sort


//Bubble sort
//move the largest element to the end
//time complexity O(n^2)
//space complexity O(n)
// function BubbleSort(arr)
// {
//     for(let i = 0; i < arr.length; i++){
//         let swap = false;
//         for(let j = 0; j < arr.length-i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 swap = true;
//             }
//         }
//         if(!swap) break;
//     }
//     return arr;
// }
// console.log(BubbleSort([2,15,5,3,7,9,12,10,1,14]))



//Selection sort
//smallest element will move to the left(priority)
//time complexity O(n^2) 
//space complexity O(n)

// function selectionSort(arr)
// {
//     for(let i = 0; i < arr.length; i++){
//         let min = i;
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         if(i !== min){
//             temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([2,15,5,3,7,9,12,10,1,14]))


//insertion sort
//Builds up the sort by gradually creating a larger left haif which is always sorted.
//time complexity is O(n^2)
//space complexity is O(n)

// function insertionSort(arr)
// {
//     let currentVal;
//     for(let i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
//             arr[j+1] = arr[j];
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }
// console.log(insertionSort([2, 1, 9, 7, 6, 4]));


//sorting
//elementary sorting time complexity O(n^2) and space complexity - O(1)
// Bubble sort(gradually sort largest item to right)
// Selection sort(gradually sort smallest item to the left or beginning)
// Insertion sort(Building sorted left haif gradually)



//Merge sort
//Breakdown - Merge sort


//single item is always sorted
//time complexity O(nlogn)
//space complexity O(n)
function merge(arr1, arr2)
{
    const results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}
// console.log(merge([1,3,5], [2,4,6,9]));


function mergesort(arr)
{
    let mid = Math.floor(arr.length / 2);
    if(arr.length <= 1) 
    {
        return arr;
    }
    // console.log(arr);
    const left = mergesort(arr.slice(0,mid));
    console.log(left);
    const right = mergesort(arr.slice(mid));
    console.log(right)
    return merge(left, right);
    // console.log(merge(left, right));
}

console.log(mergesort([3,7,9,8,10]))

// function sliceArr(arr){
//     let left = arr.slice(0,2);
//     return left;
// }
// console.log(sliceArr([3,7,9,8,10]))


// let sum = 0;
// for(let i = 0; i <= 10; i++){
//     sum +=i;
// }
// console.log(sum);




//Quick sort
// [5,9,7, 4, 2,3]
function swap(arr, idx1, idx2)
{
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
}

function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1)
{
    let swapIndex = pivotIndex;
    for(let i = pivotIndex + 1; i <= endIndex; i++)
    {
        if(arr[pivotIndex] > arr[i])
        {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, pivotIndex, swapIndex)
    // console.log(arr);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1)
{
    if(left < right)
    {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);      
    }
    return arr;
}
console.log(quickSort([5, 9, 7, 4, 2, 3]))






// let arr11 = [1, 2, 3, 4, 5];



// console.log(arr11.slice(0,2));
// console.log(arr11);



//merge two array using sorting
// function mergeTwoArray(arr1, arr2)
// {
//     let i = 0;
//     let j = 0;
//     let result = [];
//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i]);
//             i++;
//         }
//         else{
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i < arr1.length){
//         result.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2.length){
//         result.push(arr2[j]);
//        j++;
//     }
//     return result;
// }
// console.log(mergeTwoArray([2, 3, 7, 10, 20],[1, 4, 6, 8, 15 ,56]))