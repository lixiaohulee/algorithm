var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getSumArr = function (arr, target) {
    var getSum = function (arr) {
        return arr.reduce(function (pre, next) { return pre + next; }, 0);
    };
    var ans = [];
    var isExists = function (arr) {
        return ans.some(function (t) {
            for (var i = 0; i < arr.length; i++) {
                if (!t.includes(arr[i])) {
                    return false;
                }
            }
            return true;
        });
    };
    var backtrack = function (track, options) {
        if (getSum(track) === target && !isExists(track)) {
            ans.push(track.slice());
            return;
        }
        for (var i = 0; i < options.length; i++) {
            if (getSum(track) > target) {
                continue;
            }
            var o = options[i];
            track.push(o);
            backtrack(track, __spreadArray(__spreadArray([], options.slice(0, i), true), options.slice(i + 1), true));
            track.pop();
        }
    };
    backtrack([], arr);
    return ans;
};
console.log(getSumArr([4, 3, 2, 1, 5, 8, 7, 9, 6].sort(function (pre, next) { return pre - next; }), 9));
