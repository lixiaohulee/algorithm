/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var findGrandSon = function(root) {
    if (root === null) return []
    const grandSons = []

    if (root.left) grandSons.push(root.left.val)
    if (root.right) grandSons.push(root.right.val)

    return grandSons
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let res = 0
    function helper(root) {
        if (root) {
            if (root.val % 2 === 0) {
                const left = findGrandSon(root.left)
                const right = findGrandSon(root.right)

                left.forEach(item => res += item)
                right.forEach(item => res += item)
            }

            helper(root.left)
            helper(root.right)
        }
    }

    helper(root)

    return res
};


var sumEvenGrandparent = function(root) {
    if (root === null) return 0
    let res = 0

    if (root.val % 2 === 0) {
        if (root.left) {
            if (root.left.left) res += root.left.left.val
            if (root.left.right) res += root.left.right.val
        }
        if (root.right) {
            if (root.right.left) res += root.right.left.val
            if (root.right.right) res += root.right.right.val
        }
    }
    return res + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)
};