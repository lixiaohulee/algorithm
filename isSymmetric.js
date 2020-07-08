/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function levelOrder(root) {
        let queue = []
        queue.push(root)

        const res = []
        while(queue.length > 0) {
            const temp = []
            for(let i = 0, len = queue.length; i < len; i++) {
                let head = queue.shift()
                temp.push(head.val)
                if (head.left && head.right === null) {
                    if (head.left) queue.push(head.left)
                    queue.push(new TreeNode(undefined))
                }else if (head.right && head.left === null) {
                    
                    if (head.right) queue.push(head.right)
                    queue.push(new TreeNode(undefined))
                }else {
                    if (head.left) queue.push(head.left)
                    if (head.right) queue.push(head.right)
                }
            }
            res.push(temp)
        }

        return res
    }

    let levelArr = levelOrder(root)
    function symmetric(arr) {
        for(let i = 0, len = arr.length; i < len; i++) {
            let lenNum = arr[i].length 
            if (lenNum % 2 !== 0 && i !== 0) return false

            for(let a = 0, b = lenNum - 1; a - b < 0; a++, b--) {
                if (arr[i][a] !== arr[i][b]) {
                    return false
                }
            }
        }

        return true
    }

    return symmetric(levelArr)
};

function TreeNode(val) {
    this.val = valN
    this.left = this.right = null
}


const root = new TreeNode(1)
// root.left = new TreeNode(0)
root.right = new TreeNode(0)

console.log(isSymmetric(root))