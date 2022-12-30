//Binary Search
//Divide and Conquer
//Condition for Binary search -> array must sorted
//arr[1,2,3,4,5,6]
//time complexity is -> big o of log 2 base n or O(logn)
function BinarySearch(arr,searchElement)
{
    let low = 0;
    let high = arr.length - 1;
    while(low <= high)
    {
        mid = Math.floor((low + high)/2);
        midValue = arr[mid];
        if(midValue == searchElement) return mid;
        else if (midValue<searchElement){
            low = mid + 1;
        }else{
            high = mid - 1
        }
    }
    return -1;
}
console.log(BinarySearch([1,2,3,4,5,6],10))

//insert position

var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        let midValue = nums[mid];
        if(midValue == target) {
            return mid;
        }
        else if (midValue < target){
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return low;
};
console.log(searchInsert([1,3,5,6],7))