/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function(root) {
    if (root === null) return 0
    let res = []
    function helper(root, str) {
        if (root === null) return 
        str = str + root.val
        if (root.left === null && root.right === null) {
            res.push(str.split(''))
        }
        helper(root.left, str)
        helper(root.right, str)

        
    }

    helper(root, '')

    function isPalindrome(arr) {
         let map = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
        }
        let i = 0
        while(i < arr.length) {
            map[arr[i]] = ++map[arr[i]]
            i++
        }
        let odd = 0
        Object.keys(map).forEach(key => {
            if (map[key] % 2 !== 0) {
                odd++
            }
        })

        return odd > 1 ? false : true
    }

    console.log(res)

    let num = 0
    res.forEach(arr => {
        if (isPalindrome(arr)) {
            num++
        }
    })

    return num
};


function Node(val) {
    this.val = val
    this.left = this.right = null
}

const root = new Node(2)
root.left = new Node(3)
root.right = new Node(1)

root.left.left = new Node(3)
root.left.right = new Node(1)
root.right.right = new Node(1)


console.log(pseudoPalindromicPaths(root))