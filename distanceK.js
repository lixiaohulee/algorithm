/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    if (K === 0) return [target.val]
    //找父节点
    function findParent(root, target) {
        if (root === null || root === target) return  
        
        if (root.left) {
            root.left.parent = root
            findParent(root.left, target)
        }

        if (root.right) {
            root.right.parent = root
            findParent(root.right, target)
        }
    }

    //向下搜索
    function dfs(root, K) {
        if (root === null || paths.indexOf(root) !== -1) return 
        if (paths.push(root))
        if (K === 0) {
            res.push(root.val)
            return
        }
        dfs(root.left, K-1)
        dfs(root.right, K-1)
    }

    //向上搜索
    function upDfs(root, K) {
        if (K === 0) {
            res.push(root.val)
            return
        }
        let curParent = root.parent
        while(curParent) {
            if (--K === 0) {
                res.push(curParent.val)
                return
            }
            dfs(curParent, K)
            curParent = curParent.parent
        }
    }

    let res = [],
        paths = [] //防止向上搜索时对于某一级的某个父节点再向下搜索的时候重复
    
    findParent(root, target)
    dfs(target, K)
    upDfs(target, K)

    return res 

};

function Node(val) {
    this.left = this.right = null
    this.val = val
}
const root = new Node(3)
root.left = new Node(5)
root.right = new Node(1)

root.left.left = new Node(6)
root.left.right = new Node(2)

root.left.right.left = new Node(7)
root.left.right.right = new Node(4)

root.right.left = new Node(0)
root.right.right = new Node(8)

console.log(distanceK(root, root.left, 2))