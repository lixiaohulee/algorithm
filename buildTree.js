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
    let root = new TreeNode(preorder[0])

    let mid = inorder.indexOf(root.val)

    let inLeft = inorder.slice(0, mid) 
    let inRight = inorder.slice(mid + 1)

    let preLeft = preorder.slice(1,mid+1)
    let preRight = preorder.slice(mid+1)

    root.left = buildTree(preLeft, inLeft)
    root.right = buildTree(preRight, inRight)

    return root
};