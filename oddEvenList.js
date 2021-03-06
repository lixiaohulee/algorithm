<<<<<<< HEAD



function Node(val) {
    this.val = val
    this.next = null
}

function print(head) {
    while(head) {
        console.log(head.val)
        head = head.next
    }
}



var oddEvenList = function(head) {
    if (head === null || head.next === null || head.next.next === null) {
        return head
    }
    let lastOdd = head,
        firstEven = head.next
        visitor = head,
        index = 1

    while(visitor) {
        if (index % 2 === 0 && visitor.next) {
            let aNewOdd = visitor.next,
                theRest = visitor.next.next

            visitor.next = theRest
            lastOdd.next = aNewOdd
            aNewOdd.next = firstEven

            lastOdd = aNewOdd
            index++
        }else {
            visitor = visitor.next
            index++
        }
    }
    return head
};


const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


console.log(head)

console.log(print(oddEvenList(head)))
=======
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null || head.next === null || head.next.next === null) return head
    let oddHead = head,
        evenHead = head.next,
        tempHead = head.next

    while(oddHead.next && evenHead.next) {
        oddHead.next = evenHead.next
        oddHead = oddHead.next
        evenHead.next = oddHead.next
        evenHead = evenHead.next
    }

    oddHead.next = tempHead
    return head
};
>>>>>>> bbb148b487019e4cccc954585877056e87976156
