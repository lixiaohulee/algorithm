//骚操作
function countBits(n: number): number[] {
    const dp = Array(n+1);
    for (let i = 0; i <= n; i++) {
        dp[i] = i.toString(2).split('1').length - 1;
    }

    return dp;
};

function countBits(n: number): number[] {

    //确定状态 dp[i] 代表0 <= i <= n 范围内第i个数对应的二进制中1的个数 
    //转移方程 dp[i] = i % 2 === 0 ? dp[i/2] : dp[i-1] + 1;  //这他妈是最难的一步 你得找去发现
    //初始情况和边界case处理 dp[0] = 0; 
    //计算顺序 从0 到n 遍历  
    const dp = Array(n+1);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {   //O(n)
        if (i % 2 === 0) {
            dp[i] = dp[i / 2];
        } else {
            dp[i] = dp[i - 1] + 1;
        }
    }

    return dp
};
