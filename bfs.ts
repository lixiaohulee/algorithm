


const bfs = (root: TreeNode | null) => {
  if (root === null) return [];

  const res: string[] = [];

  const queue = [];
  
  queue.push(root);

  while(queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const head = queue.shift();

      res.push(head.val);

      for (let j = 0; j < head.children.length; j++) {
        const curChild = head.children[j];
        if (curChild) {
          queue.push(curChild);
        }
      }
    }
  } 
}