function maxProfit(prices: number[], fee: number): number {
    //确定状态 dp[i][0] 表示第i天交易结束后手上没有股票的最大收益 dp[i][1] 表示第i天交易结束后手上拥有一支股票的最大收益
    //状态转移方程 dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee) 
    //状态转移方程 dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]) 
    //初始条件和边界情况 dp[0][0] = 0; dp[0][1] = prices[0];
    //计算顺序 从小到大

    let preHold = -prices[0];
    let preNope = 0;

    for (let i = 1; i < prices.length; i++) {
        preNope = Math.max(preNope, preHold + prices[i] - fee);
        preHold = Math.max(preHold, preNope - prices[i]);
    }

    return preNope;
};
