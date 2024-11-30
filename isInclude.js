var diff = function (source, sourceStartIndex, target) {
    for (var i = 0; i < target.length; i++) {
        if (target[i] !== source[sourceStartIndex]) {
            return false;
        }
        sourceStartIndex++;
    }
    return true;
};
var isInclude = function (source, target) {
    if (target.length > source.length) {
        return -1;
    }
    for (var i = 0; i < source.length; i++) {
        if (diff(source, i, target)) {
            return i;
        }
    }
    return -1;
};
console.log(isInclude('afasdfbvadsfa', 'ab'));
