//linked list
//many of node connected one to each other
//each node has value and connected to other node with next pointer....(by default null)

//sinlge linked list(one node connected to another with one direction)
//double linked list(one node connected to another with both direction)

//Boiler plate of creating Object using Class

// class Person{
//     //properties
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     //methods
//     walk()
//     {
//         console.log(this.name + ' is capable of walking');
//     }
// }

// const person1 = new Person('jasim uddim', 25);
// console.log(person1.name);
// console.log(person1.age);
// person1.walk();


//create linked list
class Node{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

// const newNode = new Node(10);
// console.log(newNode);

class NodeList{
    constructor(value)
    {
        const newNode = new Node(10);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    //adding node end of the linked list
    //time complexity is O(1)
    push(value)
    {
        const newNode = new Node(value);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }   
        this.length++;
    }
    //adding node at the first of the linked list
    //time complexity is O(1)
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    //remove from the begining
    //time complexity is O(1)
    shift(){
        if(!this.head) return null;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
    }
    //remove node from the end
    // time complexity is O()
    pop()
    {
        if(!this.head) return null;
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.length = null;
        this.length--;
        if(this.length == 0)
        {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    //find item at specific index
    // time complexity O(n)
    get(index)
    {
        if(index < 0 || index >= this.length) return null;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }
    //inserting item at specific index
    //time complexity O(n)
    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.value = temp;
            return true;
        }
        return false;
    }
    //inserting node at specific index
    insert(index, value)
    {
        //validate index
        if(index < 0 || index > this.length) return false;
        //inserting node at the beginning 
        if(index == 0) return this.unshift(value);
        //inserting node at the node
        if(index === this.length) return this.push(value);
        //inserting in between
        const newNode = new Node(value);
        //stopping just before the index node
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
    //removing item at specific index
    remove(index)
    {
        if(index < 0 || index >= this.length) return false;
        //removing from the beginning
        if(index === 0) return this.shift();
        //removing from the end
        if(index === this.length - 1) return this.pop();
        const prevRef = this.get(index - 1);
        let temp = prevRef.next;
        prevRef.next = temp.text;
        temp.next = null;
        this.length--;

        return temp;
    }
    //reversing the linked list
    reverse()
    {
        //changing the head to tail, tail to head
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        //working with three pointer
        let next = temp.next;
        prev = null;
        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }
}

const nodeList = new NodeList(10);
nodeList.push(15);
nodeList.unshift(12)
nodeList.insert(2,30);
nodeList.remove(1)
console.log(nodeList.set(1,20));
console.log(nodeList);

//comparision between array and single linked list
// [1,3,4,5,7]
//      array    -- linked list
//push  O(1)     -- O(1)
//pop   O(1)     -- O(n)
//shift  O(n)    -- O(1)
//unshift O(n)   -- O(1)
//start it depends start (?) and mid (?) - mid O(n)
//remove it depends start (?) and mid (?) - mid O(n)
//access O(1) -- O(n)


