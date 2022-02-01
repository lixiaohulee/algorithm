

const cache = [0,1];

function fib(n) {
    if (n <= 1) return cache[n];

    if (cache[n]) return cache[n];

    cache[n] = fib(n-1) + fib(n-2);

    return cache[n];
}

console.log(fib(44));




function fib(n: number): number {
    if (n < 2) return n;

    let f = 0;
    let g = 1;

    while(n > 1) {
        g = g + f;
        f = g - f;
        n--;
    }

    return g;
};