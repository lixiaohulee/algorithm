function massage(nums: number[]): number {
    //确定状态 dp[i]表示以nums[i]为结尾的最优预约序列和
    //状态转移方程 dp[i] = Math.max(dp[i] + for循环dp[0]到dp[i-2]);
    //初始值和边界case dp[0] = nums[0] dp[1] = nums[1]
    //计算顺序 从左到右

    if (nums.length < 2) {
        return nums.length === 0 ? 0 : nums[0];
    }

    const dp = Array(nums.length);

    dp[0] = nums[0];
    dp[1] = nums[1];

    for (let i = 2; i < nums.length; i++) {
        dp[i] = nums[i];
        for (let j = i - 2; j >= 0; j--) {
            dp[i] = Math.max(nums[i] + dp[j], dp[i]);
        }
    }

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < dp.length; i++) {
        max = Math.max(max, dp[i]);
    }

    return max;
};
