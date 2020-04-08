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
var countNodes = function(root) {
    let l = root,
        r = root,
        lh = 0,
        rh = 0

    while(l) {
        lh++
        l = l.left
    }
    while(r) {
        rh++
        r = r.right
    }
    if (lh === rh) {
        return Math.pow(2, lh) - 1
    }
    if (root === null) return 0
    return 1 + countNodes(root.left) + countNodes(root.right) 
};