function canJump(nums: number[]): boolean {
    //确定状态 dp[i] 表示是否可以从第一个下标成功跳到第i个下标

    //状态转移方程 dp[i] = dp[j] && nums[j] >= i - j 其中 0 <= j < i 并且 i - j 表示第i个下标到第j个下标的距离

    //初始条件和边界case dp[0] = true;

    //计算顺序从小到大

    const dp = Array(nums.length);

    dp[0] = true;

    for (let i = 1; i < nums.length; i++) {  //O(n2)
        dp[i] = false; //先假设到不了
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && nums[j] >= i - j) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[nums.length - 1];
};

// 来自大佬的解法。秒啊 
function canJump(nums: number[]): boolean {
    //n表示什么？因为这里是反推 倒着遍历数组 所以可以假定初始条件下是可以到达最后下标的 那么n可以表示为当前下标
    //到向右 距离最近的一个可到达的下标的距离。
    let n = 1; 
    
    for (let i = nums.length - 2; i >= 0; i--) { // O(n)
        if (nums[i] >= n) {
            //当前下标可以到达 
            n = 1; //相当于更新了距离最近的一个可到达的点
        } else {
            //叠加距离 反正当前下标是到达不了了 叠加起来甩给前面的点 看看他们中有能到达的吗 当前点到达不了的距离得甩给前面的点
            n++;
        }

        
        if (i === 0 && n > 1) {
            return false;
        } 
    }

    return true;
};
