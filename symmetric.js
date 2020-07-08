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
var isSymmetric = function(root) {
    if (root === null) return true
    let res = true
    function helper(left, right) {
        if (left === null && right === null) {
            res = res && true
            return 
        }else if (left && right){
            if (left.val === right.val) {
                res = res && true
                helper(left.left, right.right)
                helper(left.right, right.left)
            }else {
                res = res && false
                return
            }
        }else {
            res = res && false
            return 
        }
    }

    helper(root.left, root.right)
    return res
};


function isSymmetric(root) {
    if (root === null) return true
    function helper(left, right) {
        if (left === null && right === null) return true
        if (left === null || right === null) return false
        if (left.val !== right.val) return false

        return helper(left.left, right.right) && helper(left.right, right.left)
    }

    return helper(root.left, root.right)
} 