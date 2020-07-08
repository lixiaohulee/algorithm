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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = null
    function isTheFather(root) {
        let isPf = false
        let isQf = false
        function helper(root) {
            if (root === null) return 
            if (root === p) {
                isPf = true
            }

            if (root === q) {
                isQf = true
            }

            helper(root.left)
            helper(root.right)
        }
        helper(root)
        return isPf && isQf
    }

    function dfs(root) {
        if (root) {
            res = isTheFather(root) ? root : res
            dfs(root.left)
            dfs(root.right)
        }
    }

    dfs(root)
    return res
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return null
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }

    return root
};