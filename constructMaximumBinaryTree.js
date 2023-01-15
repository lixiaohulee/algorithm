/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function constructMaximumBinaryTree(nums) {
    if (nums.length === 0)
        return null;
    var max = Math.max.apply(Math, nums);
    var maxIndex = nums.findIndex(function (num) { return num === max; });
    var root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
    return root;
}
;
