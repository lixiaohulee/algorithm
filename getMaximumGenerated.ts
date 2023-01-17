function getMaximumGenerated(n: number): number {
    const dp = Array(n+1);

    for (let i = 0; i < n + 1; i++) {
        if (i <= 1) {
            dp[i] = i;
            continue;
        }

        if (i % 2 === 0) {
            dp[i] = dp[i / 2];
        } else {
            dp[i] = dp[(i - 1) / 2] + dp[(i -1 ) / 2 + 1];
        }
    }


    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n + 1; i++) {
        max = Math.max(max, dp[i]);
    }

    return max;
};

// 减少一个循环
function getMaximumGenerated(n: number): number {
    const dp = Array(n+1);

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n + 1; i++) {
        if (i <= 1) {
            dp[i] = i;
            continue;
        }

        if (i % 2 === 0) {
            dp[i] = dp[i / 2];
        } else {
            dp[i] = dp[(i - 1) / 2] + dp[(i -1 ) / 2 + 1];
        }

        max = Math.max(max, dp[i]);
    }

    return max === Number.MIN_SAFE_INTEGER ? dp[dp.length-1] : max;
};
