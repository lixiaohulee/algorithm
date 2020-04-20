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
var getMinimumDifference = function(root) {
    let res = []
    let min = Number.MAX_VALUE
    function helper(root) {
        if (root === null) {
            return 
        }
        helper(root.left)
        res.push(root.val)
        helper(root.right)
    }
    helper(root)
    for(let i = 0; i <= res.length; i++) {
        if (res[i+1] !== undefined) {
            const delta = Math.abs(res[i] - res[i+1])
            min = Math.min(delta, min)
        }
    }

    return min
};



var getMinimumDifference = function(root) {
    let preNode = null
    let min = Number.MAX_VALUE
    function helper(root) {
        if (root === null) return 
        helper(root.left)
        if (preNode) {
            const delta = Math.abs(preNode.val - root.val)
            min = Math.min(min, delta)
        }
        preNode = root
        helper(root.right)
    }
    helper(root)
    return min
};