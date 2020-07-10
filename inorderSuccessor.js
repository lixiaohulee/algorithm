/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let res = []
    function helper(root) {
        if (root === null) return 
        helper(root.left)p
        res.push(root.val)
        helper(root.right)
    }
    helper(root)

    let targetIndex = res.findIndex(num => num === p.val)
    if (undefined !== res[targetIndex + 1]) return res[targetIndex + 1]
    return null
};

function Node(val) {
    this.val = val
    this.left = this.right = null
}

const root = new Node(2)
root.left = new Node(1)
root.right = new Node(3)

console.log(inorderSuccessor(root, new Node(1)))