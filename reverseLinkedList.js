



/**
 * 反转链表
 */

function Node(value) {
    this.value = value
    this.next = null
}

function generateLinkedList(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr must be a array')
    }

    if (arr.length === 0) {
        return null
    }

    const head = new Node(arr[0])
    let tempNode = head,
        index = 1
    while(index <= arr.length - 1) {
        const newNode = new Node(arr[index])
        tempNode.next = newNode
        tempNode = newNode
        index++
    }

    return head

}

const arr = [2,4,4,6,85,8,943]

const head = generateLinkedList(arr)

function reverseLinkedList(head) {
    if (head) {
        if (head.next === null || head === null) {
            return head
        }

        let preNode = null,
            nextNode = null
        
        while(head !== null) {
            nextNode = head.next

            head.next = preNode
            preNode = head
            head = nextNode
        }

        return preNode
    }
}


const newHead = reverseLinkedList(head)

console.log(newHead.next.value)

