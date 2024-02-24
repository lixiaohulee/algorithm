function waysToStep(n: number): number {
    //当你处在第n级台阶的时候 那么你只能是从n - 1、n - 2、n - 3级台阶上来 
    //那么你到n-1、n-2、n-3级台阶的种类数量各是多少呢，加法原理 dp[n-1] + dp[n-2] + dp[n-3]
    
    //确定状态 dp[i]代表到达第i级台阶的方法有多少种 
    //状态转移方程 dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    //初始状态和边界情况 dp[0] = 0 dp[1] = 1 dp[2] = 2 dp[3] = 4

    const dp = Array(n+1);

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2; 
    dp[3] = 4;

    for (let i = 4; i < n+1; i++) {
        dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % 1000000007;
    }

    return dp[n];
};
