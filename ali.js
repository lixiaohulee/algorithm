function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null; 
}


const generateTree1 = (root, arr) => {
  if (arr.length === 0) {
    return;
  }

  if (root === null) {
    return;
  }

  const leftVal = arr.shift();
  const rightVal = arr.shift();

  const left = leftVal === null ? null : new TreeNode(leftVal);
  const right = rightVal === null ? null : new TreeNode(rightVal);

  root.left = left;
  root.right = right;

  generateTree(root.left, arr);
  generateTree(root.right, arr);
}



// const arr = [1];

// const root = new TreeNode(arr.shift());
// generateTree(root, arr);


// const getDepth = (root) => {
//   let maxDepth = Number.MIN_SAFE_INTEGER;
  
//   const treverse = (root, depth) => {
//     if (root === null) {
//       return;
//     }
//     if (root.left === null && root.right === null) {
//       maxDepth = Math.max(maxDepth, depth);
//       return;
//     }

//     treverse(root.left, depth + 1);
//     treverse(root.right, depth + 1);
//   }

//   treverse(root, 1);

//   return maxDepth;
// }


// console.log(getDepth(root))



const generateTree = (arr) => {
  if (arr.length === 0) {
    return null;
  }


  const generate = (root, index, arr) => {
    if (root === null) {
      return;
    }

    if (arr.length === null) {
      return;
    }

    const leftVal = arr[2 * index + 1];
    const left = leftVal === null ? null : new TreeNode(leftVal);

    const rightVal = arr[2 * index + 2];
    const right = rightVal === null ? null : new TreeNode(rightVal);

    root.left = left;
    root.right = right;

    generate(root.left, 2 * index + 1, arr);
    generate(root.right, 2 * index + 2, arr);
  }

  const root = new TreeNode(arr[0]);
  // generate(root, 0, arr);
  generateTree1(root, arr);


  return root;
}

console.log(generateTree([3,9,20,null,null,15,7]))