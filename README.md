<!--This is Data Structure and Algorithm Folder -->
---
I have added all the core algorithm and Data sturcture here.  
### Recursion
<p>Print 1 to 10 numbers without Using Loop</p>

```javascript
function printNumber(num){
  console.log(num);
  if(num == 1) return;
  return printNumber(num-1);
}
printNumber(10);
```
__CSS__
---
```css
#child-element{
  color:red;
  font-size:20px;
  text-transform:capitalize;
}
```

__Complexity__
1. Time Complexity
2. Space Complexity

__Searching Algorithm__
1. Linear Search
2. Binary Search

__Complexity List__
- O(1)
- O(logn)
- O(n)
- O(nlogn)
- O(n^2)
- O(2^n)
- O(n^3)
- O(n!)
__Sorting Algorithm__
- [x] Bubble Sort
- [x] Selection Sort
- [x] Insertion Sort
- [x] Quick Sort
- [x] Merge Sort
- [ ] Radix Sort
