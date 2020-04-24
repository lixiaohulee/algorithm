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
var largestValues = function(root) {
    if (root === null) return []
    let res = []
    let queue = []
    
    queue.push(root)
    while(queue.length > 0) {
        let current = []
        for(let i = 0, l = queue.length; i < l; i++) {
            const head = queue.shift()
            current.push(head.val)
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)   
        }
        current = current.sort((pre, next) => next - pre)
        res.push(current[0])
    }
    return res
};