

const levelOrder = (root) => {

  if (root === null) return [];

  const res = [];

  const queue = [];


  queue.push(root);

  while(queue.length) {
    let len = queue.length;

    const temp = [];
    while(len > 0) {
      const head = queue.shift();
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