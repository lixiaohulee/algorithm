var diff = function (s1, s2) {
    var indexArr = [];
    var i = 0;
    var j = 0;
    while (i < s1.length && j < s2.length) {
        if (s1[i] !== s2[j]) {
            indexArr.push(j);
        }
        i++;
        j++;
    }
    while (j < s2.length) {
        indexArr.push(j);
        j++;
    }
    return indexArr;
};
var s1 = '12232';
var s2 = '123dfd';
console.log(diff(s1, s2));
