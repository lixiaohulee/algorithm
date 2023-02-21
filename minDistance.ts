function minDistance(word1: string, word2: string): number {
    //定义函数dpFunc(i, j)表示word1[0...i] 转换成 word2[0...j]需要的最少的操作数。

    const cache = new Map<string, number>();
    const generateKey = (i: number, j: number): string => `${i}${j}`;

    //我们假设把word1转换成word2(实际上将word2转换成word1是一样的，两者的最少操作数是一样的)
    //那么每次操作都在word1上做动作
    const dpFunc = (i: number, j: number): number => {
        //递归出口 base case

        //如果说word1的所有字符都被遍历处理完了 也就是说i === -1 了。这时如果word2还有字符没有被匹配，那么我们只要接着再word1的最前面连续添加字符就行了 添加的步骤应该是j + 1
        //如果说word2的所有字符都被匹配了 也就是说j ==== -1了。这时如果word1还有字符剩余的话，那么只要把剩余的所有自负都删除掉就可以了 删除的步骤应该是：i + 1

        if (i === -1) {
            return j + 1;
        }

        if (j === -1) {
            return i + 1;
        }

        const key = generateKey(i, j);
        if (undefined !== cache.get(key)) {
            return cache.get(key);
        }

        let temp = 0;

        //如果字符i和字符j当前都有的话 那么先看看word1[i] 和 word2[j]是否相等  相等的话那就什么都别做 i 和 j 都继续前进以一位就行了 什么都没有做 操作数也不用变
        if (word1[i] === word2[j]) {
            temp = dpFunc(i-1, j-1);
        } else {
            //如果不相等的话。那么这时我们针对word1[i]这个字符可以处理的操作有三种，
            //要么在i位置后面插入一个word2[j]字符 这时j字符就被匹配了，然后让j前进一位再和i对比
            //要么把i位置字符直接删除掉，这样的话让i前面的拿一位字符再跟j对比
            //再要么直接把i位置字符替换成j字符 这样的话i字符和j字符都相等了 i和j都各自前进一位接着对比
            //每一对位置都有三种选择 这就像一课树的路径一样 我们现在不知道具体那种选择对应的路径最后是操作数最少的 所以我们取他们中最小的就行


            temp = Math.min(
                dpFunc(i, j-1) + 1,
                dpFunc(i-1, j) + 1,
                dpFunc(i-1, j-1) + 1,
            )
        }

        cache.set(key, temp);

        return temp;
    }

    return dpFunc(word1.length - 1, word2.length - 1);
};





function minDistance(word1: string, word2: string): number {
    //确定状态 dp[i][j] 表示将word1[0...i] 转换成 word2[0...j] 需要的最少操作数
    //状态转移方程 dp[i][j] = Math.min(dp[i-1][j-1] + 1, dp[i-1][j] + 1, dp[i][j-1] + 1);
    //初始情况和边界条件 i === 0 ? dp[0][j] = j; j === 0 ? dp[i][0] = i
    //计算顺序 从小到大

    const m = word1.length;
    const n = word2.length;

    const dp = Array(m + 1);


    for (let i = 0; i < m + 1; i++) {
        dp[i] = [];
        dp[i][0] = i;
    }

    for (let j = 0; j < n + 1; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1] + 1, dp[i-1][j] + 1, dp[i][j-1] + 1);
            }
        }
    }

    return dp[m][n];
}
