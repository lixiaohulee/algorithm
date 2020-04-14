/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function inOrder(p,q) {
        if (p === null && q === null) {
            return true
        }
        if (p && q && p.val === q.val) {
            return inOrder(p.left, q.left) && inOrder(p.right, q.right)
        }else {
            return false
        }
    }
    return inOrder(p,q)
};