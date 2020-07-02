

/**
 * 实现二叉搜索树
 */


/**
 * Node data strucure
 * @param {*} 
 */
function Node(val) {
    this.val = val
    this.left = null
    this.right = null
}

/**
 * insert Node 
 * @param {Node} root 
 * @param {*} val 
 */
function insertNode(root, val) {
    if (root && root instanceof Node) {
        if (val < root.val) {
            if (root.left) {
                insertNode(root.left, val)
            }else {
                root.left = new Node(val)
            }
        }else {
            if (root.right) {
                insertNode(root.right, val)
            }else {
                root.right = new Node(val)
            }
        }
    }
}

/**
 * create binarySearchTree
 * @param {Array} arr 
 * @returns {Node} root
 */
function createTree(arr) {
    const len = Array.isArray(arr) ? arr.length : 0
    if (len === 0) {
        return null
    }

    const root = new Node(arr[0])
    let index = 1
    while(index <= len - 1) {
        insertNode(root, arr[index])
        index++
    }

    return root
}

const arr = [1,2,3,4,5]

const root = createTree(arr)
console.log(root)

 


/**
 * 层级遍历
 * @param {Node} root
 * @returns {Array} 
 */
function levelOrder(root) {
    if (root && root instanceof Node) {
        let queue = []
        let res = []

        queue.push(root)

        while(queue.length !== 0) {
            let temp = []
            let len = queue.length
            for(let i = 0; i <= len - 1; i++) {
                const curNode = queue.shift()
                temp.push(curNode.val)

                if (curNode.left) {
                    queue.push(curNode.left)
                }

                if (curNode.right) {
                    queue.push(curNode.right)
                }
            }

            res.push(temp)
        }

        return res
    }
}

console.log(levelOrder(root))




//
function f(root) {
    let queue = [root]
    while(queue.length !== 0) {
        const node = queue.shift()
        if(node.isStart) console.log(',')
        console.log(node.val)
        if(node.left) {
          queue.push(node.left)
          node.left.isStart = true
        }
        if(node.right) {
          queue.push(node.right)
          if(node.left === null) node.right.isStart = true
        }
    }
}
f(root)
