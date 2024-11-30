var func = function (arr) {
    var slow = 0;
    var fast = 1;
    var equalTimes = 0;
    while (fast < arr.length) {
        if (arr[slow] !== arr[fast]) {
            slow++;
            arr[slow] = arr[fast];
            equalTimes = 0;
        }
        else {
            if (equalTimes <= 0) {
                slow++;
                arr[slow] = arr[fast];
            }
            equalTimes++;
        }
        fast++;
    }
    return arr.slice(0, slow + 1);
};
console.log(func([0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4]));
