function uniquePaths(m, n) {
    //确定状态 dp[i][j]代表从左上角到格子i j 有dp[i][j]中方式
    //确定状态转移方程 dp[i][j]这个状态的前一步之能是dp[i-1][j] 或者 dp[i][j-1]
    //dp[i-1][j]表示到i-1 j 这个点有dp[i-1][j]种方式  dp[i][j-1]表示到i j-1这个点有 dp[i][j-1]种方式 
    //那么到dp[i][j]的方式总共有dp[i-1][j] + dp[i][j-1]种方式 
    //确定边界情况和数组越界问题 左上角到dp[0][0] 有一种 就在原地啊。dp[0][n]从左上角到第一列的任何一个格子都是只有一中方式 那就是
    //向下。dp[m][0]从左上角到第一行的任何一个格子都是只有一中方式 那就是想右。
    //计算顺序。先计算行 再计算列
    var dp = Array(m);
    for (var i = 0; i < m; i++) {
        var temp = Array(n);
        for (var j = 0; j < n; j++) {
            if (i === 0) {
                temp[j] = 1;
            }
            else if (j === 0) {
                temp[j] = 1;
            }
            else {
                temp[j] = Number.MAX_SAFE_INTEGER;
            }
        }
        dp[i] = temp;
    }
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            dp[j][i] = dp[j - 1][i] + dp[j][i - 1];
        }
    }
    return dp[m - 1][n - 1];
}
;
