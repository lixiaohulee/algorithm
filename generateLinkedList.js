


/**
 * @file generateLinkedList.js
 * @author lixiaohu 
 */


//链表节点

function Node(value) {

    this.value = value
    this.nextNode = null
}

//生成链表

function linkedList(arr) {
    if (!Array.isArray(arr) || arr.length < 1) {
        return arr
    }
    
    const headNode = new Node(arr[0])
    let currentNode = headNode

    arr.forEach((item, index) => {
        if (index !== 0) {
            const newNode = new Node(item)
            currentNode.nextNode = newNode
            currentNode = currentNode.nextNode
        }
    })

    return headNode
}


const arr = [1,2,3,4,56,7,'asfas','asdfasdf',454,4,6,3,3]

const headNode = linkedList(arr)


//遍历链表

function viewLinkList(node) {
    if (typeof node !== 'object') {
        return 
    }

    if (node.nextNode === null) {
        return node.value
    } 

    let nodeList = ``
    while(node !== null) {
        nodeList += node.value
        node = node.nextNode
        node !== null
          ? nodeList += '=>'
          : null
    }
    console.log('')
    console.log(nodeList)
    console.log('')
}

viewLinkList(headNode)


