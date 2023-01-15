//“ababac” —— “ababa”
//“aaabbbcceeff” —— “aaabbb”
var deleteTheLeastFrequentChar = function (str) {
    var charArr = str.split('');
    var map = new Map(); // O(n)
    for (var i = 0; i < charArr.length; i++) { // O(n)
        var curChar = charArr[i];
        var count = map.get(curChar);
        if (undefined === count) {
            map.set(curChar, 1);
        }
        else {
            map.set(curChar, count + 1);
        }
    }
    var min = Number.MAX_SAFE_INTEGER;
    var minCharArr = [];
    var mapArr = Array.from(map);
    for (var i = 0; i < mapArr.length; i++) { //O(n)
        var _a = mapArr[i], char = _a[0], count = _a[1];
        if (count < min) {
            min = count;
            minCharArr = [];
        }
        else if (count === min) {
            minCharArr.push(char);
        }
    }
    var newCharArr = [];
    for (var i = 0; i < charArr.length; i++) { //O(n2)
        var temp = charArr[i];
        if (minCharArr.includes(temp)) {
            continue;
        }
        newCharArr.push(temp);
    }
    return newCharArr.join();
};
console.log(deleteTheLeastFrequentChar("ababac"));
