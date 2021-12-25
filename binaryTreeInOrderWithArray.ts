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




  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
    }

 function inOrderTraversal(root: TreeNode | null): number[] {
  const res = [];
  const stack = [];

  if (root === null) return res;

  let cur = root;
  
  while(cur !== null || stack.length !== 0) {
      if (cur !== null) {
          stack.push(cur);
          cur = cur.left;
      } else {
          cur = stack.pop();
          res.push(cur.val);
          cur = cur.right;
      }
  }

  return res;
};