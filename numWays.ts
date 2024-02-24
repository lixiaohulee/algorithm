function numWays(n: number, relation: number[][], k: number): number {
    // 确定状态 dp[i] 表示经过i轮后能够到达n-1的玩家都有哪些。
    // 状态转移方程 dp[i] = for循环dp[i-1]对应的所有玩家 然后再去relation映射关系中找出哪些玩家可以到dp[i+1]中这些玩家
    // 初始值和边界情况 dp[0] = [n-1];
    // 计算顺序 倒着来 从最后一位玩家n-1开始计算 

    const dp: number[][] = Array(k+1);

    dp[0] = [n-1];

    for (let i = 1; i < k+1; i++) {
        dp[i] = [];
        for (let j = 0; j < dp[i-1].length; j++) {
            for (let h = 0; h < relation.length; h++) {
                const current = relation[h];
                if (current[1] === dp[i-1][j]) {
                   dp[i].push(current[0]);
                }
            }
        }
    }

    let ways = 0;
    for (let i = 0; i < dp[k].length; i++) {
        const player = dp[k][i];
        if (player === 0) {
            ways++;
        }
    }
    
    return ways;
};
