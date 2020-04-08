/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const inOrder = root => {
    const stack = [],
          res = []

    let cur = root

    while(stack.length > 0 || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        }else {
            const top = stack.pop()
            res.push(top.val)
            cur = top.right
        }
    }

    return res
}
var getAllElements = function(root1, root2) {
    const res1 = inOrder(root1)
    const res2 = inOrder(root2)

    const res = []

    let i = j = 0

    while(i < res1.length && j < res2.length) {
        if (res1[i] < res2[j]) {
            res.push(res1[i])
            i++
        }else {
            res.push(res2[j])
            j++
        }
    }

    while(i < res1.length) {
        res.push(res1[i])
        i++
    }

    while(j < res2.length){
        res.push(res2[j])
        j++
    }

    return res
};