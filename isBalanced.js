/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    return balanced(root) !== -1
    
    function balanced(root) {
        if (root === null) {
            return 0
        }

        let left = balanced(root.left)
        let right = balanced(root.right)

        if (left === -1 || right === -1) {
            return -1
        }else {
            return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1
        }
    }
};