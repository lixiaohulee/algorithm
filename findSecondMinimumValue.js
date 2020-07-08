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
var findSecondMinimumValue = function(root) {
    if (root === null) return -1
    let res = []
    function inOrder(root) {
        if (root) {
            res.push(root.val)
            inOrder(root.left)
            inOrder(root.right)
        }
    }
    inOrder(root)

    res = [...new Set(res)].sort((pre, next) => pre - next)
    return res.length > 1 ? res[1] : -1
};







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
var findSecondMinimumValue = function(root) {
    function helper(root, min) {
        if (root === null) return -1
        if (root.val > min) return root.val

        let l = helper(root.left, min)
        let r = helper(root.right, min)

        if (l > min && r > min) return Math.min(l, r)
        return  Math.max(l, r)
    }

    return helper(root, root.val)
};