//给定任意二维数组，输出所有的排列组合项。

//比如 [['A','B'], ['a','b'], [1, 2]]，输出 ['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']


const perm = (arr: (number|string)[][]): string[] => {
  const helper = (arr1: (number|string)[], arr2: (number|string)[]): (string|number)[] => {
    if (arr1.length === 0) return arr2; 
    if (arr2.length === 0) return arr1;

    const res: (string|number)[] = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        const item = `${arr1[i]}${arr2[j]}`;  //O(n2)
        res.push(item);
      }
    }

    return res;
  }


  let res: any = [];
  for (let i = 0; i < arr.length; i++) {
    res = helper(res, arr[i]);        //O(n3)
  }

  return res;
}

console.log(perm([['A','B','C', 'D','E','F','G','H','I','J','K'], ['a','b','e','f'], [0, 1, 2,3,4,5,6,7,8,9]]));