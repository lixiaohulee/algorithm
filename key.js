var obj = {
    a: {
        b: {
            l: 'ddd'
        },
        c: {
            m: {
                n: 'ddd'
            }
        },
        d: 'ddd'
    },
    e: {
        f: {
            g: {
                h: 'ddd',
                i: {
                    j: {
                        k: 'ddd'
                    }
                }
            }
        }
    }
};
var reduceKey = function (root) {
    var ans = {};
    var traverse = function (path, node) {
        var keys = Object.keys(node);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var newPath = path === '' ? key : path + '.' + key;
            var value = node[key];
            if (typeof value === 'string') {
                ans[newPath] = node[key];
            }
            else {
                traverse(newPath, value);
            }
        }
    };
    traverse('', root);
    return ans;
};
console.log(reduceKey(obj));
