/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let inorder = preorder.slice().sort((pre, next) => pre - next)
    function createTree(preorder, inorder) {
        if (!preorder.length) return null
        const root = new TreeNode(preorder[0])
        const index = inorder.indexOf(root.val)
        root.left = createTree(preorder.slice(1,index+1), inorder.slice(0,index))
        root.right = createTree(preorder.slice(index+1), inorder.slice(index+1))

        return root
    }

    return createTree(preorder, inorder)
};