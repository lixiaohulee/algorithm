/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let res = 0
    let cur = 1
    function helper(root) {
        if (root === null) {
            return 
        }
        helper(root.right)
        if (cur++ === k) {
            res = root.val
        }
        helper(root.left)
    }
    helper(root)
    return res
};