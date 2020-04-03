var rangeSumBST = function(root, L, R) {
    let validNums = []
    const preOrder = root => {
        if (root) {
            if (root.val > L && root.val <= R) {
                validNums.push(root.val)
            }
            preOrder(root.left)
            preOrder(root.right)
        }
    }
    preOrder(root)

    return validNums.reduce((sum, cur) => sum + cur, 0)
};


function Node(val) {
    this.val = val
    this.left = null
    this.right = null
}


const root = new Node(3)

console.log(rangeSumBST(root))





/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (root === null) {
        return 0
    }

    if (root.val < L) {
        return rangeSumBST(root.right, L, R)
    }else if (root.val > R) {
        return rangeSumBST(root.left, L, R)
    }else {
        return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
    }
};