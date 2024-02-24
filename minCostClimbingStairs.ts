function minCostClimbingStairs(cost: number[]): number {
    //确定状态 dp[i] 表示从第i个台阶爬到楼顶需要的最低花费
    //状态转移方程 dp[i] = min(dp[i+1], dp[i+2]) 
    //初始条件 dp[cost.length] = 0 你已经在楼顶还需要个毛线 
    //计算顺序 反着遍历 从楼顶往下计算 

    const dp = Array(cost.length + 1);

    dp[cost.length] = 0;
    dp[cost.length - 1] = cost[cost.length-1];

    for (let i = cost.length - 2; i >= 0; i--) {
        dp[i] = Math.min(dp[i + 1] + cost[i], dp[i + 2] + cost[i]);
    }

    return Math.min(dp[0], dp[1]);
};
