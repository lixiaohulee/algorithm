/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []

    const goPath = (root, sum) => {
        if (root === null)  return 
        if (root.left === null && root.right === null) {
            if (sum === '') {
                sum = root.val + ''
            }else {
                sum += '->' + root.val 
            }
            res.push(sum)
        }

        if (sum === '') {
            sum = root.val
        }else {
            sum += '->' + root.val
        }

        goPath(root.left, sum) 
        goPath(root.right, sum)
    }


    goPath(root, '')

    return res

};