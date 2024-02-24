var bfs = function (root) {
    if (root === null)
        return [];
    var res = [];
    var queue = [];
    queue.push(root);
    while (queue.length > 0) {
        var len = queue.length;
        for (var i = 0; i < len; i++) {
            var head = queue.shift();
            res.push(head.val);
            for (var j = 0; j < head.children.length; j++) {
                var curChild = head.children[j];
                if (curChild) {
                    queue.push(curChild);
                }
            }
        }
    }
};
