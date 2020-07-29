/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let res = isDeleteNode(root, to_delete) ? [] : [root]
    function deepSearch(node, parent, dir) {
        if (node === null) return 
        deepSearch(node.left, node, 1)
        deepSearch(node.right, node, 0)

        if (isDeleteNode(node, to_delete)) {
            if (dir === 1) parent.left = null
            if (dir === 0) parent.right = null
            if (node.left) res.push(node.left)
            if (node.right) res.push(node.right)
        }
    }
    function isDeleteNode(node, delArr) {
        let i = 0,
            len = delArr.length

        while(i < len) {
            if (delArr[i] === node.val) {
                return true
            }
            i++
        }
        return false
    }

    deepSearch(root, null, -1)
    return res
};