



function Node(val) {
    this.val = val
    this.left = null
    this.right = null
}


let res = 0
const updateRes = function(root) {
    if (root === null) {
        //终止条件
        return 0
    }

    let left = updateRes(root.left)
    let right = updateRes(root.right)

    if (root.left && root.val === root.left.val) {
        left++
    }
    if (root.right && root.val === root.right.val) {
        right++
    }
    res = Math.max(res, left + right)
    return Math.max(left, right)
}
var longestUnivaluePath = function(root) {
    updateRes(root)
    return res
};

const root = new Node(5)
root.left = new Node(4)
root.right = new Node(5)

root.left.left = new Node(2)
root.left.right = new Node(3)

root.right.right = new Node(5)

root.right.left = new Node(5)
root.right.left.left = new Node(5)


longestUnivaluePath(root)
console.log(res)




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    if (root === null) return 0
    let longest = 0
    function getMax(root, val) {
        if (root === null) return 0
        let left = getMax(root.left, root.val)
        let right = getMax(root.right, root.val)

        let arrowLeft = 0
        let arrowRight = 0

        if (root.left && root.left.val === root.val) arrowLeft = left + 1
        if (root.right && root.right.val === root.val) arrowRight = right + 1

        longest = Math.max(longest, arrowRight + arrowLeft)
        return Math.max(arrowLeft, arrowRight)
    }

    getMax(root, root.val)
    return longest
};