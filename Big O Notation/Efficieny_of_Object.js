//Object
const obj = {
    'name':'md jasim uddim',
    '1ema il':'mdjasimuddimruet@gmail.com'    //invalid key
}
//Add element from obj O(1)

obj.profession = 'student';
console.log(obj);

//delete O(1)
delete obj.profession;
console.log(obj);

//access element from object O(1)

console.log(obj.name);
console.log(obj['name']);
console.log(obj['1ema il'])

//searching O(1)

console.log('1ema il' in obj);

//Searching O(n)
for(let x in obj){
    if(obj[x] == 'md jasim uddim')
    {
        console.log(true);
    }
}
