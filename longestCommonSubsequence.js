function longestCommonSubsequence(text1, text2) {
  if (text1 === '' || text2 === '') return 0;

  const len = Math.min(text1.length, text2.length);

  let res = 0;

  for(let i = len-1; i >= 0; i++) {
      if (text1[i] === text2[i]) {
          res += 1;
      } else {
          res += Math.max(
              longestCommonSubsequence(text1.slice(0, text1.length -1), text2), 
              longestCommonSubsequence(text1, text2.slice(0, text2.length -1))
              )
      }
  }

  return res;
};


console.log(longestCommonSubsequence('adfdfsd', 'asdfasdf'));