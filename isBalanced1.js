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
    function getDepth(root) {
        if (root === null) return 0
        let left = getDepth(root.left) + 1
        let right = getDepth(root.right) + 1

        return Math.max(left, right)
    }

    let res = true
    function helper(root) {
        if (root) {
            let left = getDepth(root.left)
            let right = getDepth(root.right)

            res = res && Math.abs(left - right) <= 1 

            helper(root.left)
            helper(root.right) 
        }
    }

    helper(root)
    return res
}