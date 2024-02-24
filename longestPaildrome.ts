const isPalindrome = (subStr: string): boolean => {
    for (let i = 0, j = subStr.length - 1; i < j; i++, j--) {
        if (subStr[i] !== subStr[j]) {
            return false;
        }
    }
    return true;
}

//暴力 
function longestPalindrome(s: string): string {

    const dp = Array(s.length);

    let longest = '';
    for (let i = 0; i < s.length; i++) {   //O(n3)
        dp[i] = s[i];
        for (let j = 0; j < i; j++) {
            
            if (isPalindrome(s.slice(j,i+1))) {
                dp[i]= s.slice(j,i+1);
                break;
            }
        }

        longest = dp[i].length > longest.length ? dp[i] : longest;
    }

    return longest;
};   　


function longestPalindrome(s: string): string {

    const dp = Array(s.length);

    dp[0] = s[0];

    let longest = dp[0];
    for (let i = 1; i < s.length; i++) {
        dp[i] = s[i];

        let current = s[i];
        for (let j = i - 1; j >= 0; j--) {
            if (isPalindrome(current + dp[j])) {
                dp[i] = current + dp[j];
                break;
            }

            current += s[j];

            if (isPalindrome(current)) {
                dp[i] = current;
            }
        }

        longest = dp[i].length > longest.length ? dp[i] : longest;
    }

    return longest;
}
