//动态规划
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


//中心扩展法 妙啊
function countSubstrings(s: string): number {
    let count = 0; 

    const counter = (s: string, start: number, end: number): void => {
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            count++;
            start--;
            end++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        counter(s, i, i);
        counter(s, i, i+1);   
    }

    return count;
}
