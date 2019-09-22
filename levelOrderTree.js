/**
 * 给出一棵二叉树，返回其节点值的层次遍历（逐层从左往右访问）
 * 样例
 * 样例 1:
 * 输入：{1,2,3}
 * 输出：[[1],[2,3]]
 * 解释：
 *   1
 *  / \
 * 2   3
 * 它将被序列化为{1,2,3}
 * 层次遍历
 * 样例 2:
 * 输入：{1,#,2,3}
 * 输出：[[1],[2],[3]]
 * 解释：
 * 1
 *  \
 *   2
 * /
 * 3
 * 它将被序列化为{1,#,2,3}
 * 层次遍历
 * 挑战
 * 挑战1：只使用一个队列去实现它
 * 挑战2：用BFS算法来做
 * 注意事项
 * 首个数据为根节点，后面接着是其左儿子和右儿子节点值，"#"表示不存在该子节点。
 * 节点数量不超过20
 */

/**
 * 节点构造函数
 */

function Node(val) {
    this.val = val
    this.left = null
    this.right = null
}

function creatTree(arr) {
    const len = Array.isArray(arr) ? arr.length : 0
    if (len === 0) {
        return null
    }

    const root = new Node(arr[0])

    function insertNode(rootNode, val) {
        if (rootNode) {
            if (val < rootNode.val) {
                if (rootNode.left) {
                    insertNode(rootNode.left, val)
                }else {
                    rootNode.left = new Node(val)
                }
            }else {
                if (rootNode.right) {
                    insertNode(rootNode.right, val)
                }else {
                    rootNode.right = new Node(val)
                }
            }
        }
    }

    for(let i = 1; i <= len - 1; i++) {
        insertNode(root, arr[i])
    }

    return root
}

/**
 * 层次遍历
 */
const levelOrder = root => {
    if (!root) {
        return []
    }

    let queue = []
    let res = []

    queue.push(root)

    while(queue.length !== 0) {
        let level = []
        let len = queue.length

        for(let i = 0; i <= len - 1; i++) {
            const curNode = queue.shift()
            level.push(curNode.val)

            if (curNode.left) {
                queue.push(curNode.left)
            }

            if (curNode.right) {
                queue.push(curNode.right)
            }
        }
        res.push(level)
    }

    return res
}


const arr = [1,2,3,4,5,6,7]

console.log(creatTree(arr).right.right.right)


const root = creatTree(arr)

console.log(levelOrder(root))






function getP(arr,left,right){
    let temp=arr[left];
    let l=left,r=right;
    while(l<r){
        while(l<r&&arr[r]>=temp) r--;
        while(l<r&&arr[l]<=temp) l++;
        let t=arr[r];
        arr[l]=arr[r]
        arr[r]=t;
    }
    arr[left]=arr[r]
    arr[r]=temp;
    return r;
}

function quick(arr,left,right){
    let index=getP(arr,left,right);
    if(index<right-1) quick(arr,left,index);
    if(index>left-1) quick(arr,index,right);
}
let arr=[1,2,3,5,2,4];
quick(arr,0,arr.length);
console.log(arr)






function binarySearch(arr, target)
 {
     if(arr){
         
     var start=0;
     var end=arr.length-1
     while(start!=end){
         let cur=Math.floor((end-start)/2)
         console.log(start+": "+end+" ")
         if(arr[cur]==target) {
            return cur;
        }
     else if(arr[cur]<target) {
        end=cur-1;
    }
     else if(arr[cur]>target){
         start=cur+1
         console.log(start)
     }
     }
         
         return -1
     }
     
     
           return -1
         }




var arr = [1,4,6,8]
var target = 8

console.log(binarySearch(arr,target))