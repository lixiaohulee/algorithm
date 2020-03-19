
function Node(val) {
    this.val = val
    this.left = null
    this.right = null
}

const root = new Node(8)

root.left = new Node(5)
root.right = new Node(9)

root.left.left = new Node(2)
root.left.right = new Node(6)


root.right.right = new Node(10)

















let leastTwoNums = []
var minDiffInBST = function(root) {
    if (root) {
        minDiffInBST(root.left)
        leastTwoNums.push(root.val)
        minDiffInBST(root.right)

        return leastTwoNums[1] - leastTwoNums[0]
    }
}


console.log(minDiffInBST(root))

