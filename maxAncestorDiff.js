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
var maxAncestorDiff = function(root) {
    let max = -Number.MAX_VALUE
    function getCurNodeMaxDelta(root, root1) {
        if (root1 === null) return 
        max = Math.max(Math.abs(root.val - root1.val), max)
        getCurNodeMaxDelta(root, root1.left)
        getCurNodeMaxDelta(root, root1.right)
    }

    function helper(root) {
        if (root) {
            getCurNodeMaxDelta(root, root)
            helper(root.left)
            helper(root.right)
        }
    }

    helper(root)

    return max
};



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
var maxAncestorDiff = function(root) {
    let max = -Number.MAX_VALUE
    function dfs(root, maxVal, minVal) {
        if (root === null) return 
        max = Math.max(Math.abs(root.val - maxVal), max)
        max = Math.max(Math.abs(root.val - minVal), max)

        maxVal = maxVal - root.val > 0 ? maxVal : root.val
        minVal = minVal - root.val < 0 ? minVal : root.val

        dfs(root.left, maxVal, minVal)
        dfs(root.right, maxVal, minVal)
    }

    dfs(root, root.val, root.val)
    return max
};