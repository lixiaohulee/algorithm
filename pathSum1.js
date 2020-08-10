/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let res = 0
    
    function helper(root, preSum) {
        if (root === null) return 
        preSum += root.val
        if (preSum === sum) res++
        helper(root.left, preSum)
        helper(root.right, preSum) 
    }
    
    function inOrder(root) {
        if (root) {
            helper(root, 0)
            inOrder(root.left)
            inOrder(root.right)
        }
    }

    inOrder(root)

    return res
};