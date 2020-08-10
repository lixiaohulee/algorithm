/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    let res = [],
        queue = [],
        l = 0

    queue.push(root)
    while(queue.length) {
        let level = []
        for(let i = 0, len = queue.length; i < len; i++) {
            const head = queue.shift()
            if (l % 2 === 0) {
                level.push(head.val)
            }else {
                level.unshift(head.val)
            }
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)
        }
        res.push(level)
        l++
    }

    return res
};