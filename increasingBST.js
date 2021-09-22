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
var increasingBST = function(root) {
    let arr = []
    function inOrder(root) {
        if (root) {
            inOrder(root.left)
            arr.push(root)
            inOrder(root.right)
        }
    }
    
    inOrder(root)
    for(let i = 0, len = arr.length; i < len; i++) {
        if (arr[i+1]) {
            arr[i].left = null
            arr[i].right = arr[i+1]
        }
    }
    return arr[0]


};

