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
var maxPathSum = function(root) {
    let max = -Number.MAX_VALUE
    function helper(root) {
        if (root === null) return 0

        let left = helper(root.left) 
        let right = helper(root.right)

        left = left > 0 ? left : 0
        right = right > 0 ? right : 0

        max = Math.max(max, left + right + root.val)
        return Math.max(left, right) + root.val
    }
    helper(root)
    return max
};