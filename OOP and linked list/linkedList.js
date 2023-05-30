//single linked list
class Singlelinklist{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty()
    {
        return this.length === 0;
    }
    push(value){
        let newNode = {
            value:value,
            next:null
        }
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop()
    {
        if(!this.head) return null;
        if(this.length === 1){
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removedNode;
        }
        let currentNode = this.head;
        let lastNode = this.tail;
        let newLastNode;
        while(currentNode)
        {
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

    shift()
    {
        if(!this.head) return null;
        let currentNode = this.head;
        // currentNode.next = this.head;
        this.head = currentNode.next;
        this.length--;
        if(this.length === 1) {
            this.tail = null;
        }
    return currentNode;
    }

    //unshift
    unshift(value)
    {
        let newNode = {
            value:value,
            next: null
        }
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    
}
const singleLinkList = new Singlelinklist();
singleLinkList.push(10);
singleLinkList.push(15);
singleLinkList.push(20);
// console.log(singleLinkList.head);
// console.log(singleLinkList.tail);
// console.log(singleLinkList.head.next);
// singleLinkList.pop();
// singleLinkList.pop();
singleLinkList.shift();
singleLinkList.unshift(39);
singleLinkList.unshift(50);
console.log(singleLinkList);