function print_value(n){
    return n*(n+1)/2;
}
console.log(print_value(100));

// Time complexity is analysed for :
//     very large input size 
//     worst case scenario 
// T(n) = 2n^2 + 3n +1 

//Drop all constant multiplier
//Drop lower order terms

// 1)Loop 
// let n = 10;
// for(let i = 0; i<=n; i++){
//     x = y + z;   //constant time = c
// = cn 
// = o(n)
// }

// 2) Nested Loop 
// for(i = 1; i <= n; i++){  //n times
//     for(j = 1; j <= n;j++){ //n times
//         x = y + z; //constant time cn^2 = o(n^2)
//     }
// }


// 3) Sequential Statement 
// i) a = a + b    //constant time = c1
// ii) for(let i = 1; i<=n; i++){
//     x = y +z;  //constant time = c2n
// }
// iii) for (let j = 1; j <= n; j++){
//     c = d +e   //constant time = c3n
// }
// c = c1 + c2n +c3n
// =O(n)


let startAt = performance.now();
for(let i = 0; i <= 10000; i++)
{
    console.log(i);
}
let endAt = performance.now();
console.log(`${endAt - startAt}`)


 startAt = performance.now();
for(let i = 0; i <= 10000; i++)
{
    console.log(i);
}
 endAt = performance.now();
console.log(`${endAt - startAt}`)