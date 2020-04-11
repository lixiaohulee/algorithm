/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    if (preorder.length === 0 && inorder.length === 0) {
        return null
    }
    const root = new TreeNode(preorder[0])

    for(let i = 0; i < inorder.length; i++) {
        if (inorder[i] === root.val) {
            root.left = buildTree(preorder.slice(1, i+1), inorder.slice(0,i))
            root.right = buildTree(preorder.slice(i+1),inorder.slice(i+1))
            break
        }
    }

    return root
};
