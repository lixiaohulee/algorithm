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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let res = '';

  const preOrder = (root: TreeNode | null): void => {
      if (root === null) {
          res += '#,';
          return;
      }

      res += `${root.val},`;

      preOrder(root.left);
      preOrder(root.right);
  }

  preOrder(root);

  return res;
};

/*
* Decodes your encoded data to tree.
*/
function deserialize(data: string): TreeNode | null {
  if (!data) return null;

  const nodeList = data.split(',');

  const helper = (nodeList: Array<string>) => {
      if (!nodeList.length) return null;

      const node = nodeList.shift();

      if (node === '#') return null;

      const root = new TreeNode(+node);

      root.left = helper(nodeList);
      root.right = helper(nodeList);

      return root;
  }

  return helper(nodeList);
};


/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/