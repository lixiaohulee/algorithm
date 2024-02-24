function minimumTotal(triangle: number[][]): number {
    //确定状态 dp[i][j] 表示从第0行第0个节点到第i行第j个节点的最小路径和
    //状态转移方程 dp[i][j] = Math.min(dp[i-1][j] + triangle[i][j], dp[i-1][j-1] + trigngle[i][j]);  
    //dp[i][j] = j === 0 ? dp[i-1][0] : j === triangle[i].length - 1 ? dp[i-1][j-1]  : null
    //初始条件和边界情况 dp[0][0] = triangle[0][0]
    //计算顺序 从小到大 从上到下

    const dp = Array(triangle.length);
    dp[0] = triangle[0];

    let minSum = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < triangle.length; i++) {
        dp[i] = Array(triangle[i].length);
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                dp[i][j] = dp[i-1][j] + triangle[i][j];
            } else if (j === triangle[i].length - 1) {
                dp[i][j] = dp[i-1][j-1] + triangle[i][j];
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j];
            }

            if (i === triangle.length - 1) {
                minSum = Math.min(minSum, dp[i][j]);
            }
        }
    }

    return minSum === Number.MAX_SAFE_INTEGER ? triangle[0][0] : minSum;
};
