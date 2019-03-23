



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








/**
 * 平衡二叉树 也称为AVL树 原因是由于两位俄罗斯数学家名字
 * 
 * 平衡二叉树是高度平衡的 要么是个空树 要么它的左子树和右子树都是平衡二叉树且左子树和右子树的
 * 深度之差不能超过1  二叉树的左子树和右子树的深度之差称为平衡因子BF BF的值只能是-1 0 1 
 * 如果说一个二叉树上的某一个节点的平衡因子的值大于1 那么这棵树就是不平衡的
 */


