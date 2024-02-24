function countSubstrings(s: string): number {
    const dp = Array(s.length);

    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i] = [];
        for (let j = i; j < s.length; j++) {
            if (i === j) {
                dp[i][j] = true;
            } else if (j - i === 1) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            }

            if (dp[i][j]) {
                count++;
            }
        }
    }

    return count;
};
