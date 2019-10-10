



// /**
//  * 反转链表
//  */

// function Node(value) {
//     this.value = value
//     this.next = null
// }

// function generateLinkedList(arr) {
//     if (!Array.isArray(arr)) {
//         throw new TypeError('arr must be a array')
//     }

//     if (arr.length === 0) {
//         return null
//     }

//     const head = new Node(arr[0])
//     let tempNode = head,
//         index = 1
//     while(index <= arr.length - 1) {
//         const newNode = new Node(arr[index])
//         tempNode.next = newNode
//         tempNode = newNode
//         index++
//     }

//     return head

// }

// const arr = [2,4,4,6,85,8,943]

// const head = generateLinkedList(arr)

// function reverseLinkedList(head) {
//     if (head) {
//         if (head.next === null || head === null) {
//             return head
//         }

//         let preNode = null,
//             nextNode = null
        
//         while(head !== null) {
//             nextNode = head.next

//             head.next = preNode
//             preNode = head
//             head = nextNode
//         }

//         return preNode
//     }
// }


// // const newHead = reverseLinkedList(head)

// // console.log(newHead.value)

// function func(head, pre) {
//     let next = head.next
//     if(next === null) {
//         head.next = pre
//         return head
//     }
//     let _next = next.next
//     next.next = head
//     head.next = pre
//     if(_next === null) return
//     func(_next, next)
// }
// console.log(func(head, null))



// function func(head, pre) {
//     let next = head.next
//     if(next === null) {
//         head.next = pre
//         return head
//     }
//     let _next = next.next
//     next.next = head
//     head.next = pre
//     if(_next !== null) {
//       return func(_next, next)
//     }
//   }
//   const head = {
//     value: 4,
//     next: {
//       value: 3,
//       next: {
//         value: 2,
//         next: null
//       }
//     }
//   }
//   console.log(func(head, null))


const arr = [1,2,3,4,5,6]
function Node(val) {
    this.val = val
    this.left = null
    this.right = null
}
function createTree(arr) {
    if(arr.length === 0) return null
    const top = new Node(arr[0])
    const rest = arr.slice(1)
    if(rest.length === 0) return top
    const smaller = rest.filter(item => item <= top.val)
    const larger = rest.filter(item => item > top.val)
    top.left = createTree(smaller)
    top.right = createTree(larger)
    return top
}
console.log(createTree(arr).right.right.right)





function func(l1) {

    let stack = [];
    let p1 = l1;
    let res = null;
    let pEnd = null;
    while(p1) {
        stack.push(p1);
        p1 = p1.next;
    }
    while(stack.length) {
        if(!res) {
            res = stack.pop();
            pEnd = res;
        } else {
            pEnd.next = stack.pop();
            pEnd = pEnd.next;
            pEnd.next = null;
        }
    }
    return res;
}