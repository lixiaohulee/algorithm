/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = []
    let num = 0,
        cur = root

    while(stack.length > 0 || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        }else {
            const top = stack.pop()
            num++
            if (num === k) {
                return top.val
            }
            cur = top.right
        }
    }
    return 0
};