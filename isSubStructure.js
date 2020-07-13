/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (A === null || B === null) return false
    function isSubTree(A, B) {
        if (B === null) return true
        if (A === null) return false
        return A.val === B.val && isSubTree(A.left, B.left) && isSubTree(A.right, B.right)
    } 

    return isSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};