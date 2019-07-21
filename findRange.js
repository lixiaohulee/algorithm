








/**
 * @param root: param root: The root of the binary search tree
 * @param k1: An integer
 * @param k2: An integer
 * @return: return: Return all keys that k1<=key<=k2 in ascending order
 */
 
const inOrder = function (root, res) {
    if (root) {
        inOrder(root.left, res)
        res.push(root.value)
        inOrder(root.right, res)
    }
}
const searchRange = function (root, k1, k2) {
    // write your code here
    const res = []
    inOrder(root, res)
    return res.filter(item => item >= k1 && item <= k2)
}

