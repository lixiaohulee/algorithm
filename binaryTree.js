



/**
 * @file binaryTree.js
 * @author lixiaohu
 */


//节点类

function Node(val) {
    this.val = val
    this.leftChild = null
    this.rightChild = null
}

function createTree(arr) {

    if (!Array.isArray(arr) || arr.length < 1) {
        return arr
    }

    const root = new Node(arr[0])

    let index = 1
    let curNode = root

    while(arr[index] !== undefined) {
        
        if (curNode.leftChild === null) {
            const node = new Node(arr[index])
            curNode.leftChild = node
            index++
            continue
        }
        if (curNode.rightChild === null) {
            const node = new Node(arr[index])
            curNode.rightChild = node
            index++
            continue
        }

        curNode = curNode.leftChild
    }

    return root
}


const arr = [1,2,3,4,5,6,7]

const root = createTree(arr)

console.log(root.leftChild.rightChild.val)


