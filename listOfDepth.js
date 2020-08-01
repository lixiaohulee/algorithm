/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    let res = [],
        queue = []
    
    queue.push(tree)
    while(queue.length) {
        let head = new ListNode(-1),
            curNode = head
        for(let i = 0, len = queue.length; i < len; i++) {
            let node = queue.shift()
            curNode.next = new ListNode(node.val)
            curNode = curNode.next
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(head.next)
    }
    return res 
};