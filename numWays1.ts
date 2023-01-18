function numWays(n: number): number {
    //确定状态 dp[i]表示跳上一个i级台阶总有dp[i]种跳法
    //状态转移方程 dp[i] = dp[i-1] + dp[i-2];
    

    const dp = [];

    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i < n + 1; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
    }

    console.log(dp)
    return dp[n];

};
