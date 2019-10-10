


function Node(val) {
    this.val = val
    this.next = null
}


function createList(arr) {

    const len = Array.isArray(arr) ? arr.length : 0

    if(len === 0) {
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

function print(head) {
    if (head) {
        let res = ''
        while(head) {
            res += head.next === null ? head.val : head.val + '=>'
            head = head.next
        }

        console.log(res)
    }
}



const arr = [1,2,3,4,5,6]
const head = createList(arr)
print(head)

function reverseList(head) {
    if (head === null || head.next === null) {
        return head
    }

    let preNode = null
    let nextNode = null

    while(head) {
        nextNode = head.next
        head.next = preNode
        preNode = head
        head = nextNode
    }

    return preNode
}


function 

print(reverseList(head))