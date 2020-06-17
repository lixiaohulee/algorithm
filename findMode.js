/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    function inOrder(root) {
        if (root) {
            inOrder(root.left)
            res.push(root.val)
            inOrder(root.right)
        }
    }

    function getMode(arr) {
        let map = {}
        for(let i = 0, len = arr.length; i < len; i++) {
            if (undefined === map[arr[i]]) {
                map[arr[i]] = 1
            }else {
                map[arr[i]] = ++map[arr[i]]
            }
        }

        let max = -Number.MAX_VALUE
        Object.values(map).forEach(value => {
            max = value > max ? value : max
        })

        let res = []
        Object.keys(map).forEach(key => {
            if (map[key] === max) {
                res.push(key)
            }
        })

        return res
    }

    let res = []
    inOrder(root)
    return getMode(res)
};