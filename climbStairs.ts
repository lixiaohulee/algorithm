function climbStairs(n: number): number {
    //dpFunc 代表爬n阶需要dpFunc(n)中方法

    const cache: number[] = [];
    const dpFunc = (n: number): number => {
        if (n === 1) return 1;
        if (n === 2) return 2;

        if (undefined !== cache[n]) {
            return cache[n];
        }

        const res = dpFunc(n - 1) + dpFunc(n - 2);
        cache[n] = res;

        return res;
    }

    return dpFunc(n);
};