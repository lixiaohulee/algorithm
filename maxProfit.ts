// MD 超时了
function maxProfit(prices: number[]): number {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < prices.length; i++) {  //O(n2)
        for (let j = i + 1; j < prices.length; j++) { 
            max = Math.max(max, prices[j] - prices[i]);
        }
    }

    return max > 0 ? max : 0;
};

function maxProfit(prices: number[]): number {
  // 定义状态 dp[i]表示第i天卖出的最大利润 
  // 转移方程 dp[i] = prices[i] - min(前i-1天中的最小值) 
  // 初始情况和数组越界 dp[0] 第一天你只能是买入 所以利润为0
  // 计算顺序 从左到右

  const dp = Array(prices.length);

  dp[0] = 0;

  let min = prices[0]; //前i天的最小值 
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < prices.length; i++) { // O(n)
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return max > 0 ? max : 0;
};
