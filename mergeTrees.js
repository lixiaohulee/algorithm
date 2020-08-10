/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 === null) return t2
    if (t2 === null) return t1
    function merge(target, source, root, dir) {
        if (target === null && source === null) return 
        if (target && source === null) return
        if (target === null && source) {
            if (dir === 0) {
                root.left = new TreeNode(source.val)
                target = root.left
            }else {
                root.right = new TreeNode(source.val)
                target = root.right
            }
        }else {
            target.val += source.val
        }

        merge(target.left, source.left, target, 0)
        merge(target.right, source.right, target, 1)
    }

    merge(t1,t2, null, -1)
    return t1
};