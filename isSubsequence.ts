function isSubsequence(s: string, t: string): boolean {

    const dp = Array(s.length);

    let mark = 0;
    for (let i = 0; i < s.length; i++) {
        dp[i] = false;

        for (let j = mark; j < t.length; j++) {
            if (s[i] === t[j]) {
                dp[i] = true;
                mark = j + 1;
                break;
            }
        }

        if (dp[i] === false) {
            return false;
        }
    }

    return true;
};
