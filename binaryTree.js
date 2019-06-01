



/**
 * @file binaryTree.js
 * @author lixiaohu
 */




 /**
  * 二叉树的定义
  * 1. 空树
  * 2. 仅有一个节点的二叉树
  * 3. 仅有左子树而右子树为空的二叉树
  * 4. 仅有右子树而右子树为空的二叉树
  * 5. 是左，右子树均非空的二叉树
  * 6. 每个节点左子节点的值比它小，右子节点的值比它大
  */


function Node(value) {
    this.value = value
    this.leftNode = null
    this.rightNode = null
}

function createBinaryTree(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            return null
        }

        if (arr.length === 1) {
            return new Node(arr[0])
        }

        const root = new Node(arr[0])
        let currentNode = root
        let index = 1
        while(index <= arr.length -1) {
            const curVal = arr[index]
            if (curVal < currentNode.value) {
                
            }
        }
    }
}





