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


function allPossibleFBT(n: number): Array<TreeNode | null> {
    if (n % 2 === 0) {
        return [];
    }

    if (n === 1) {
        const node = new TreeNode(0);
        return [node];
    }

    const res = [];
    for (let l = 1, r = n - 2; l < n; l++, r--) { // r = n - 2 因为要给根节点留一个 
        //后序遍历
        const leftSubTree = allPossibleFBT(l);
        const rightSubTree = allPossibleFBT(r);

        //排列组合
        for (let i = 0; i < leftSubTree.length; i++) {
            for (let j = 0; j < rightSubTree.length; j++) {
                const root = new TreeNode(0, leftSubTree[i], rightSubTree[j]);
                res.push(root);
            }
        }
    }

    return res;
};
