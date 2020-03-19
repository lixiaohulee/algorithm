





function Node(val) {
    this.val = val
    this.next = null
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)

function reverseList(head) {
    if (head === null || head.next === null) {
        return head
    }

    const newHead = reverseList(head.next)
}

reverseList(head)