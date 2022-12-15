//When to use array
    // if Order is Important then use Array
    //when you need faster access (by index) or
    //adding or removal (at the end)

// when to use Object 
    //if Order is not important then use Object
    //When we need faster access or removal

//Object.keys()
const obj = {
    name:'md jasim uddim',
    age:25,
    gmail:'mdjasimuddim231@gmail.com'
}
console.log(Object.keys(obj))//O(n)

//Object.values()
console.log(Object.values(obj));

//Object.entries()
console.log(Object.entries(obj));
