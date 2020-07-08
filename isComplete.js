/**
 * Definition for a binary tree node
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var getDeep = root => {
    function dfs(root) {
        if (root === null) return 0
        let left = 1 + dfs(root.left)
        let right = 1 + dfs(root.right)

        return Math.max(left, right)
    }
    return dfs(root)
}
var isCompleteTree = function(root) {
    let queue = []
    let deep = getDeep(root)

    queue.push(root) 

    let curDeep = 0
    while(queue.length > 0) {
        let curLevel = []
        for(let i = 0, len = queue.length; i < len; i++) {
            let head = queue.shift()
            queue.push(head)
            if (curDeep === deep && !head.left && head.right) return false
            if (head.left) curLevel.push(head.left)
            if (head.right) curLevel.push(head.right)
        }

        if (curDeep !== deep && curLevel.length !== Math.pow(2, curDeep)) return false 
        curDeep++
    }

    return true
};


function Node(val) {
    this.val = val
    this.left = this.right = null
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)

console.log(isCompleteTree(root))