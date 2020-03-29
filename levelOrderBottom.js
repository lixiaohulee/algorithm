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
var levelOrderBottom = function(root) {
    if (root === null) return []
    let res = []
    let queue = []

    queue.push(root)
    while(queue.length > 0) {
        let temp = []
        let levelLen = queue.length
        while(levelLen) {
            let head = queue.shift()
            temp.push(head.val)
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)
            levelLen--
        }
        res.unshift(temp)
    }
    return res
};