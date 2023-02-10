function wordBreak(s: string, wordDict: string[]): boolean {
    //动态规划 存在性问题 
    //确定状态 dp[i] 表示以从下标0到下标i形成子串是否可以由字典中的单词拼出
    //状态转移方程 dp[i] = dp[0] ~ dp[i-1] && s[j~i]在字典中 j = 0 ~ i-1
    //初始情况和边界问题 
    //计算顺序 从小到大

    const isWord = (w: string) => wordDict.includes(w);

    const dp = Array(s.length);

    dp[0] = isWord(s[0]);

    for (let i = 1; i < s.length; i++) {
        dp[i] = false;
        if (isWord(s.slice(0, i+1))) {
            dp[i] = true;
            continue;
        }
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && isWord(s.slice(j+1, i+1))) {
                dp[i] = true;
            }
        }
    }

    return dp[s.length-1];
};
