

const obj = {
  a: {
    b: {
      l: 'ddd'
    },
    c: {
      m: {
        n: 'ddd'
      }
    },
    d: 'ddd',
  },
  e: {
    f: {
      g: {
        h: 'ddd',
        i: {
          j: {
            k: 'ddd'
          }
        }
      }
    }
  }
}

interface INode {
  [index: string]: string | INode;
}

const reduceKey = (root: INode): INode => {
  const ans = {};

  const traverse = (path: string, node: INode | ): void => {
    const keys = Object.keys(node);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      const newPath = path === '' ? key : path + '.' + key;

      const value = node[key];
      if (typeof value === 'string') {
        ans[newPath] = node[key];
      } else {
        traverse(newPath, value);
      }
    }
  }

  traverse('', root);

  return ans;
}

console.log(reduceKey(obj));