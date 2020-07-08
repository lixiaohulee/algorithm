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
var rightSideView = function(root) {
    if (root === null) return []
    let queue = [],
        res = []
    queue.push(root)

    while(queue.length > 0) {
        let curLevel = []
        for(let i = 0, len = queue.length; i < len; i++) {
            let head = queue.shift()
            curLevel.push(head.val)
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)
        }
        res.push(curLevel.pop())
    }

    return res
};


function Node(val) {
    this.val = val
    this.left = this.right = null
}


const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)

root.left.right = new Node(5)
root.right.right = new Node(4)


console.log(rightSideView(root))