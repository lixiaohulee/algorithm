/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (root === null) return null
    function helper(root) {
        if (root === null) return null
        let temp = root.left
        root.left = root.right
        root.right = temp
        helper(root.left)
        helper(root.right)
    }
    helper(root)
    return root
};
