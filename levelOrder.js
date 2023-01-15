/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function levelOrder(root) {
    if (root === null)
        return [];
    var res = [];
    var queue = [];
    queue.push(root);
    while (queue.length) {
        var len = queue.length;
        var temp = [];
        while (len > 0) {
            var head = queue.shift();
            if (head.left) {
                queue.push(head.left);
            }
            if (head.right) {
                queue.push(head.right);
            }
            temp.push(head.val);
            len--;
        }
        res.push(temp);
    }
    return res;
}
;
