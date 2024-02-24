const VOWEL_LIST = ["a","e","i","o","u"];
function countVowelStrings(n: number): number {

    let pre = VOWEL_LIST;

    for (let i = 2; i < n+1; i++) {
        const cur = [];

        for (let j = 0; j < pre.length; j++) {
            const str = pre[j];
            const lastChar = str[str.length-1];

            const lastCharIndex = VOWEL_LIST.findIndex((item) => item === lastChar); 
            const options = VOWEL_LIST.slice(lastCharIndex);

            for (let k = 0; k < options.length; k++) {
                cur.push(str + options[k]);
            }
        }

        pre = cur;
    }

    return pre.length;
};

function countVowelStrings(n: number): number {
    //确定状态 dp[i][j]表示有字符串数量为i时 以第j个元音字母为结尾的字符串的个数
    //状态转移方程 dp[i][j] = dp[i-1][0] + dp[i-1][1] + ... + dp[i-1][j]  j < 5;
    //初始条件和边界情况 dp[0] = []; dp[1] = [1,1,1,1,1];
    //计算顺序 从小到大

    const dp = Array(n+1);
    
    dp[0] = [];
    dp[1] = [1,1,1,1,1];

    for (let i = 2; i < n+1; i++) {
        dp[i] = [0,0,0,0,0];
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k <= j; k++) {
                dp[i][j] += dp[i-1][k];
            }
        }
    }

    let sum = 0; 
    for (let i = 0; i < 5; i++) {
        sum += dp[n][i];
    }

    return sum;
};
