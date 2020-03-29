/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return []
    let res = []
    let stack = []

    stack.push(root)
    while(stack.length > 0) {
        let top = stack.pop()
        res.push(top.val)
        if (top.right) stack.push(top.right)
        if (top.left) stack.push(top.left)
    }

    return res
};