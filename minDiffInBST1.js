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
var minDiffInBST = function(root) {
    let min = Number.MAX_VALUE
    let preNode = null
    const inOrder = root => {
        if (!root) return 
        inOrder(root.left)
        if (preNode) {
            min = Math.min(root.val - preNode.val, min)
        }
        preNode = root
        inOrder(root.right)
    }

    inOrder(root)
    return min
};