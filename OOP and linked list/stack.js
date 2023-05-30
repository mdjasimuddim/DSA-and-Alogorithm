
//stack - last in first out;
// class Stack{
//     constructor()
//     {
//         this.arr = [];
//     }
//     //push
//     push(value)
//     {
//          this.arr.push(value);      //return this.arr.push(value) returns the length of the array
//          return this.arr;
//     }
//     //pop
//     pop()
//     {
//          this.arr.pop();            //return this.arr.pop() returns the last element of the array
//          return this.arr;
//     }
//     //last element
//     peek()
//     {
//         return this.arr.length;
//     }
// }
// let stack = new Stack();
// console.log(stack.push(10));
// console.log(stack.push(10));
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.push(20))


//another stack implementation
class Stack1
{
    constructor()
    {
        this.storage = {};
        this.count = 0;
    }
    added(value)
    {
        this.count++;
        this.storage[this.count] = value;
        return this.storage;
    }
    remove()
    {
        let deleteItem = this.storage[this.count];
        delete this.storage[this.count];
        // console.log(deleteItem);
        this.count--;
        return deleteItem;
    }

    peek()
    {
        return this.storage[this.count];
    }
}


let stack1 = new Stack1();
console.log(stack1.added(10));
console.log(stack1.added(20));
console.log(stack1.added(30));
console.log(stack1.remove());
console.log(stack1.peek());