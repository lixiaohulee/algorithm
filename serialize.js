/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) {
        return ''
    }

    let res = '',
        queue = []
    
    queue.push(root)
    while(queue.length > 0) {
        const head = queue.shift()
        if (head) {
            res += head.val + ','
            queue.push(head.left)
            queue.push(head.right)
        }else {
            res += '#,'
        }
    }

    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null
    const nodes = data.substring(0, data.length-1).split(',')
    const queue = []
    
    const root = new TreeNode(nodes.shift())
    queue.push(root)

    while(queue.length > 0) {
        const head = queue.shift()

        const leftVal = nodes.shift()
        if (leftVal !== '#') {
            head.left = new TreeNode(leftVal)
            queue.push(head.left)
        }
        
        const rightVal = nodes.shift()
        if (rightVal !== '#') {
            head.right = new TreeNode(rightVal)
            queue.push(head.right)
        }
    }
    return root
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */