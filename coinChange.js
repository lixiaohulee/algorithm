function coinChange(coins, amount) {
    // 最值问题 考虑动态规划
    // 第一步确定状态 dp[i]代表什么含义？ dp[i]代表要凑出金额为i时需要的最少的硬币数量。
    // 列出状态转移方程 dp[i] = Math.min(dp[i - 1], dp[i - 2], dp[i - 5])
    // 确定边界case和数组越界问题。dp[0] = 0; 当金币<0时 无法凑出来 返回无穷大
    // 计算顺序，先计算小的，再计算大的。
    var dp = Array(amount + 1);
    dp[0] = 0;
    for (var i = 1; i <= amount; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
        for (var j = 0; j < coins.length; j++) {
            var sub = i - coins[j] < 0 ? Number.MAX_SAFE_INTEGER : dp[i - coins[j]];
            dp[i] = Math.min(dp[i], sub + 1);
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}
;
// 使用递归计算
function coinChange(coins, amount) {
    // 定义递归函数的含义。 helper函数代表计算amount金额需要最少helper(amount)个硬币
    //避免递归重复计算 搞个缓存
    var cache = Array(amount + 1);
    var helper = function (amount) {
        // 递归出口
        if (amount < 0)
            return Number.MAX_SAFE_INTEGER;
        if (amount === 0)
            return 0;
        //已经计算过 那么直接拿缓存中的值。
        if (undefined !== cache[amount]) {
            return cache[amount];
        }
        var count = Number.MAX_SAFE_INTEGER;
        for (var i = 0; i < coins.length; i++) {
            var sub = helper(amount - coins[i]);
            if (sub === Number.MAX_SAFE_INTEGER) {
                //表示这条路径凑不出amount 直接pass
                continue;
            }
            count = Math.min(count, sub + 1);
        }
        cache[amount] = count;
        return count;
    };
    var res = helper(amount);
    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
}
