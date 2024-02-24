function partition(s: string): string[][] {
    const isPalindrome = (s: string, start: number, end: number): boolean => {
        for (let i = start, j = end; start <= end; start++, end--) {
            if (s[start] !== s[end]) {
                return false;
            }
        }

        return true;
    }


    const dp = Array(s.length);

    for (let i = 0; i < s.length; i++) {
        dp[i] = [];
        for (let j = s.length - 1; j >= i; j--) {
            if (isPalindrome(s, i, j)) {
                dp[i].push(s.slice(i, j+1));
            }
        }
    }

    const ans: string[][] = [];

    const backTack = (track: string[], len: number, curDp: string[]): void => {
        if (len === s.length) {
            ans.push(track.slice());
            return;
        }

        for (let i = 0; i < curDp.length; i++) {
            track.push(curDp[i]);

            backTack(track, len + curDp[i].length, dp[len + curDp[i].length]);

            track.pop();
        }
    }

    backTack([], 0, dp[0]);

    return ans;
};   
