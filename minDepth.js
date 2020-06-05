
//获取二叉树的最小深度
function minDepth(root) {
    if (root === null) return 0
    if (root.left === null && root.right === null) return 1

    let min = Number.MAX_SAFE_INTEGER
    if (root.left) {
        min = Math.min(minDepth(root.left), min)
    }

    if (root.right) {
        min = Math.min(minDepth(root.right), min)
    }

    return min + 1
}