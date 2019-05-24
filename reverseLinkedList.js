



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

    const headNode = new Node(arr[0])
    let tempNode = headNode,
        index = 1
    while(index <= arr.length - 1) {
        const newNode = new Node(arr[index])
        tempNode.next = newNode
        tempNode = newNode
        index++
    }

    return headNode

}

const arr = [2,4,4,6,85,8,943]

const head = generateLinkedList(arr)

console.log(head.next.next.next.value)


function reverseLinkedList(headNode) {
    if (headNode) {
        if (headNode.next === null) {
            return headNode
        }

        let tempNode = headNode.next
        
    }
}