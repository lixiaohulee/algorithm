/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = {}
    function dp(amount) {
        if (memo[amount] !== undefined) return memo[amount]
        if (amount === 0) return 0
        if (amount < 0) return -1
        let res = Number.MAX_VALUE
        for(let i = 0; i < coins.length; i++) {
            let subNum = dp(amount - coins[i])
            if (subNum === -1) continue
            res = Math.min(res, 1+subNum)
        }
        memo[amount] = res >= Number.MAX_VALUE ? -1 : res 
        return memo[amount]
    }
    return dp(amount)
};