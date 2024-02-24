


const getSumArr = (arr: number[], target: number): number[][] => {
  const getSum = (arr: number[]): number => {
    return arr.reduce((pre, next) => pre + next, 0);
  }

  const ans: number[][] = [];

  const isExists = (arr: number[]): boolean => {
    return ans.some((t) => {
      for (let i = 0; i < arr.length; i++) {
        if (!t.includes(arr[i])) {
          return false;
        }
      }

      return true;
    })
  }


  const backtrack = (track: number[], options: number[]): void => {
    if (getSum(track) === target && !isExists(track)) {
      ans.push(track.slice());
      return;
    }

    for (let i = 0; i < options.length; i++) {
      
      if (getSum(track) > target) {
        continue;
      }
      
      const o = options[i];

      track.push(o);

      backtrack(track, [...options.slice(0, i), ...options.slice(i+1)]);

      track.pop();

    }
  }

  backtrack([], arr);

  return ans;
}

console.log(getSumArr([4,3,2,1,5,8,7,9,6].sort((pre, next) => pre - next), 9));