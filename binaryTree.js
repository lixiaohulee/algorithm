



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
  * 6. 度是节点拥有的子树的个数
  * 
  * 
  * 二叉搜索树===二叉排序树
  * 每个节点左子节点的值比它小，右子节点的值比它大
  * 这种树按照中序遍历出的结果就是单调的 单调递增或者单调递减
  */


function Node(value) {
    this.value = value
    this.leftNode = null
    this.rightNode = null
}

function createBinaryTree(arr) {
    if (arr.length === 0) {
        return null
    }
    if (arr.length === 1) {
        return new Node(arr[0])
    }
    const root = new Node(arr[0])
    let index = 1
    while(index <= arr.length - 1) {
        const current = arr[index]
        addNode(root, current)
        index++
    }
    return root
}

function addNode(root, addValue) {
    if (root instanceof Node) {
        if (addValue < root.value) {
            if (root.leftNode !== null) {
                addNode(root.leftNode, addValue)
            }else {
                root.leftNode = new Node(addValue)
            }
        }else {
            if (root.rightNode !== null) {
                addNode(root.rightNode, addValue)
            }else {
                root.rightNode = new Node(addValue)
            }
        }
    }
}


/**
 * 中序遍历
 * @param {Node} root 
 */
function mediumOrder(root) {
    if (root !== null) {
        mediumOrder(root.leftNode)
        console.log(root.value)
        mediumOrder(root.rightNode)
    }
}

/**
 * 先序遍历
 * @param {Node} root
 */
function preordering(root) {
    if(root !== null) {
        console.log(root.value)
        preordering(root.leftNode)
        preordering(root.rightNode)
    }
}

/**
 * 后序遍历
 * @param {Node} root
 */
function postOrder(root) {
    if(root !== null) {
        postOrder(root.rightNode)
        console.log(root.value)
        postOrder(root.leftNode)
    }
}



const arr = [1,3,653,2,6,7,3,7,8,4,3,7,4,3]

const root = createBinaryTree(arr)

// mediumOrder(root)
preordering(root)
// postOrder(root)








