```
function leastMinutes(n: number): number {
    if (n <= 1) return n;

    let downloadNum = 0; 
    let minMinutes = 0;
    let times = 1;
    
    while (downloadNum < n) {
        times *= 2;
        minMinutes += 1;

        downloadNum = times;
    }

    return minMinutes + 1;
};
```
