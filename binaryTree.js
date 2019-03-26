



/**
 * @file binaryTree.js
 * @author lixiaohu
 */


 /**
  * 二叉树是树的一种，每个节点最多可具有两个子树，即结点的度最大为2（结点度：结点拥有的子树数）
  */

//节点类

// function Node(val) {
//     this.val = val
//     this.leftChild = null
//     this.rightChild = null
// }

// function createTree(arr) {

//     if (!Array.isArray(arr) || arr.length < 1) {
//         return arr
//     }

//     const root = new Node(arr[0])

//     let index = 1
//     let curNode = root

//     while(arr[index] !== undefined) {
        
//         if (curNode.leftChild === null) {
//             const node = new Node(arr[index])
//             curNode.leftChild = node
//             index++
//             continue
//         }
//         if (curNode.rightChild === null) {
//             const node = new Node(arr[index])
//             curNode.rightChild = node
//             index++
//             continue
//         }

//         curNode = curNode.leftChild
//     }

//     return root
// }


// const arr = [1,2,3,4,5,6,7]

// const root = createTree(arr)

// console.log(root.leftChild.rightChild.val)





/**
 * 定义
 * 1. 空树
 * 2. 若它的左子树不为空 则左子树上的所有节点的值都小于根结点的值
 * 3. 若它的右子树不为空 则右子树上的所有节点的值都大于根节点的值
 * 4. 它的左右子树都是二叉查找树
 */


function Node(val) {
    this.val = val
    this.leftNode = null
    this.rightNode = null
}

function createBinarySortTree(arr) {

    if (!Array.isArray(arr)) {
        return new TypeError('expected a array')
    }


    if (arr.length === 0) {
        return null
    }

    const root = new Node(arr[0])
    


    let index = 1
    

    while(index <= arr.length - 1) {
        initNode(root, arr[index])
        index++
    }


    return root

}

function initNode(node, val) {
    let curNode = node

    if (val <= curNode.val) {
        if(curNode.leftNode !== null) {
            initNode(curNode.leftNode, val)
            return
        }
        curNode.leftNode = new Node(val)
    }else {
        if (curNode.rightNode !== null) {
            initNode(curNode.rightNode, val)
            return
        }
        curNode.rightNode = new Node(val)
    }
}


const arr = [8,6,3,74,8,4,2,6,0,3,8,2,7,2,2,7,2,51,2,3,4]

const root = createBinarySortTree(arr)

console.log(root.rightNode.leftNode.val)











/**
 * 平衡二叉树 也称为AVL树 原因是由于两位俄罗斯数学家名字
 * 
 * 平衡二叉树是高度平衡的 要么是个空树 要么它的左子树和右子树都是平衡二叉树且左子树和右子树的
 * 深度之差不能超过1  二叉树的左子树和右子树的深度之差称为平衡因子BF BF的值只能是-1 0 1 
 * 如果说一个二叉树上的某一个节点的平衡因子的值大于1 那么这棵树就是不平衡的
 */


