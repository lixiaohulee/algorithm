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

 function findTarget(root: TreeNode | null, k: number): boolean {
    
  const res = [];
  const inOrder = (root: TreeNode | null): void => {
      if (root !== null) {
          inOrder(root.left);
          res.push(root.val);
          inOrder(root.right);
      }
  }
  inOrder(root);

  for(let i = 0; i < res.length; i++) {
      for (let j = i+1; j < res.length; j++) {
          if (res[i] + res[j] === k) {
              return true;
          }
      }
  }

  return false;
};