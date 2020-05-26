/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    const stack = []
    const res = []
    stack.push(root)
    while(stack.length > 0) {
        let size = stack.length
        let curRes = []
        while(size > 0) {
            const head = stack.shift()
            curRes.push(head.val)
            if (head.left) stack.push(head.left)
            if (head.right) stack.push(head.right)  
            size-- 
        }
        res.push(curRes)
    }

    return res[res.length -1][0]
};

findBottomLeftValue(Object)

