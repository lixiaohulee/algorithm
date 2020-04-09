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
var sumNumbers = function(root) {
    if (root === null) return 0


    const sumPath = (root, sum) => {
        if (root === null) return 0
        if (root.left === null && root.right === null) {
            return 10 * sum + root.val
        }

        return sumPath(root.left, 10 * sum + root.val) + sumPath(root.right, 10 * sum + root.val)
    }

    return sumPath(root, 0)
};