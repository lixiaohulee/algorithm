function climbStairs(n) {
    //dpFunc 代表爬n阶需要dpFunc(n)中方法
    var cache = [];
    var dpFunc = function (n) {
        if (n === 1)
            return 1;
        if (n === 2)
            return 2;
        if (undefined !== cache[n]) {
            return cache[n];
        }
        var res = dpFunc(n - 1) + dpFunc(n - 2);
        cache[n] = res;
        return res;
    };
    return dpFunc(n);
}
;
