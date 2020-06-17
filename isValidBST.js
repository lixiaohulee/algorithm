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
var isValidBST = function(root) {
    let preNodeVal = -Number.MAX_VALUE
    function helper(root) {
        if (root === null) return true
        let res = true
        res = res && helper(root.left)
        if (preNodeVal < root.val) {
            preNodeVal = root.val
        }else {
            return false
        }
        res = res && helper(root.right)
        return res
    }
    return helper(root)
};