function generate(numRows: number): number[][] {
    //确定状态 dp[i]代表第i行对应数列
    //状态转移方程 dp[i] = for循环第i-1行的数列dp[i-1]
    //初始情况和数组越界问题 dp[0] = [1] 每行数列的第一个元素和最后一个元素都是1
    //计算顺序 从小到大计算 

    const dp: number[][] = [];

    dp[0] = [1];

    for (let i = 1; i < numRows; i++) {
        const temp: number[] = [1];
        const pre = dp[i-1];
        for (let j = 0; j < pre.length-1; j++) {
            temp.push(pre[j] + pre[j+1]);
        }
        temp.push(1);
        dp[i] = temp;
    }

    return dp;
};

function getRow(rowIndex: number): number[] {
    const dp: number[][] = [];

    dp[0] = [1];

    for (let i = 1; i < rowIndex + 1; i++) {
        const preRow = dp[i-1];

        const temp: number[] = [1];
        for (let j = 0; j < preRow.length - 1; j++) {
            temp.push(preRow[j] + preRow[j+1]);
        }
        temp.push(1);
        dp[i] = temp;
    }

    return dp[rowIndex];
};
