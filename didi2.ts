


//实现Promise.all

//入参prmisify arr, 

const myAllFunc = async (taskArr: Promise<unknown>[]): Promise<unknown[]> => {
  return new Promise((resolve, reject) => {
    const res: unknown[] = [];
    
    let resolvedCount = 0;

    for (let i = 0; i < taskArr.length; i++) {
      Promise.resolve(taskArr[i]).then((r) => {
        resolvedCount++;

        res[i] = r;
        
        if (resolvedCount === taskArr.length) {
          resolve(res);
        }

      }).catch((err) => {
        reject(err);
      })
    }
  })
}


type Task = () => Promise<unknown>;

const taskInvoker = (taskArr: Task[], maxCount: number): Promise<unknown[]> => {
  return new Promise((resolve, reject) => {
    let res: unknown[] = [];
    let err: unknown[] = [];

    let currentRunningTaskCount = 0;

    const runTask = () => {
      if (currentRunningTaskCount > maxCount) {
        return;
      }

      const index = currentRunningTaskCount;
      const task = taskArr[index];

      currentRunningTaskCount++;

      task().then((r) => {
        res[index] = r;
      }).catch((e) => {
        err[index] = e;
      }).finally(() => {

        if (res.length === taskArr.length) {
          resolve(res);
          return;
        }

        if (err.length) {
          reject(err);
          return;
        }

        currentRunningTaskCount--;
        runTask();
      })
    }

    runTask();
  })
}



class EventEmitter {
  private map = {};

  on(name: string, cb: Function) {
    if (undefined === this.map[name]) {
      this.map[name] = [cb];
    } else {
      this.map[name].push(cb);
    }
  }

  emit(name: string, ...args) {
    if (undefined !== this.map[name]) {
      const cbs = this.map[name];

      cbs.forEach((cb) => {
        cb(...args);
      })
    }
  }
}



//给定一棵二叉搜索树，请找出其中第 k 大的节点。

/**
 * 输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
 */

const findKthNode = (root: TreeNode, k: number): number => {
  
  let currentK = 0;
  let target = -1;

  const traverse = (root: TreeNode | null): void=> {
    if (root === null) {
      return;
    }


    traverse(root.right);
    currentK++;
    
    if (currentK === k) {
      target = root.val; 
    }
    
    traverse(root.left);
  } 

  traverse(root);

  return target;
}
