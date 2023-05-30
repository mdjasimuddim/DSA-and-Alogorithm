class Node{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0;
    }
    //push the value in linked list
    push(value){
        let nodeList = new Node(value);
        if(this.isEmpty()){
            this.head = nodeList;
            this.tail = nodeList;
        }else{
            this.tail.next = nodeList;
            this.tail = nodeList;
        }
        this.length++;
    }
    //pop the value in linked list
    pop()
    {
        if(!this.head) return null;
        if(this.length === 1){
            let removeNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removeNode;
        }
        let currentNode = this.head;
        let lastNode = this.tail;
        let newLastNode;
        while(currentNode){
            if(currentNode.next == this.tail)
            {
                newLastNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length--;
        return lastNode;
    }
    //add the element in the first index
    unshift(value)
    {
        let nodeList = new Node(value);
        if(this.isEmpty())
        {
            this.tail = nodeList;
            this.head = nodeList;
        }else{
            nodeList.next = this.head;
            this.head = nodeList;
        }
        this.length++;
    }
    //remove first element from the list
    shift()
    {
        if(!this.head) return null;
        let currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        if(this.length === 1){
            this.tail = null;
        }
        return currentNode;
    }
    showList()
    {
        let arr = [];
        let currentNode = this.head;
        while(currentNode)
        {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

const singleLinkedList = new SingleLinkedList();
singleLinkedList.push(10);
singleLinkedList.push(20);
singleLinkedList.push(30);
singleLinkedList.pop();
singleLinkedList.unshift('jasim');
singleLinkedList.shift();
singleLinkedList.push('rahim');
singleLinkedList.push('korim');
console.log(singleLinkedList.showList());
console.log(singleLinkedList)


//Time complexity of push is O(1)
//Time complexity of pop is O(n)
//Time complexity of shift is O(1)
//Time complexity of unshift is O(1)
//Time complexity of showlist is O(n)

