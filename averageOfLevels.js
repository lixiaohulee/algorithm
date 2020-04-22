/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (root === null) return []
    let res = []
    let queue = []
    queue.push(root)

    while(queue.length > 0) {
        const current = []
        for(let i = 0, l = queue.length; i < l; i++) {
            const head = queue.shift()
            current.push(head.val)
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)
        }
        let sum = 0
        for(let j = 0, n = current.length; j < n; j++) {
            sum += current[j]
        }
        const a = sum / current.length
        res.push(a)
    }

    return res
    
};