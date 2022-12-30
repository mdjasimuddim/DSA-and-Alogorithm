//Knuth-Moris-Pratt
var isPalindrome = function(x) {
    let str = x.toString().split('').reverse().join('');
    let num = Number(str);
    if(num == x){
        return true;
    }else{
        return false;
    }
};
console.log(isPalindrome(-121));

var isPalindrome = function(x) {
    let num = 0;
    let temp = x;
    let div ;
    while(x!=0){
        div = x % 10;
        num = num * 10 + div;
        x = Math.floor(x / 10);
    }
    if(temp == num){
        return true;
    }else{
        return false;
    }
};
console.log(isPalindrome(121));


function buildPrefixTable(s)
{
    const table = [0]
    let i = 1;
    let j = 0;
    while(i < s.length){
        if(s[i] === s[j]){
            j++;
            table[i] = j;
            i++;
        }
        else if(j>0){
            j = table[j - 1]
        }else{
            table[i] = 0;
            i++;
        }
    } 
    return table;
}


var substr = function(string, substring)
{
    if(substring == ' ') return 0;
    let prefixTable = buildPrefixTable(substring);
    let i = 0;
    let j = 0;
    while(i < string.length && j < substring.length){
        if(string[i] === substring[j]){
            i++;
            j++;
        }else if (j > 0){
            j = prefixTable[j-1];
        }else{
            i++;
        }
    }
    return j === substring.length ? i-j : -1;
}
console.log(substr('abceabcd', 'abcd'))
