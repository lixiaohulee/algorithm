function generateParenthesis(n: number): string[] {
    //确定状态 dp[i]表示i对括号生成的所有可能且有效的组合
    //状态转移方程 dp[i] = for循环遍历dp[i-1]中所有的组合并针对每对组合遍历 发现“(”就在它的左侧和右侧加一对括号生成新的组合 组合最后需要去重
    //初始条件和边界情况 dp[0] = []  dp[1] = ["()"]
    //计算顺序 从小到大 

    const dp = Array(n+1);

    dp[0] = [];
    dp[1] = ["()"];

    for (let i = 2; i < n+1; i++) {
        
        const set = new Set<string>();
        const pre = dp[i-1];
        for (let j = 0; j < pre.length; j++) {

            const curStr = pre[j];
            for (let k = 0; k < curStr.length; k++) {
                if (curStr[k] === '(') {
                    const newStrFromLeft = curStr.slice(0, k) + "()" + curStr.slice(k);
                    const newStrFromRight = curStr.slice(0, k+1) + "()" + curStr.slice(k+1);

                    set.add(newStrFromLeft).add(newStrFromRight);
                }
            }
        }

        dp[i] = [...set];
    }

    return dp[n];
};
