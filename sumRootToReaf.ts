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

 function sumRootToLeaf(root: TreeNode | null): number {
  const res = [];

  const preOrder = (root: TreeNode, sum: string) => {
      if (root === null) return;
      
      if (root.left === null && root.right === null) {
          res.push(sum + root.val);
          return;
      }

      sum = sum + root.val;
      preOrder(root.left, sum);
      preOrder(root.right, sum);
  }  

  preOrder(root, '0');

  return res.reduce((pre: number, next: string) => {
      return pre + parseInt(next, 2);
  }, 0);
};