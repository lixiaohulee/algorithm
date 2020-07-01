

var pathSum = function(root, sum) {
    let res = 0
    function helper(root, sum) {
        if (root === null) return
        search(root,sum,root.val)
        helper(root.left, sum)
        helper(root.right, sum)
    }
    
    function search(root, sum, curVal) {
        if (sum === curVal) {
            res++
        }
        
        if (root.left) {
            search(root.left, sum, root.left.val + curVal)
        }

        if (root.right) {
            search(root.right, sum, root.right.val + curVal)
        }
    }

    helper(root, sum)
    return res
}  