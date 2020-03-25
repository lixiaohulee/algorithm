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
var inorderTraversal = function(root) {
    let stack = []
    let p = root
    let res = []

    while(p !== null || stack.length > 0) {
        while(p !== null) {
            stack.push(p)
            p = p.left
        }

        if (stack.length > 0) {
            p = stack.pop()
            res.push(p.val)
            p = p.right
        }
    }

    return res
};



//递归
function inOrder(root) {
    if (!root) return 

    let res = []
    inOrder(root.left)
    res.push(root.val)
    inOrder(root.right)
}