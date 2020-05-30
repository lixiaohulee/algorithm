/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null && n === 1) return null
    let fast = head
    let slow = head
    
    while(n > 0) {
        fast = fast.next
        n--
    }

    if (fast === null) {
        return head.next
    }


    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next
    return head
};


function Node(val) {
    this.val = val
    this.next = null
}

function generateList(arr) {
    let head = new Node(arr[0])
    let temp = head
    let index = 1

    while(index < arr.length) {
        temp.next = new Node(arr[index])
        temp = temp.next
        index++
    }

    return head
}

function print(head) {
    while(head) {
        console.log(head.val)
        head = head.next
    }
}


print(removeNthFromEnd(generateList([1,2,3,4,5]), 1))