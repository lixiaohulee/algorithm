/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 && postorder.length === 0) {
        return null
    }

    const root = new TreeNode(postorder[postorder.length -1])
    
    for(let i = 0; i <= inorder.length; i++) {
        if (inorder[i] === root.val) {
            root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
            root.right = buildTree(inorder.slice(i+1), postorder.slice(i, postorder.length - 1))
            break
        }
    }
    return root
};