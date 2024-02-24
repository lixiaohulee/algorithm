function minCost(costs: number[][]): number {
    //确定状态 dp[i][j] 表示粉刷到第i个房子且选择了第j号颜色时花费的最少成本
    //状态转移方程 dp[i][j] = min(for循环dp[i-1][0~2]排除j + cost[i][j])
    //初始条件和边界情况 dp[0] = costs[0]
    //计算顺序 从左到右


    const dp = Array(costs.length);

    dp[0] = costs[0];

    for (let i = 1; i < costs.length; i++) {
        dp[i] = Array(3).fill(Number.MAX_SAFE_INTEGER);
        for (let j = 0; j < costs[i].length; j++) {
            for (let k = 0; k < costs[i-1].length; k++) {
                if (k === j) {
                    continue;
                }

                dp[i][j] = Math.min(dp[i][j], dp[i-1][k] + costs[i][j]);
            }
        }
    }
    
    return Math.min(dp[dp.length-1][0],dp[dp.length-1][1],dp[dp.length-1][2]);
};


//大佬们更简洁的写法
function minCost(costs: number[][]): number {
    const len = costs.length;
    for (let i = 1; i < len; i++) {
        costs[i][0] = Math.min(costs[i-1][1] + costs[i][0], costs[i-1][2] + costs[i][0]);
        costs[i][1] = Math.min(costs[i-1][0] + costs[i][1], costs[i-1][2] + costs[i][1]);
        costs[i][2] = Math.min(costs[i-1][0] + costs[i][2], costs[i-1][1] + costs[i][2]);
    }

    return Math.min(costs[len-1][0],costs[len-1][1],costs[len-1][2])
}
