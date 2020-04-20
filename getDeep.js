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
var getDeep = function(root) {
    if (root === null) {
        return 0
    }

    return 1 + Math.max(getDeep(root.left), getDeep(root.right))
}
var deepestLeavesSum = function(root) {
    let res = 0
    let deep = getDeep(root)

    function getSum(root, curDeep, deep) {
        if (root === null) return 
        if (root.left === null && root.right === null) {
            if (curDeep === deep) {
                res += root.val
            }
        }
        getSum(root.left, curDeep + 1, deep)
        getSum(root.right, curDeep + 1, deep)
    }
    getSum(root, 1, deep)
    return res 
};