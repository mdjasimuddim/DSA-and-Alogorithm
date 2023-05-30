// #reverse the linked list 
// Middle of the linked list
// linked list cycle
// palindrome linked list
// intersection of two linked list


//Remove nth item from the end of the linked list
//add two number
//even odd linked
// sort list


//Reverse linked list
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let forw = null;
    while(curr !== null)
    {
        forw = curr.next;
        curr.next = prev;
        prev = curr;
        curr = forw;
    }
    return prev;
};

//middle of the linked list
var middleNode = function(head) {
    if(head == null || head.next == null) return head;
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
 };

 //linked list cycle
 var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) return true;
    }
    return false;
};


