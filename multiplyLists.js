



function Node(val) {
    this.val = val
    this.next = null
}

function createLinkedList(arr) {
    const len = Array.isArray(arr) ? arr.length : 0

    if (len === 0) {
        return null
    }

    const head = new Node(arr[0])
    let curNode = head
    let index = 1
    while(index <= len -1) {
        curNode.next = new Node(arr[index])
        curNode = curNode.next
        index++
    }

    return head
} 

function printList(head) {
    let res = ''
    while(head) {
        res += head.val
        head = head.next
        head ? res += '=>' : null
    }
    console.log(res)
}

const arr1 = [9,4,6]
const arr2 = [8,4]

const head1 = createLinkedList(arr1)
const head2 = createLinkedList(arr2)

printList(head1)
printList(head2)


const multiplyLists = function (l1, l2) {
    // write your code here
    const l1Nums = []
    const l2Nums = []
    
    while(l1) {
        l1Nums.push(l1.val)
        l1 = l1.next
    }
    
    while(l2) {
        l2Nums.push(l2.val)
        l2 = l2.next
    }
    let num1 = 0
    let num2 = 0

    
    l1Nums.reverse().forEach((num, index) => num1 += num * Math.pow(10, index))
    l2Nums.reverse().forEach((num, index) => num2 += num * Math.pow(10, index))

    
    return num1 * num2
}

console.log(multiplyLists(head1, head2))
