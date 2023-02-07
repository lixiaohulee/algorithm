function maxSubArray(nums: number[]): number {
    //确定状态 dp[i] 表示以下标i对应的元素为结尾组成的具有最大和连续子数组对应的最大和
    //状态转移方程 dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
    //初始条件和边界情况 dp[0] = nums[0]
    //计算顺序 从左往右

    // const dp = Array(nums.length);
    // dp[0] = nums[0];

    let pre = nums[0];

    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        max = Math.max(max, pre);
    }

    return max;
};
