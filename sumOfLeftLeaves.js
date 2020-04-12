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
var sumOfLeftLeaves = function(root) {
    let sum = 0

    function preOrder(root) {
        if (!root) return 
        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val
        }

        preOrder(root.left)
        preOrder(root.right)
    }
    preOrder(root)

    return sum
};



var sumOfLeftLeaves = function(root, isLeft = false) {
    if (root === null) return 0
    if (root.left === null && root.right === null) {
        return isLeft ? root.val : 0
    }
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
};