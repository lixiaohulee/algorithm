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

    if (!root) {
        return []
    }
    let res = []
    let queue = []

    queue.push(root)

    while(queue.length > 0) {
        let len = queue.length 

        let temp = []
        while(len > 0) {
            let head = queue.shift()
            if (head.left) {
                queue.push(head.left)
            }
            if (head.right) {
                queue.push(head.right)
            }
            temp.push(head.val)
            len--
        }
        res.push(temp)
    }

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    let queue = [],
        res = []
    queue.push(root)
    while(queue.length > 0) {
        let level = []
        for(let i = 0, len = queue.length; i < len; i++) {
            const head = queue.shift()
            level.push(head.val)
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)
        }
        res.push(level)
    }
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
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    let res = [],
        queue = [root]

    while(queue.length) {
        let level = []
        for(let i = 0, len = queue.length; i < len; i++) {
            const head = queue.shift()
            level.push(head.val)
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)
        }
        res.push(...level)
    }
    return res
};