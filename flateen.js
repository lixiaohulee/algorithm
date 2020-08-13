/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const list = []
    function preOrder(root) {
        if (root) {
            list.push(root)
            preOrder(root.left)
            preOrder(root.right)
        }
    }

    preOrder(root)

    for(let i = 0, len = list.length; i < len; i++) {
        list[i].right = list[i+1] || null
        list[i].left = null
    }
};