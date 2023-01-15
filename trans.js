// 个 十 百 千 万 十万 百万 千万 亿 十亿 百亿 千亿 万亿
1;
0000;
0000;
0000;
var dict = new Map([
    [0, '零'],
    [1, '一'],
    [2, '二'],
    [3, '三'],
    [4, '四'],
    [5, '五'],
    [6, '六'],
    [7, '七'],
    [8, '八'],
    [9, '九'],
]);
var chineseUnitArr = ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿', '十亿', '百亿', '千亿', '万亿'];
var trans = function (num) {
    var unitArr = Array(13).fill(0);
    var helper = function (num, base, i) {
        if (base < 1)
            return;
        var c = Math.trunc(num / base);
        var y = num % base;
        unitArr[i] = c;
        helper(y, base / 10, i - 1);
    };
    helper(num, 1000000000000, 12);
    var res = '';
    console.log(unitArr);
    for (var i = unitArr.length - 1; i >= 0; i--) {
        var temp = unitArr[i];
        if (temp === 0 && (!res || res.endsWith('零'))) {
            continue;
        }
        console.log(temp, i);
        var chineseNum = dict.get(temp);
        var unit = chineseNum === '零' ? '' : chineseUnitArr[i];
        res = res + chineseNum + unit;
    }
    return res;
};
console.log(trans(21111111));
