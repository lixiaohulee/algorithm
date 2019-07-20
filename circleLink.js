/**
 * @file circleLink.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */

function Node(value) {
    this.value = value
    this.next = null
}

function createCircleLink(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arguments arr need a array')
    }

    if (arr.length === 0) {
        return null
    }

    const head = new Node(arr[0])
    let current = head
    let index = 1


    function insertNode(current, value) {
        if(current && current.next === null) {
            current.next = new Node(value)
            current = current.next
        }else {
            insertNode(current.next, value)
        }
    }

    while(index <= arr.length - 1) {
       insertNode(current, arr[index])
       index++
    }

    head.next.next.next = head

    return head
}

const arr = [1,2,3]
const head = createCircleLink(arr)

console.log(head.next.next.next.next)

// console.log(head.next)