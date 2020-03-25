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
let sum = 0
var bstToGst = function(root) {

        if (root === null) {
            return 
        }
        bstToGst(root.right)
        root.val += sum
        sum = root.val
        bstToGst(root.left)
        return root
};


function Node(val) {
    this.val = val
    this.left = null
    this.right = null
}

const root = new Node(0)
root.right = new Node(1)

console.log(bstToGst(root))