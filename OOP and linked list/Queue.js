//Queue
//first in first out

class Queue{
    constructor(){
        this.arr = [];
    }
    push(value){
        this.arr.unshift(value);
        return this.arr;
    }
    pop(){
        this.arr.pop();
        return this.arr;
    }
    lastELement()
    {
        return this.arr[this.arr.length - 1];
    }
}
const queue1 = new Queue();
console.log(queue1.push('jasim'));
console.log(queue1.push('nahid'));
console.log(queue1.push('delowar'));
console.log(queue1.lastELement());
console.log(queue1.pop());
