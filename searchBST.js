/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root === null) return null
    let res = null
    let tempFunc = function(root) {
        if (root) {
            if(root.val === val) {
                res = root
            }
            tempFunc(root.left)
            tempFunc(root.right)
        }
    }
    tempFunc(root,val)
    return res
};