// // //下面代码输出信息和顺序：
// async function test() {
//     console.log(1)
//     const res = await new Promise((res) => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             res(3)
//         }, 2000)
//     })
//     return res
// }
// const res = test()
// console.log(4)
// setTimeout(()=>{
//     console.log(5)
// }, 0)
// console.log(3 === res)


// // //1,2,4,false,5,3





// const a = []
// const b = a
// let c = 1
// let d = c
// c = 2
// b.push(1)
// console.log(a.length === b.length)
// a.push(2)
// console.log(a.length === b.length)
// console.log(d === c)


// // //true,
// // //true,
// // //false,


// // componentDidMount、componentDidUpdate、componentWillUnmount 使用hooks 如何替代


// // useEffect(() =>> {
  

// //   return () => {

// //   }

// // });

// // //[] componentDidMount


// // 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 
// // 子串
// //  的长度。


// // 示例 1:

// // 输入: s = "abcabcbb"
// // 输出: 3 
// // 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// // 示例 2:

// // 输入: s = "bbbbb"
// // 输出: 1
// // 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// // 示例 3:

// // 输入: s = "pwwkew"
// // 输出: 3
// // 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
// //      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// //确定状态：dp[i]表示以索引i为结尾形成的无重复字符子串的长度。
// //确定状态转移方程： dp[i] = s[i] === s[i-1] ? 1 : dp[i-1] + 1;


// const func = (s) => {
  
//   const dp = Array(s.length);

//   dp[0] = 1;

//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 1; i < s.length; i++) {
//     let flag = false;
//     for (let j = i; j >= 0; j--) {
//       if (s[i] === s[j-1]) {
//         flag = true;
//         break;
//       }
//     }
//     dp[i] = flag ? 1 : dp[i-1] + 1;
//     max = Math.max(max, dp[i]);
//   }

//   console.log(dp)

//   return max;
// }


    

// console.log(func('bbbbb'));



var treeList = [
  {
      title: '系统管理',
      parentName: '',
      pid: 0,
      id: 1,
  },
  {
      title: '角色新增',
      parentName: '角色管理',
      pid: 22,
      id: 221,
  },
  {
      title: '角色编辑',
      parentName: '角色管理',
      pid: 22,
      id: 222,
  },
  {
      title: '角色删除',
      parentName: '角色管理',
      pid: 22,
      id: 223,
  },
  {
      title: '用户新增',
      parentName: '用户管理',
      pid: 33,
      id: 331,
  },
  {
      title: '菜单新增',
      parentName: '菜单管理',
      pid: 11,
      id: 111,
  },
  {
      title: '菜单编辑',
      parentName: '菜单管理',
      pid: 11,
      id: 112,
  },
  {
      title: '用户管理',
      parentName: '系统管理',
      pid: 0,
      id: 33,
  },
  {
      title: '菜单管理',
      parentName: '系统管理',
      pid: 1,
      id: 11,
  },
  {
      title: '菜单删除',
      parentName: '菜单管理',
      pid: 11,
      id: 113,
  },
  {
      title: '用户编辑',
      parentName: '用户管理',
      pid: 33,
      id: 332,
  },
  {
      title: '角色管理',
      parentName: '系统管理',
      pid: 1,
      id: 22,
  },
  {
      title: '用户删除',
      parentName: '用户管理',
      pid: 33,
      id: 333,
  }
]



const generateTree = (treeList, pid) => {
  if (treeList.length === 0) {
    // return [];
  }

  const children = [];

  for (let i = 0; i < treeList.length; i++) {
    if (treeList[i].pid === pid) {
      treeList[i].children = generateTree(treeList, treeList[i].id);
      children.push(treeList[i]);
    }
  }

  return children;
}


const func1 = (treeList, rootId) => {
  const tree = [];


  const getParentNode = (pid) => {
    for (let i = 0; i < treeList.length; i++) {
      if (treeList[i].id === pid) {
        return treeList[i];
      }
    }

    return null;
  }

  for (let i = 0; i < treeList.length; i++) {
    const node = treeList[i];

    if (node.pid === rootId) {
      tree.push(node);
    } else {
      const parentNode = getParentNode(node.pid);
      
      if (parentNode.children) {
        parentNode.children.push(node);
      } else {
        parentNode.children = [node];
      }
    }
  }

  return tree;
}

// console.log(JSON.stringify(func1(treeList, 0)));


// console.log(JSON.stringify(generateTree(treeList, 0)));



const func2 = (treeList, pid) => {
  if (treeList.length === 0) {
    return [];
  }

  const children = [];
  for (let i = 0; i < treeList.length; i++) {
    if (treeList[i].pid === pid) {
      children.push(treeList[i]);
      treeList[i].children = func2(treeList, treeList[i].id);
    }
  }

  return children;
}

console.log(JSON.stringify(func2(treeList, 0)))

